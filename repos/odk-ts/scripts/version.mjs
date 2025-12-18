#!/usr/bin/env node
import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
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

// bump version without auto git tag
sh(`npm version ${bump} --no-git-tag-version`);

// read bumped version
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
const version = pkg.version;
const tag = `odk-ts@${version}`;

// commit only this package.json
sh(`git add "${path.relative(process.cwd(), pkgPath)}"`);
sh(`git commit -m "odk-ts: bump version to ${version}"`);

// create a namespaced tag
sh(`git tag "${tag}"`);

// push commit and tag
sh('git push --follow-tags');

console.log(`✔ odk-ts bumped to ${version}`);
console.log(`✔ git tag created: ${tag}`);
console.log('✔ changes pushed to remote');
