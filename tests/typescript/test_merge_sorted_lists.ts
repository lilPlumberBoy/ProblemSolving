// Basic harness for MergeSortedLists (CommonJS-friendly)
const assert = require("node:assert").strict;
const path = require("node:path");

const rootDir = path.resolve(__dirname, "../..");
const modulePath = path.resolve(rootDir, "problems/typescript/MergeSortedLists.ts");
const loaded = require(modulePath);

const ListNode = loaded.ListNode;

function resolveMergeTwoLists(mod) {
  if (typeof mod === "function") {
    return mod;
  }

  if (mod && typeof mod.mergeTwoLists === "function") {
    return mod.mergeTwoLists.bind(mod);
  }

  if (mod && typeof mod.default === "function") {
    if (mod.default.prototype && typeof mod.default.prototype.mergeTwoLists === "function") {
      const solver = new mod.default();
      return solver.mergeTwoLists.bind(solver);
    }
    return mod.default;
  }

  if (mod && mod.default && typeof mod.default.mergeTwoLists === "function") {
    return mod.default.mergeTwoLists.bind(mod.default);
  }

  if (mod && typeof mod.Solution === "function") {
    const solver = new mod.Solution();
    if (typeof solver.mergeTwoLists === "function") {
      return solver.mergeTwoLists.bind(solver);
    }
  }

  throw new Error(
    "Could not find mergeTwoLists export. Export a function or a class with mergeTwoLists()."
  );
}

const mergeTwoLists = resolveMergeTwoLists(loaded);

function listFromArray(values) {
  let head = null;
  let tail = null;

  for (const value of values) {
    const node = new ListNode(value, null);

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

function assertMerged(l1, l2, expected) {
  const result = mergeTwoLists(listFromArray(l1), listFromArray(l2));
  assert.deepEqual(arrayFromList(result), expected);
}

assertMerged([1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]);
assertMerged([], [], []);
assertMerged([], [0], [0]);

console.log("merge sorted lists tests OK");
