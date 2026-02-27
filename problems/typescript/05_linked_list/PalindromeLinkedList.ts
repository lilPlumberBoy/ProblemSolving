// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Lets try the dumb way, reverse the linked list then compare each var

import { ListNode } from "./AddTwoNums";

function reverseLinkedList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

export function isPalindrome(head: ListNode | null): boolean {
  // we want to reverse only the first half of the list
  // to do this we use a fase and a slow pointer
  // slow pointer moves to head.next,
  // fast pointer moves to head.next.next,
  // if length is odd slow lands on the middle of the linked list
  // if length is even slow lands on the first node of the 2nd hald
  if (!head) return false;
  if (!head.next) return true;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  let prev: ListNode | null = null;
  // if below fails we know we are halfway through the linked list
  while (fast?.next != null) {
    console.log(`Fast currently at val: ${fast?.val}`);
    // fast progresses down the list twice as "fast" * note we have to progress the fast pointer before
    // reversing the list, otherwise the fast pointer would advance down the reversed direction
    console.log(`fast.next: ${fast.next.val}`);
    console.log(`fast.next.next: ${fast?.next?.next?.val}`);
    fast = fast?.next?.next;
    console.log(`fast value changes to ${fast?.val}`);
    // reverse the list
    const next = slow!.next;
    slow!.next = prev;
    prev = slow;
    slow = next;
  }
  console.log(`Middle found at slow val: ${slow!.val}`);
  // We must progress onec down the right side of the list is it is odd length. We know it is an
  // odd length because the fast value is defined.
  if (fast !== null) {
    slow = slow?.next!;
  }
  // we have reached the middle, we need to itter down both halves and compare values
  console.log(`Itter through new diverged lists:`);
  while (slow && prev) {
    // slow has not been reversed yet as the while was closed before we could reverse, slow.next is in the original value
    const slowVal = slow!.val;
    console.log(`slowVal: ${slowVal}`);
    // prev starts our reversed list
    const prevVal = prev!.val;
    console.log(`prevVal: ${prevVal}`);
    if (slowVal != prevVal) {
      return false;
    }
    console.log(`preVal: ${prevVal}`);
    slow = slow!.next;
    prev = prev!.next;
  }
  return true;
}
