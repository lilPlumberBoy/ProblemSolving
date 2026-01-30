// Basic harness for BuySellStock (CommonJS-friendly)
const assert = require("node:assert").strict;
const path = require("node:path");

const rootDir = path.resolve(__dirname, "../..");
const modulePath = path.resolve(rootDir, "problems/typescript/BuySellStock.ts");
const loaded = require(modulePath);

function resolveMaxProfit(mod) {
  if (typeof mod === "function") {
    return mod;
  }

  if (mod && typeof mod.maxProfit === "function") {
    return mod.maxProfit.bind(mod);
  }

  if (mod && typeof mod.default === "function") {
    if (mod.default.prototype && typeof mod.default.prototype.maxProfit === "function") {
      const solver = new mod.default();
      return solver.maxProfit.bind(solver);
    }
    return mod.default;
  }

  if (mod && mod.default && typeof mod.default.maxProfit === "function") {
    return mod.default.maxProfit.bind(mod.default);
  }

  if (mod && typeof mod.Solution === "function") {
    const solver = new mod.Solution();
    if (typeof solver.maxProfit === "function") {
      return solver.maxProfit.bind(solver);
    }
  }

  throw new Error(
    "Could not find maxProfit export. Export a function or a class with maxProfit()."
  );
}

const maxProfit = resolveMaxProfit(loaded);

assert.equal(maxProfit([7, 1, 5, 3, 6, 4]), 5);
assert.equal(maxProfit([7, 6, 4, 3, 1]), 0);
assert.equal(maxProfit([1, 2, 3, 4, 5]), 4);
assert.equal(maxProfit([2, 4, 1]), 2);

console.log("buy sell stock tests OK");
