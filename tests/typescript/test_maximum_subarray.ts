// Basic harness for MaximumSubarray (CommonJS-friendly)
const assert = require("node:assert").strict;
const path = require("node:path");

const rootDir = path.resolve(__dirname, "../..");
const modulePath = path.resolve(rootDir, "problems/typescript/01_arrays/MaximumSubarray.ts");
const loaded = require(modulePath);
const Solution = loaded.default ?? loaded.Solution ?? loaded;

const solver = new Solution();

assert.equal(solver.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
assert.equal(solver.maxSubArray([1]), 1);
assert.equal(solver.maxSubArray([5, 4, -1, 7, 8]), 23);

console.log("max subarray tests OK");
