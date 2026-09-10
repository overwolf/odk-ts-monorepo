// Fails the build when a public source module is not re-exported from the
// package barrel (src/window/index.ts).
//
// Consumers are expected to import everything from the package root, so a new
// enum / interface / options type that nobody adds to the barrel is invisible
// to them - and the omission is easy to miss in review. This turns that into a
// build error naming the exact file.
//
// A module is treated as public unless it is listed in IGNORED_DIRS/IGNORED_FILES
// below, or its declarations are all marked `@internal`.

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const SRC = fileURLToPath(new URL('../src', import.meta.url));
const BARREL = join(SRC, 'window', 'index.ts');

// Directories that are implementation detail, not public API.
const IGNORED_DIRS = [
  join('window', 'internal'),
  join('window', 'utils'),
  join('window', 'positioning'),
  'common',
  'utils',
];

// Individual files that are entry points, build tooling, or intentionally
// not part of the public surface.
const IGNORED_FILES = [
  'index.ts',
  join('window', 'index.ts'),
  'setup-package-devenv.ts',
  'setup-package-files.ts',
  'setup-package-rename.ts',
  join('lib', 'event_emitter.ts'), // only `Event`/`EventHandler` are public
];

function walk(dir) {
  return readdirSync(dir).flatMap(entry => {
    const full = join(dir, entry);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

const barrel = readFileSync(BARREL, 'utf8');

// Names the barrel re-exports explicitly, e.g. `export { MonitorHelper } from`
// or `export type { Event, EventHandler } from`.
const named = new Set(
  [...barrel.matchAll(/export\s+(?:type\s+)?\{([^}]+)\}/g)].flatMap(m =>
    m[1].split(',').map(n =>
      n
        .trim()
        .split(/\s+as\s+/)[0]
        .trim()
    )
  )
);

// Modules the barrel re-exports wholesale, e.g. `export * from './enums/edge'`.
const starred = new Set(
  [...barrel.matchAll(/export\s+\*\s+from\s+'\.\/([^']+)'/g)].map(m => m[1])
);

const missing = [];

for (const file of walk(SRC)) {
  const rel = relative(SRC, file);
  if (!rel.endsWith('.ts')) continue;
  if (IGNORED_FILES.includes(rel)) continue;
  if (IGNORED_DIRS.some(d => rel.startsWith(d + sep))) continue;

  const source = readFileSync(file, 'utf8');

  // Exported declarations that are not marked @internal.
  const exported = [
    ...source.matchAll(
      /(\/\*\*[\s\S]*?\*\/\s*)?export\s+(?:declare\s+)?(?:abstract\s+)?(?:class|interface|enum|type|const|function|namespace)\s+([A-Za-z_$][\w$]*)/g
    ),
  ]
    .filter(m => !/@internal/.test(m[1] ?? ''))
    .map(m => m[2]);

  if (exported.length === 0) continue;

  // window/enums/edge.ts -> enums/edge, as the barrel spells it
  const moduleId = rel.slice(0, -3).split(sep).slice(1).join('/');

  if (starred.has(moduleId)) continue;

  const unexported = [...new Set(exported)].filter(n => !named.has(n));
  if (unexported.length > 0) {
    missing.push({ file: rel.split(sep).join('/'), names: unexported });
  }
}

if (missing.length > 0) {
  console.error(
    '\nThese public declarations are not re-exported from src/window/index.ts:\n'
  );
  for (const { file, names } of missing) {
    console.error(`  ${file}  ->  ${names.join(', ')}`);
  }
  console.error(
    '\nAdd them to the barrel so consumers can import them from the package\n' +
      'root, mark them `@internal`, or add the module to IGNORED_DIRS /\n' +
      'IGNORED_FILES in scripts/check-exports.mjs if it is not public API.\n'
  );
  process.exit(1);
}

console.log(
  'check-exports: every public module is re-exported from the barrel'
);
