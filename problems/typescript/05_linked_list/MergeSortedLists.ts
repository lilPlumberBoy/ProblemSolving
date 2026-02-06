// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.
// Definition for singly-linked list.
// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]


export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(list1: ListNode, list2: ListNode): ListNode {
  const dummyHead = new ListNode(0);
  let tail = dummyHead;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      tail.next = list1
      // Move pointers
      list1 = list1.next;
      tail = tail.next;
    } else {
      tail.next = list2;
      // Move pointers
      list2 = list2.next;
      tail = tail.next;
    }
  }
  // one list has been parsed through, add the remaining node to the final list
  if (list1 != null){
    tail.next = list1;
  }
  else{
    tail.next = list2;
  }

  return dummyHead.next;
}
