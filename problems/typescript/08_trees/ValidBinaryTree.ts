import { TreeNode } from "./InvertBinaryTree";


// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys strictly less than the node's key.
// The right subtree of a node contains only nodes with keys strictly greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

// Input: root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.


function isValidBST(root: TreeNode|null): boolean {
    const isValid = (root: TreeNode | null, min = -Infinity, max = Infinity) => {
      if (!root) return true;
      console.log("root val, max, min", root.val, max, min);
      if (root.val <= min) {
        return false;
      }
      if (root.val >= max) {
        return false;
      }
      // moving left, we set the max allowed value to the current val
      // isValid(root?.left, min, root?.val);
      // moving right, we set the min allowed value to the current val
    //   isValid(root?.right, root?.val, max);
      return (isValid(root?.left, min, root?.val) && isValid(root?.right, root?.val, max));
    }
    if (!root) return true;
    return isValid(root);
}
// [5, 1, 4, null, null, 3, 6];
const example: Array<number | null> = [5, 1, 4, null, null, 3, 6];
const exampleRoot = new TreeNode(
  example[0]!,
  new TreeNode(example[1]!),
  new TreeNode(example[2]!, new TreeNode(example[5]!), new TreeNode(example[6]!))
);
console.log(isValidBST(exampleRoot));
