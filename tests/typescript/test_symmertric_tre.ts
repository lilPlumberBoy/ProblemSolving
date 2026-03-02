const assert = require("node:assert").strict;
const path = require("node:path");

const rootDir = path.resolve(__dirname, "../..");
const modulePath = path.resolve(
  rootDir,
  "problems/typescript/08_trees/SymmetricTree.ts",
);
const loaded = require(modulePath);

function resolveIsSymmetric(mod: any) {
  if (typeof mod === "function") return mod;
  if (mod && typeof mod.isSymmetric === "function")
    return mod.isSymmetric.bind(mod);
  if (mod && typeof mod.default === "function") return mod.default;
  if (mod && typeof mod.Solution === "function") {
    const solver = new mod.Solution();
    if (typeof solver.isSymmetric === "function")
      return solver.isSymmetric.bind(solver);
  }
  throw new Error("Could not find isSymmetric export.");
}

type Node = { val: number; left: Node | null; right: Node | null };

function buildTree(values: Array<number | null>): Node | null {
  if (!values.length || values[0] == null) return null;

  const nodes: Array<Node | null> = values.map((v) =>
    v == null ? null : { val: v, left: null, right: null },
  );

  let child = 1;
  for (let i = 0; i < nodes.length && child < nodes.length; i++) {
    const node = nodes[i];
    if (!node) continue;

    if (child < nodes.length) node.left = nodes[child++];
    if (child < nodes.length) node.right = nodes[child++];
  }

  return nodes[0];
}

const isSymmetric = resolveIsSymmetric(loaded);

const cases: Array<{ input: Array<number | null>; expected: boolean }> = [
  { input: [1, 2, 2, 3, 4, 4, 3], expected: true },
  { input: [1, 2, 2, null, 3, null, 3], expected: false },
];

for (const { input, expected } of cases) {
  const actual = isSymmetric(buildTree(input));
  assert.equal(
    actual,
    expected,
    `Expected ${JSON.stringify(input)} => ${expected}, got ${actual}`,
  );
}

console.log("symmetric tree tests OK");
