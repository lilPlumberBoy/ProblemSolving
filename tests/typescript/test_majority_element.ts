// Basic harness for MajorityElement (CommonJS-friendly)
const assert = require("node:assert").strict;
const path = require("node:path");

const rootDir = path.resolve(__dirname, "../..");
const modulePath = path.resolve(rootDir, "problems/typescript/01_arrays/MajorityElement.ts");
const loaded = require(modulePath);

function resolveMajorityElement(mod) {
  if (typeof mod === "function") {
    return mod;
  }

  if (mod && typeof mod.majorityElement === "function") {
    return mod.majorityElement.bind(mod);
  }

  if (mod && typeof mod.default === "function") {
    if (mod.default.prototype && typeof mod.default.prototype.majorityElement === "function") {
      const solver = new mod.default();
      return solver.majorityElement.bind(solver);
    }
    return mod.default;
  }

  if (mod && mod.default && typeof mod.default.majorityElement === "function") {
    return mod.default.majorityElement.bind(mod.default);
  }

  if (mod && typeof mod.Solution === "function") {
    const solver = new mod.Solution();
    if (typeof solver.majorityElement === "function") {
      return solver.majorityElement.bind(solver);
    }
  }

  throw new Error(
    "Could not find majorityElement export. Export a function or a class with majorityElement()."
  );
}

const majorityElement = resolveMajorityElement(loaded);

assert.equal(majorityElement([3, 2, 3]), 3);
assert.equal(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
assert.equal(majorityElement([8, 8, 7, 7, 7]), 7);
assert.equal(majorityElement([10]), 10);

console.log("majority element tests OK");
