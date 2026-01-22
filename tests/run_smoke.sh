#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)

"$ROOT_DIR/bin/run" "$ROOT_DIR/tests/fixtures/hello.py" | grep -q "hello-python"
"$ROOT_DIR/bin/run" "$ROOT_DIR/tests/fixtures/hello.ts" | grep -q "hello-ts"
grep -q "bin/run" "$ROOT_DIR/README.md"

echo "smoke OK"
