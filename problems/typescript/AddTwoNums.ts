//  * Definition for singly-linked list.
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  let carry = 0;
  // This acts as an achor to the beginning of the liked list, the first element will be empty
  const dummyHead = new ListNode(0);
  // We will edit tail within the loop and move this pointer forward, tail references the same listnode object
  let tail = dummyHead;
  while (l1 != null || l2 != null || carry != 0) {
    const digit1 = l1 != null ? l1.val : 0;
    const digit2 = l2 != null ? l2.val : 0;
    const total = digit1 + digit2 + carry;

    tail.next = new ListNode(total % 10); // attach new digit
    tail = tail.next; // advance the tail pointer

    // round down
    carry = Math.floor(total / 10);
    // Move other lists pointers
    l1 = l1 != null ? l1.next : null;
    l2 = l2 != null ? l2.next : null;
  }

  return dummyHead.next;
}
