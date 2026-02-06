// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached
// again by continuously following the next pointer. Internally, pos is used to denote the
// index of the node that tail's next pointer is connected to. Note that pos is not passed as
// a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

import { ListNode } from "./AddTwoNums";

// fails with a single object in linked list
function hasCycleWrong(node: ListNode): boolean {
  const seen = new Set<ListNode>();
  while (node != null) {
    if (seen.has(node)) {
      return true;
    }
    seen.add(node);
    if (node.next) {
      node = node.next;
    }
  }
  return false;
}

// o solve this efficiently, the Floyd’s Cycle Detection Algorithm
// (or two-pointer technique) is used.
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;
    if (slow == fast) {
      return true;
    }
  }
  return false;
}
