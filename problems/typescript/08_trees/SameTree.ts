// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true
// Input: ((p = [1, 2]), (q = [1, null, 2]));
// Output: false;
import { TreeNode } from "./InvertBinaryTree";

function isSameTree(p: TreeNode, q: TreeNode): boolean {
  let equal = true;
  const dfs = (root: TreeNode | null, root2: TreeNode | null) => {
    if (!root && !root2) return;
    if (!root || !root2) {
      equal = false;
      return;
    }
    if (root?.val != root2?.val) {
      equal = false;
      return;
    }
    if (root?.left) {
      if (!root2?.left) {
        equal = false;
        return;
      }
      dfs(root.left, root2.left);
    } else if (root2?.left) {
      equal = false;
      return;
    }
    if (root?.right) {
      if (!root2?.right) {
        equal = false;
        return;
      }
      dfs(root.right, root2.right);
    } else if (root2?.right) {
      equal = false;
      return;
    }
  };
  dfs(p,q);
  return equal;
}
