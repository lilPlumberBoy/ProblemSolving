// Given the root of a binary tree, return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level

// Input: root = [3, 9, 20, null, null, 15, 7];
// Output: [[3], [9, 20], [15, 7]];

// import { TreeNode } from "./InvertBinaryTree"

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// function levelOrder(root: TreeNode | null): number[][] {
//   if (!root) return [];
//   const output: number[][] = [];
//   const queue: TreeNode[] = [root];
//   const stack = [root];
//   while (stack.length) {
//     // get first item in array, which is the top-left most node
//     const node: TreeNode | null = stack.shift();
//     if (!node) {
//       continue;
//     }
//     let pushArray = [];
//     if (node.left !== null) {
//       stack.push(node.left);
//       pushArray.push(node.left.val);
//     }
//     if (node.right !== null) {
//       stack.push(node.right);
//       pushArray.push(node.right.val);
//     }
//     output.push(pushArray);
//   }
//   return output;
// }



function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const output: number[][] = [];
  const queue: TreeNode[] = [root];
  while (queue.length) {
    // queue size is the same as the level as each itter adds each child to the queue from lef to right
    const levelSize = queue.length;
    const level: number[] = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    output.push(level);
  }
  return output;
}

