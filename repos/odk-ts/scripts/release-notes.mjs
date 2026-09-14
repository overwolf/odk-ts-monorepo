#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// GitHub's own release-note generator lists merged pull requests only, and most
// work here lands as direct commits to main, so it would report almost nothing.
// These notes are built from the conventional-commit subjects instead.

const TAG_PREFIX = 'odk-ts@';
const REPO_URL = 'https://github.com/overwolf/odk-ts-monorepo';
const FIELD = '';

const pkgDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const git = (...args) =>
  execFileSync('git', args, {
    cwd: pkgDir,
    encoding: 'utf8',
    maxBuffer: 32 * 1024 * 1024,
  }).trim();

const pkg = JSON.parse(
  readFileSync(path.join(pkgDir, 'package.json'), 'utf8')
);

const tag = process.argv[2] || `${TAG_PREFIX}${pkg.version}`;
const version = tag.slice(TAG_PREFIX.length);

const toParts = (name) => name.slice(TAG_PREFIX.length).split('.').map(Number);

const byVersion = (a, b) => {
  const left = toParts(a);
  const right = toParts(b);
  for (let i = 0; i < 3; i += 1) {
    if (left[i] !== right[i]) return left[i] - right[i];
  }
  return 0;
};

// Sorted here rather than with `git tag --sort=-v:refname`, whose version
// ordering across the "@" separator is not something to rely on.
const tags = git('tag', '--list', `${TAG_PREFIX}*`)
  .split('\n')
  .filter((name) => /^odk-ts@\d+\.\d+\.\d+$/.test(name))
  .sort(byVersion);

const previous = tags.filter((name) => byVersion(name, tag) < 0).pop();

// Falling back to HEAD lets the notes for the next release be previewed before
// the bump has been tagged.
const target = tags.includes(tag) ? tag : 'HEAD';
const range = previous ? `${previous}..${target}` : target;

// Pathspec "." keeps sample-app and monorepo-root commits out of a package release.
const log = git(
  'log',
  range,
  '--no-merges',
  `--format=%h${FIELD}%s${FIELD}%b%x00`,
  '--',
  '.'
);

const commits = log
  .split('\0')
  .map((record) => record.trim())
  .filter(Boolean)
  .map((record) => {
    const [hash, subject, body = ''] = record.split(FIELD);
    return { hash, subject, body };
  });

const SECTIONS = [
  { key: 'breaking', title: 'Breaking Changes' },
  { key: 'feat', title: 'Features' },
  { key: 'fix', title: 'Bug Fixes' },
  { key: 'perf', title: 'Performance' },
  { key: 'docs', title: 'Documentation' },
];

// Only these types reach the notes. Build plumbing, chores, CI, tests and
// refactors change nothing for someone installing the package. A commit marked
// breaking is always included, whatever its type.
const TYPE_SECTIONS = { feat: 'feat', fix: 'fix', perf: 'perf', docs: 'docs' };

const CONVENTIONAL = /^(\w+)(?:\(([^)]*)\))?(!)?: (.+)$/;
const VERSION_BUMP = /^odk-ts: bump version to \d+\.\d+\.\d+$/;

const groups = new Map(SECTIONS.map((section) => [section.key, []]));
const skipped = [];

for (const commit of commits) {
  if (VERSION_BUMP.test(commit.subject)) continue;

  const match = CONVENTIONAL.exec(commit.subject);
  const [, type, scope, bang, subject] = match ?? [];
  const breaking = Boolean(bang) || /^BREAKING[ -]CHANGE:/m.test(commit.body);
  const key = breaking ? 'breaking' : TYPE_SECTIONS[type];

  // Reported on stderr rather than dropped quietly, so a consumer-facing
  // change written without a recognised type is visible in the release log
  // instead of silently missing from the notes.
  if (!key) {
    skipped.push(`${commit.hash} ${commit.subject}`);
    continue;
  }

  // Every commit in this package is scoped odk-ts, so that scope is noise.
  const label = scope && scope !== 'odk-ts' ? `**${scope}:** ` : '';
  const text = subject ?? commit.subject;

  groups
    .get(key)
    .push(`- ${label}${text} ([${commit.hash}](${REPO_URL}/commit/${commit.hash}))`);
}

const sections = [];

for (const { key, title } of SECTIONS) {
  const entries = groups.get(key);
  if (entries.length === 0) continue;
  sections.push(`### ${title}`, '', ...entries, '');
}

if (sections.length === 0) {
  sections.push('No packaged changes landed in this release.', '');
}

// Hand-written notes for this version, placed ahead of the generated sections,
// carrying the migration guidance that no commit subject can express. Optional:
// most releases will not have one. Written as next.md and renamed to
// <version>.md by the bump, so both names are checked - the second is what a
// preview run finds before the release has been tagged.
const addendumPath = [
  path.join(pkgDir, 'release-notes', `${version}.md`),
  path.join(pkgDir, 'release-notes', 'next.md'),
].find((candidate) => existsSync(candidate));

const addendum = addendumPath ? readFileSync(addendumPath, 'utf8').trim() : '';

const lines = [];

if (addendum) lines.push(addendum, '');

lines.push(...sections);

lines.push(
  '### Install',
  '',
  '```bash',
  `npm install ${pkg.name}@${version}`,
  '```',
  ''
);

if (previous) {
  lines.push(`**Full Changelog**: ${REPO_URL}/compare/${previous}...${tag}`);
}

process.stdout.write(`${lines.join('\n')}\n`);

if (skipped.length > 0) {
  process.stderr.write(
    `release-notes: left out ${skipped.length} commit(s) as not consumer-facing:\n` +
      skipped.map((line) => `  ${line}\n`).join('')
  );
}
