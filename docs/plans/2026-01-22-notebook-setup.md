# LeetCode Notebook Setup Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a lightweight multi-language notebook structure (Python + TypeScript) with a `bin/run` script for one-off execution.

**Architecture:** Keep solutions under `problems/<language>/`, reusable starters in `templates/`, and a single `bin/run` entrypoint that dispatches by file extension. Minimal Node tooling via `tsx` for TypeScript execution.

**Tech Stack:** Bash, Python 3, Node.js + `tsx`.

### Task 1: Add baseline repo structure + smoke test fixtures

**Files:**
- Create: `problems/python/.keep`
- Create: `problems/typescript/.keep`
- Create: `templates/python/solution.py`
- Create: `templates/typescript/solution.ts`
- Create: `notes/.keep`
- Create: `tests/fixtures/hello.py`
- Create: `tests/fixtures/hello.ts`

**Step 1: Write the failing test**

Create `tests/run_smoke.sh`:

```bash
#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)

"$ROOT_DIR/bin/run" "$ROOT_DIR/tests/fixtures/hello.py" | grep -q "hello-python"
"$ROOT_DIR/bin/run" "$ROOT_DIR/tests/fixtures/hello.ts" | grep -q "hello-ts"

echo "smoke OK"
```

**Step 2: Run test to verify it fails**

Run: `bash tests/run_smoke.sh`
Expected: FAIL because `bin/run` does not exist.

**Step 3: Write minimal fixtures and templates**

```python
# templates/python/solution.py
from typing import List

def solve(nums: List[int]) -> int:
    return 0

if __name__ == "__main__":
    print(solve([]))
```

```ts
// templates/typescript/solution.ts
export function solve(nums: number[]): number {
  return 0;
}

if (require.main === module) {
  console.log(solve([]));
}
```

```python
# tests/fixtures/hello.py
print("hello-python")
```

```ts
// tests/fixtures/hello.ts
console.log("hello-ts");
```

Also add `.keep` files to empty directories.

**Step 4: Run test to verify it still fails**

Run: `bash tests/run_smoke.sh`
Expected: FAIL because `bin/run` still does not exist.

**Step 5: Commit**

```bash
git add problems templates notes tests

git commit -m "chore: add initial notebook structure and fixtures"
```

### Task 2: Implement `bin/run` dispatcher

**Files:**
- Create: `bin/run`

**Step 1: Write the failing test**

The existing `tests/run_smoke.sh` is already failing due to missing `bin/run`.

**Step 2: Run test to verify it fails**

Run: `bash tests/run_smoke.sh`
Expected: FAIL because `bin/run` missing.

**Step 3: Write minimal implementation**

```bash
#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 1 ]]; then
  echo "usage: run <file> [args...]" >&2
  exit 2
fi

FILE=$1
shift

if [[ ! -f "$FILE" ]]; then
  echo "file not found: $FILE" >&2
  exit 2
fi

EXT=${FILE##*.}

case "$EXT" in
  py)
    python3 "$FILE" "$@"
    ;;
  ts)
    npx tsx "$FILE" "$@"
    ;;
  *)
    echo "unsupported extension: .$EXT" >&2
    exit 2
    ;;
 esac
```

Make executable: `chmod +x bin/run`

**Step 4: Run test to verify it passes**

Run: `bash tests/run_smoke.sh`
Expected: PASS with output containing `smoke OK`.

**Step 5: Commit**

```bash
git add bin/run

git commit -m "feat: add bin/run dispatcher for python and typescript"
```

### Task 3: Add tooling docs and Node config

**Files:**
- Create: `package.json`
- Create: `.gitignore`
- Create: `.editorconfig`
- Create: `README.md`

**Step 1: Write the failing test**

Add a quick doc check in `tests/run_smoke.sh`:

```bash
grep -q "bin/run" "$ROOT_DIR/README.md"
```

**Step 2: Run test to verify it fails**

Run: `bash tests/run_smoke.sh`
Expected: FAIL because README does not exist.

**Step 3: Write minimal implementation**

`package.json`:

```json
{
  "name": "problem-solving-notebook",
  "private": true,
  "devDependencies": {
    "tsx": "^4.7.0"
  }
}
```

`.gitignore`:

```
node_modules/
.DS_Store
```

`.editorconfig`:

```
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2

[*.py]
indent_size = 4
```

`README.md` (minimal):

```markdown
# Problem Solving Notebook

## Run a file

```bash
bin/run problems/python/0001_two_sum.py
bin/run problems/typescript/0001_two_sum.ts
```

## Setup

```bash
npm install
```
```

**Step 4: Run test to verify it passes**

Run: `bash tests/run_smoke.sh`
Expected: PASS with `smoke OK`.

**Step 5: Commit**

```bash
git add package.json .gitignore .editorconfig README.md tests/run_smoke.sh

git commit -m "docs: add notebook usage and tooling config"
```

---

## Notes
- `tsx` is used for TypeScript one-off runs via `npx tsx file.ts`.
- If `npm install` has not been run, `npx` will prompt to install `tsx`.
