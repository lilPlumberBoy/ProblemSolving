// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// * class TreeNode {
//  *     val: number
//  *     left: TreeNode | null
//  *     right: TreeNode | null
//  *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.left = (left===undefined ? null : left)
//  *         this.right = (right===undefined ? null : right)
//  *     }
//  * }
//  */
import { TreeNode } from "./InvertBinaryTree";

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    // adds 1 each recursion, when end is reached return 0 and end recursion
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};