// Given the root of a binary tree, check whether it is a mirror of itself
// (i.e., symmetric around its center).
// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true
import { TreeNode } from "./InvertBinaryTree";

export function isSymmetric(root: TreeNode): boolean {
  if (!root) {
    return false;
  }
  if (!root.left && !root.right) {
    return true;
  }
  // We split the tree down the middle with from the head node to have two sides to compare
  // these are setup as queues of values to compare, we add them in the order they should be compared
  let leftNode = [root.left];
  let rightNode = [root.right];
  // We will use a bredth first search to compare level of the tree to each other to check for symetry
  while (leftNode.length || rightNode.length) {
    const left = leftNode.shift();
    const right = rightNode.shift();
    if (!left && !right) {
      continue;
    }
    // handle for nulls
    const leftVal = left ? left.val : null;
    const rightVal = right ? right.val : null;
    console.log(`comparing left , right: ${leftVal} , ${rightVal}`);

    if (leftVal !== rightVal) {
      return false;
    }
    // check for shape symetry otherwise future comparisons will be off
    // us XOR-style comparison( one exsits and other doesn't => false)
    if (!!left?.left !== !!right?.right) {
      return false;
    }
    if (!!left?.right !== !!right?.left) {
      return false;
    }

    // add future nodes to the queues in the order they should be compared
    if (left?.left) {
      leftNode.push(left.left);
    }
    if (right?.right) {
      rightNode.push(right.right);
    }
    if (left?.right) {
      leftNode.push(left.right);
    }
    if (right?.left) {
      rightNode.push(right.left);
    }
  }
  return true;
}
