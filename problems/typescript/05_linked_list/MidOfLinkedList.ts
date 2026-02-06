// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

 

// Example 1:


// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Initialize two pointers, normalSpeedNode and doubleSpeedNode, both starting at the head.
// Traverse the list in a loop: move the slow pointer one step forward and the fast pointer two steps forward.
// Continue this process until the fast pointer reaches the end (is null or its next node is null).
// Return the slow pointer, which is now positioned at the middle node.

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from "./AddTwoNums";

function middleNode(head: ListNode | null): ListNode | null{
    if (head == null) return null;
    let normalSpeedNode: ListNode = head;
    let doubleSpeedNode: ListNode = head;
    while (doubleSpeedNode?.next != null) {
        normalSpeedNode = normalSpeedNode.next;
        doubleSpeedNode = doubleSpeedNode?.next?.next;
    }
    return normalSpeedNode;
}