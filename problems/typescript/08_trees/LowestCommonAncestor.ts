// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between 
// two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a 
// node to be a descendant of itself).”
// Example 1:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3
// Explanation: The LCA of nodes 5 and 1 is 3.
// Example 2:
// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
// Output: 5
// Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.

import { TreeNode } from "./InvertBinaryTree";

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null{
    if (!root) return null;
    // since we know p and q are in the tree, if they start at the top, we know that is the LCA
    // otherwise during recursion this returns the acestor where either was found

    // in the recursion returning a root means "this subtree contains one of the target nodes"
    if (root === p || root === q) return root;
    
    const l = lowestCommonAncestor(root.left, p, q);
    const r = lowestCommonAncestor(root.right, p, q);

    if (l && r) {
        // this means that l and r contian p and q somewhere down the line
        return root;
    } else if (l){
        return l;
    } else if (r) {
        return r;
    }
    return null;
    
}
