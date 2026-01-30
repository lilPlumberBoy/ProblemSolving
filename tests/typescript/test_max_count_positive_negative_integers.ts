// Basic harness for MaxCountPositiveNegativeIntegers (CommonJS-friendly)
const assert = require("node:assert").strict;
const path = require("node:path");

const rootDir = path.resolve(__dirname, "../..");
const modulePath = path.resolve(rootDir, "problems/typescript/MaxCountPosititveNegativeIntegers.ts");
const loaded = require(modulePath);

function resolveMaximumCount(mod) {
  if (typeof mod === "function") {
    return mod;
  }

  if (mod && typeof mod.maximumCount === "function") {
    return mod.maximumCount.bind(mod);
  }

  if (mod && typeof mod.default === "function") {
    if (mod.default.prototype && typeof mod.default.prototype.maximumCount === "function") {
      const solver = new mod.default();
      return solver.maximumCount.bind(solver);
    }
    return mod.default;
  }

  if (mod && mod.default && typeof mod.default.maximumCount === "function") {
    return mod.default.maximumCount.bind(mod.default);
  }

  if (mod && typeof mod.Solution === "function") {
    const solver = new mod.Solution();
    if (typeof solver.maximumCount === "function") {
      return solver.maximumCount.bind(solver);
    }
  }

  throw new Error(
    "Could not find maximumCount export. Export a function or a class with maximumCount()."
  );
}

const maximumCount = resolveMaximumCount(loaded);

assert.equal(maximumCount([-2, -1, -1, 1, 2, 3]), 3);
assert.equal(maximumCount([-3, -2, -1, 0, 0, 1, 2]), 3);
assert.equal(maximumCount([5, 20, 66, 1314]), 4);
assert.equal(maximumCount([-5, -4, -3]), 3);
assert.equal(maximumCount([0, 0, 0]), 0);

console.log("max count positive/negative tests OK");
