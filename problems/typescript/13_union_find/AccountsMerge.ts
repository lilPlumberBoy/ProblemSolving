// Given a list of accounts where each element accounts[i] is a list of strings, where the
// first element accounts[i][0] is a name, and the rest of the elements are emails representing emails of the account.
// Now, we would like to merge these accounts. Two accounts definitely belong to the same person
// if there is some common email to both accounts. Note that even if two accounts have the same name, they may belong to different people as people could have the same name. A person can have any number of accounts initially, but all of their accounts definitely have the same name.
// After merging the accounts, return the accounts in the following format: the first element of each
// account is the name, and the rest of the elements are emails in sorted order. The accounts themselves can be returned in any order.
// Example 1:
// Input: accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],
// ["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
// Output: [["John","john00@mail.com","john_newyork@mail.com","johnsmith@mail.com"],
// ["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
// Explanation:
// The first and second John's are the same person as they have the common email "johnsmith@mail.com".
// The third John and Mary are different people as none of their email addresses are used by other accounts.
// We could return these lists in any order, for example the answer [['Mary', 'mary@mail.com'],
// ['John', 'johnnybravo@mail.com'],
// ['John', 'john00@mail.com', 'john_newyork@mail.com', 'johnsmith@mail.com']] would still be accepted.

type NodeData = {
  parent: string;
  size: number;
};

class UnionFindMap {
  nodes: Map<string, NodeData> = new Map();

  // for a string, go up the tree and find the top parent
  find(i: string) {
    if (!this.nodes.get(i)) {
      this.nodes.set(i, { parent: i, size: 1 });
    }

    const node = this.nodes.get(i)!;

    if (node.parent !== i) {
      // recursivly go through linked parents until we find the head
      node.parent = this.find(node.parent);
    }

    return node.parent;
  }

  union(i: string, j: string) {
    const rootI = this.find(i);
    const rootJ = this.find(j);

    if (rootI !== rootJ) {
      let nodeI = this.nodes.get(rootI)!;
      let nodeJ = this.nodes.get(rootJ)!;
      // this is the "Union by size", the smaller length node gets attached below the larger one
      // this is why we keep track of size and it optimizes finds
      if (nodeI.size < nodeJ.size) {
        nodeI.parent = rootJ;
        nodeJ.size += nodeI.size;
        return nodeJ.size;
      } else {
        nodeJ.parent = rootI;
        nodeI.size += nodeJ.size;
        return nodeI.size;
      }
    }
  }
}

function accountsMerge(accounts: string[][]): string[][] {
  let emailByNode = new Map<string, string>();
  let unionFind = new UnionFindMap();

  for (let account of accounts) {
    let name = account[0];
    // we use the first email listed as the anchor, we will go through all emails later
    let parentKey = account[1];
    emailByNode.set(parentKey, name);
    unionFind.find(parentKey);

    for (let i = 2; i < account.length; i++) {
      let email = account[i];
      // for all emails in the list, set the parent key in the map
      emailByNode.set(email, name);
      // we do a union on each email and the first email in the list, linking it to the name when you .find
      unionFind.union(parentKey, email);
    }
  }

  let nodes = unionFind.nodes;
  let parentsWithNodes = new Map<string, string[]>();
  for (let [email, val] of nodes) {
    let parent = unionFind.find(email);
    if (!parentsWithNodes.has(parent)) {
      parentsWithNodes.set(parent, []);
    }
    parentsWithNodes.get(parent)?.push(email);
  }
  let result = [];
  for (let [, emails] of parentsWithNodes) {
    let newPerson = [];
    newPerson.push(emailByNode.get(emails[0]));

    emails.sort();
    for (let email of emails) {
      newPerson.push(email);
    }
    result.push(newPerson);
  }
  return result;
}
