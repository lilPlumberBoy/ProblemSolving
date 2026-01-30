// Basic harness for AddTwoNums (CommonJS-friendly)
const assert = require("node:assert").strict;
const path = require("node:path");

const rootDir = path.resolve(__dirname, "../..");
const modulePath = path.resolve(rootDir, "problems/typescript/AddTwoNums.ts");
const loaded = require(modulePath);

function resolveAddTwoNumbers(mod) {
  if (typeof mod === "function") {
    return mod;
  }

  if (mod && typeof mod.addTwoNumbers === "function") {
    return mod.addTwoNumbers.bind(mod);
  }

  if (mod && typeof mod.default === "function") {
    if (mod.default.prototype && typeof mod.default.prototype.addTwoNumbers === "function") {
      const solver = new mod.default();
      return solver.addTwoNumbers.bind(solver);
    }
    return mod.default;
  }

  if (mod && mod.default && typeof mod.default.addTwoNumbers === "function") {
    return mod.default.addTwoNumbers.bind(mod.default);
  }

  if (mod && typeof mod.Solution === "function") {
    const solver = new mod.Solution();
    if (typeof solver.addTwoNumbers === "function") {
      return solver.addTwoNumbers.bind(solver);
    }
  }

  throw new Error(
    "Could not find addTwoNumbers export. Export a function or a class with addTwoNumbers()."
  );
}

const ListNodeCtor = loaded.ListNode;

const addTwoNumbers = resolveAddTwoNumbers(loaded);

function listFromArray(values) {
  let head = null;
  let tail = null;

  for (const value of values) {
    const node = new ListNodeCtor(value, null);

    if (!head) {
      head = node;
      tail = node;
      continue;
    }

    tail.next = node;
    tail = node;
  }

  return head;
}

function arrayFromList(head) {
  const out = [];
  let current = head;

  while (current) {
    out.push(current.val);
    current = current.next;
  }

  return out;
}

function assertSum(l1, l2, expected) {
  const result = addTwoNumbers(listFromArray(l1), listFromArray(l2));
  assert.deepEqual(arrayFromList(result), expected);
}

assertSum([2, 4, 3], [5, 6, 4], [7, 0, 8]);
assertSum([0], [0], [0]);
assertSum([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9], [8, 9, 9, 9, 0, 0, 0, 1]);

console.log("add two nums tests OK");
