import { ListNode } from "../../problems/typescript/05_linked_list/AddTwoNums";
import { isPalindrome } from "../../problems/typescript/05_linked_list/PalindromeLinkedList";
import assert from "node:assert/strict";

function listFromArray(values: number[]): ListNode | null {
  if (values.length === 0) return null;
  const head = new ListNode(values[0]);
  let curr = head;

  for (let i = 1; i < values.length; i++) {
    curr.next = new ListNode(values[i]);
    curr = curr.next;
  }

  return head;
}

const cases: Array<{ input: number[]; expected: boolean }> = [
  // { input: [1], expected: true },
  // { input: [1, 2], expected: false },
  // { input: [1, 2, 2, 1], expected: true },
  // { input: [1, 2, 3, 2, 1], expected: true },
  // { input: [1, 2, 3, 4, 1], expected: false },
  { input: [0, 0], expected: true },
  { input: [1, 0, 0], expected: false },
];

for (const { input, expected } of cases) {
  const head = listFromArray(input);
  const actual = isPalindrome(head);
  assert.equal(
    actual,
    expected,
    `Expected ${JSON.stringify(input)} => ${expected}, got ${actual}`,
  );
}

console.log("palindrome linked list tests OK");
