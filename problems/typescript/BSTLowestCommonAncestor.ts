import { TreeNode } from "./InvertBinaryTree"
// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”
// Example 1:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.
// Example 2:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
// Output: 2
// Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
// Example 3:
// Input: root = [2,1], p = 2, q = 1
// Output: 2

// export class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

export function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null,
): TreeNode| null {
    if (!root || !q || !p) return null;
    // BST is defined as for any node every value in the left subtree is less than the current val, 
    // and every val is in the right subtree is greater than the val
    const small = Math.min(p.val, q.val);
    const large = Math.max(p.val, q.val);
    while (root != null){
        // if the root val is bigger than the biggest of p,q we know its to the left
        if (root.val > large){
            root = root.left;
        }
        // if the root val is smaller than the smalles of p,q we know its to the left
        else if (root.val < small){
            root = root.right;
        }
        else { //Now, small <= root.val <= large -> This root is the LCA between p and q
            return root;
        }
    }
    return null;
}



// class Solution {
//     public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
//         int small = Math.min(p.val, q.val);
//         int large = Math.max(p.val, q.val);
//         while (root != null) {
//             if (root.val > large) // p, q belong to the left subtree
//                 root = root.left;
//             else if (root.val < small) // p, q belong to the right subtree
//                 root = root.right;
//             else // Now, small <= root.val <= large -> This root is the LCA between p and q
//                 return root;
//         }
//         return null;
//     }
// }