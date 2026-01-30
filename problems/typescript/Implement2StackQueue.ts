// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue
// should support all the functions of a normal queue (push, peek, pop, and empty).
// Implement the MyQueue class:
// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:
// You must use only standard operations of a stack, which means only push to top, peek/pop from top,
// size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using
// a list or deque (double-ended queue) as long as you use only a stack's standard operations.
// Example 1:
// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]
// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, queue is [2]
// myQueue.empty(); // return false

class MyQueue {
  private inputStack: number[];
  private outputStack: number[];

  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  // The goal of push is to "Pushes element x to the back of the queue"
  push(x: number): void {
    // Move elements from outputStack to inputStack
    while (this.outputStack.length > 0) {
      // - Each stack is LIFO by itself.
      // - But if you reverse a stack into another stack, the order flips.
      // - Two stacks = two reversals, which gives you FIFO overall.
      this.inputStack.push(this.outputStack.pop()!);
    }
    // Push the new element onto inputStack
    this.inputStack.push(x);
    // Move elements from inputStack to outputStack
    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop()!);
    }
  }

  pop(): number {
    // since we re-ordered the output stack in push the output stack now has the first elemnent on top
    return this.outputStack.pop()!;
  }

  // int peek() Returns the element at the front of the queue.
  peek(): number {
    return this.outputStack[this.outputStack.length - 1];
  }
  // boolean empty() Returns true if the queue is empty, false otherwise.
  empty(): boolean {
    return (this.outputStack.length === 0);
  }
}

class MyQueue2 {
  private inputStack: number[];
  private outputStack: number[];

  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  push(x: number): void {
    // Move elements from outputStack to inputStack
    while (this.outputStack.length > 0) {
      this.inputStack.push(this.outputStack.pop()!);
    }

    // Push the new element onto inputStack
    this.inputStack.push(x);

    // Move elements from inputStack to outputStack
    while (this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop()!);
    }
  }

  pop(): number {
    return this.outputStack.pop()!;
  }

  peek(): number {
    return this.outputStack[this.outputStack.length - 1];
  }

  empty(): boolean {
    return this.outputStack.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
