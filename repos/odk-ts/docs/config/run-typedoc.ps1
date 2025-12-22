$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")

Push-Location $repoRoot
try {
  npx typedoc --options "docs/config/typedoc.json"
} finally {
  Pop-Location
}
