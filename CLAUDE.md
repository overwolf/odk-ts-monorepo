# CLAUDE.md

## Layout

`repos/odk-ts` is the published package (`@overwolf/odk-ts`). `repos/sample-app`
is a private consumer of it and the reference developers copy, so keep it in
step with API changes. Both take the `overwolf` global declarations from the
`types/overwolf` submodule, which is a build-time concern only — no `overwolf.*`
type may appear in the package's public API.

## Releasing

One manual step:

```bash
npm run -w @overwolf/odk-ts version:patch|minor|major
```

That runs the release gates, bumps `package.json`, tags `odk-ts@<version>` and
pushes. `.github/workflows/release.yml` then publishes to npm via OIDC trusted
publishing and creates the GitHub Release. Never `npm publish` by hand — CI owns
publishing, and the workflow filename is registered with npm as the trusted
publisher, so renaming it breaks releases.

`docs/` is generated. Run `npm run -w @overwolf/odk-ts docs` and commit the
result whenever public doc comments or the public surface change, or the release
gate will reject the bump.

## Release notes

Generated from commit subjects by `repos/odk-ts/scripts/release-notes.mjs` and
grouped by conventional-commit type, so write subjects accordingly:
`feat(window): ...`, `fix(odk-ts): ...`, `docs(odk-ts): ...`. Preview with
`npm run -w @overwolf/odk-ts release:notes`.

Only what affects a consumer of the published package belongs in release notes,
and the script enforces it: `feat`, `fix`, `perf` and `docs` appear, everything
else (`build`, `chore`, `ci`, `test`, `refactor`) is left out and listed on
stderr instead. A commit marked breaking always appears, whatever its type.
Commits touching only the monorepo root or `repos/sample-app` are out of scope
for the package and never appear.

## Breaking changes

When a change breaks a consumer of the published package, do both:

1. **Mark the commit** — `feat(window)!: ...`, or a `BREAKING CHANGE: ...`
   footer in the body. This is what files it under "Breaking Changes" in the
   generated notes.
2. **Write the migration guidance** in `repos/odk-ts/release-notes/next.md`.
   Create it if absent; add a subsection if it already exists. The bump renames
   it to `<version>.md`, so never name it after a guessed version.

The marker alone yields a one-line headline; `next.md` is where the before/after
snippets live. Follow the shape of the most recent `release-notes/*.md`:
headline bullets first, then one `####` subsection per item, each showing
`// before` and `// after`.
