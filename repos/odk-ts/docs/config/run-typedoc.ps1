$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path -Path $PSScriptRoot -ChildPath "..\\..")

Push-Location $repoRoot
try {
  npx typedoc --options "docs/config/typedoc.json"
} finally {
  Pop-Location
}
