// Given the root of a binary tree, return the length of the diameter of the tree.
// The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// The length of a path between two nodes is represented by the number of edges between them.

// Input: root = [1,2,3,4,5]
// Output: 3
// Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
import { TreeNode } from "./InvertBinaryTree";

function diameterOfBinaryTree(root: TreeNode | null): number {
  let maxDiameter = 0;
  const dfs = (root: TreeNode | null) => {
    if (!root) return 0;
    const right = dfs(root.right);
    const rightHeight = right ? right : 0;
    const left = dfs(root.left);
    const leftHeight = left ? left : 0;

    const height = 1 + Math.max(rightHeight, leftHeight);
    maxDiameter = Math.max(maxDiameter, rightHeight+leftHeight)
    return height;
  };
  dfs(root);
  return maxDiameter;
}

// root = [1, 2, 3, 4, 5];
// Output:
/*
1. dfs(4)
  - left/right are null -> 0
  - candidate diameter at 4: 0 + 0 = 0
  - maxDiameter = 0
  - returns height 1

  2. dfs(5)

  - same as 4
  - maxDiameter = 0
  - returns 1

  3. dfs(2)

  - leftHeight 1 (from 4)
  - rightHeight 1 (from 5)
  - candidate diameter at 2: 1 + 1 = 2
  - maxDiameter = 2
  - returns height 1 + max(1,1) = 2

  4. dfs(3)

  - leaf -> returns 1
  - maxDiameter stays 2

  5. dfs(1)

  - leftHeight 2 (from 2)
  - rightHeight 1 (from 3)
  - candidate diameter at 1: 2 + 1 = 3
  - maxDiameter = 3
*/
