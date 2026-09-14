#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { existsSync, readFileSync, renameSync } from 'node:fs';
import path from 'node:path';

function sh(cmd, opts = {}) {
  execSync(cmd, { stdio: 'inherit', ...opts });
}

// patch | minor | major
const bump = process.argv[2] || 'patch';
if (!['patch', 'minor', 'major'].includes(bump)) {
  console.error('Usage: npm run version:patch|minor|major');
  process.exit(1);
}

// ensure we're run from odk-ts
const pkgDir = process.cwd();
const pkgPath = path.join(pkgDir, 'package.json');

// run the gates the release workflow enforces, before anything is bumped,
// committed or tagged - otherwise a rejected release leaves a pushed tag that
// has to be deleted remotely. docs:check leaves the regenerated pages in the
// working tree, so a failure there is one `git add docs` away from fixed.
try {
  sh('npm run check-exports');
  sh('npm run docs:check');
} catch {
  console.error(
    '\n✖ Release gate failed. Fix the problem above and commit the result ' +
      'before bumping - the release workflow runs these same checks.'
  );
  process.exit(1);
}

// bump version without auto git tag
sh(`npm version ${bump} --no-git-tag-version`);

// read bumped version
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const version = pkg.version;
const tag = `odk-ts@${version}`;

// hand-written release notes are written as next.md, so a breaking change never
// has to guess which version will ship it - the bump resolves the name here
const nextNotes = path.join(pkgDir, 'release-notes', 'next.md');
if (existsSync(nextNotes)) {
  renameSync(nextNotes, path.join(pkgDir, 'release-notes', `${version}.md`));
  sh('git add release-notes');
  console.log(`✔ release notes: next.md -> ${version}.md`);
}

// commit the bump, and the renamed notes when there are any. npm version also
// rewrites this workspace's entry in the root lockfile, which the release
// installs from - ":/" resolves it from the repo root, since we run in repos/odk-ts
sh(`git add "${path.relative(process.cwd(), pkgPath)}" ":/package-lock.json"`);
sh(`git commit -m "odk-ts: bump version to ${version}"`);

// create a namespaced annotated tag
sh(`git tag -a "${tag}" -m "Release ${tag}"`);

// push commit and tag
sh('git push --follow-tags');

console.log(`✔ odk-ts bumped to ${version}`);
console.log(`✔ git tag created: ${tag}`);
console.log('✔ changes pushed to remote');
