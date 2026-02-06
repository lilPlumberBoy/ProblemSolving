// A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a 
// dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.
// Implement the Trie class:
// Trie() Initializes the trie object.
// void insert(String word) Inserts the string word into the trie.
// boolean search(String word) Returns true if the string word is in the trie (i.e., was inserted before), and false otherwise.
// boolean startsWith(String prefix) Returns true if there is a previously inserted string word that has the prefix prefix, 
// and false otherwise.
 

// Example 1:

// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

// Explanation
// Trie trie = new Trie();
// trie.insert("apple");
// trie.search("apple");   // return True
// trie.search("app");     // return False
// trie.startsWith("app"); // return True
// trie.insert("app");
// trie.search("app");     // return True

class TrieNode {
    children: Map<string, TrieNode>;
    isEnd: boolean;

    constructor() {
        this.children = new Map<string, TrieNode>();
        this.isEnd = false;
    }
}

class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let currentNode = this.root;
        for (const char of word){
            // For each character check if it has a child node
            if (!currentNode.children.has(char)){
                // if this is the first time a char has been seen in this path through the tree, make a new node 
                currentNode.children.set(char, new TrieNode());
            }
            // otherwise move on to that node
            currentNode = currentNode.children.get(char)!;
        }
        // when we are on the node associated with the last char set the isEnd value
        currentNode.isEnd = true;
        
    }

    search(word: string): boolean {
        let currentNode = this.root;
        for (const char of word){
            if (currentNode.children.has(char)){
                currentNode = currentNode.children.get(char)!;
            }
            else {
                return false
            }
        }
        // If we have reached the last char, but not the end of a node the word is not found
        return currentNode.isEnd;
        
    }

    startsWith(prefix: string): boolean {
        let currentNode = this.root;
        for (const char of prefix) {
          if (currentNode.children.has(char)) {
            currentNode = currentNode.children.get(char)!;
          } else {
            return false;
          }
        }
        // if we get through all chars without failing to find a node the prefix exists
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */