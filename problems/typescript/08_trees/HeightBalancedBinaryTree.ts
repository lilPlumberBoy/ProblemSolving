// Given a binary tree, determine if it is hieght-balanced, a balanced tree is one which the depth of
// each subtree never differs for more than 1
// Input: root = [3,9,20,null,null,15,7]
// Output: true

import { TreeNode } from "./InvertBinaryTree";

export function isBalanced(root: TreeNode | null): boolean {
    const dfs = (root: TreeNode | null) => {
        if (!root) return 0;
        const rightHieght = dfs(root.right);
        const leftHeight = dfs(root.left);

        if (Math.abs(rightHieght - leftHeight) > 1){
            throw new Error("Unbalanced");
        }

        return 1 + Math.max(rightHieght, leftHeight);
    }

    try {
        dfs(root);
        return true;
    }
    catch (err) {
        return false;
    }
    
}
