// Given the root of a binary tree, invert the tree, and return its root.
// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]
// Definition for a binary tree node.
export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// function invertTree(root: TreeNode| null): TreeNode| null {
//   if (!root) return null;

//   // Recursive (DFS) Depth First Search
//   // DFS  starts from the source and explores each path completely before backtracking to the source before exploring other paths
//   // In a binary tree this would go down all lefts, then rights, then next node
//   // (BFS) Breadth-First-Search, starting at the root node and exploring all neighboring nodes before moving down the graph.
//   // In a binary tree this would search each level before going down a level
//   let level = 0;
//   //0
// //   0;
// //   //1
// //   (1, 2);
// //   //2
// //   (3, 4);
// //   (5, 6);
//     let go = (node: TreeNode){

//     }

//   return root;
// }

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  let go = (node: TreeNode) => {
    if (node.left) {
      go(node.left);
    }
    if (node.right) {
      go(node.right);
    }
    // swap children of the recursed node
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  };

  go(root);

  return root;
}

function invertTreeItterDFS(root: TreeNode | null): TreeNode | null {
    if (root == null || (!root.left && !root.right)){
        return root;
    }

    const stack = [root];
    while (stack.length){
        const node = stack.pop();
        if (!node){
            continue;
        }
        [node.left, node.right] = [node.right, node.left]
        if (node.left){
            stack.push(node.left);
        }
        if (node.right) {
          stack.push(node.right);
        }
    }
    return root;
}








// // iterative DFS
// function invertTreeItterDFS(root: null | TreeNode): null | TreeNode {
//   if (!root || (!root.left && !root.right)) {
//     return root;
//   }

//   const stack = [root];

//   while (stack.length) {
//     const node = stack.pop();

//     if (!node) {
//       continue;
//     }

//     [node.left, node.right] = [node.right, node.left];

//     if (node.left) {
//       stack.push(node.left);
//     }

//     //
//     if (node.right) {
//       stack.push(node.right);
//     }
//   }

//   return root;
// }

// iterative BFS
function invertTreeItterBFS(root: null | TreeNode): null | TreeNode {
  if (!root || (!root.left && !root.right)) {
    return root;
  }

  const stack = [root];

  while (stack.length) {
    const node = stack.shift();

    if (!node) {
      continue;
    }

    [node.left, node.right] = [node.right, node.left];

    if (node.left) {
      stack.push(node.left);
    }

    if (node.right) {
      stack.push(node.right);
    }
  }

  return root;
}
