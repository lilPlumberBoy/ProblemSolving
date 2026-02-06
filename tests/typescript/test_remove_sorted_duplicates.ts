// Basic harness for RemoveSortedDuplicates (CommonJS-friendly)
const assert = require("node:assert").strict;
const path = require("node:path");

const rootDir = path.resolve(__dirname, "../..");
const modulePath = path.resolve(rootDir, "problems/typescript/01_arrays/RemoveSortedDuplicates.ts");
const loaded = require(modulePath);

function resolveRemoveDuplicates(mod) {
  if (typeof mod === "function") {
    return mod;
  }

  if (mod && typeof mod.removeDuplicates === "function") {
    return mod.removeDuplicates.bind(mod);
  }

  if (mod && typeof mod.default === "function") {
    if (mod.default.prototype && typeof mod.default.prototype.removeDuplicates === "function") {
      const solver = new mod.default();
      return solver.removeDuplicates.bind(solver);
    }
    return mod.default;
  }

  if (mod && mod.default && typeof mod.default.removeDuplicates === "function") {
    return mod.default.removeDuplicates.bind(mod.default);
  }

  if (mod && typeof mod.Solution === "function") {
    const solver = new mod.Solution();
    if (typeof solver.removeDuplicates === "function") {
      return solver.removeDuplicates.bind(solver);
    }
  }

  throw new Error(
    "Could not find removeDuplicates export. Export a function or a class with removeDuplicates()."
  );
}

const removeDuplicates = resolveRemoveDuplicates(loaded);

function assertResult(input, expected) {
  const nums = input.slice();
  const k = removeDuplicates(nums);
  assert.equal(k, expected.length);
  assert.deepEqual(nums.slice(0, k), expected);
}

assertResult([1, 1, 2], [1, 2]);
assertResult([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], [0, 1, 2, 3, 4]);
assertResult([1], [1]);
assertResult([1, 1, 1], [1]);

console.log("remove sorted duplicates tests OK");
