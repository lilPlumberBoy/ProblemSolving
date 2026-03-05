// Given the roots of two binary trees root and subRoot, return true if there is a subtree of
// root with the same structure and node values of subRoot and false otherwise.
// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's
// descendants. The tree tree could also be considered as a subtree of itself.
// Example 1:
// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true
import { TreeNode } from "./InvertBinaryTree";

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) return true;
  if (!root && subRoot) return false;
  let queue: TreeNode[] = [root];
  while (queue.length) {
    let current = queue.shift();
    if (current.val === subRoot.val) {
      if (isEqual(current, subRoot)) {
        return true;
      }
    }
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return false;
}

function isEqual(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left && !right) return true;
  if ((!left && right) || (left && !right)) return false;
  if (left?.val !== right?.val) return false;
  return isEqual(left?.right, right.right) && isEqual(left?.left, right?.left);
}
