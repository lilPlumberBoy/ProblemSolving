// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

class MinStack {
  private stack: number[];
  private min: number[];
  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(val: number): void {
    this.stack.push(val);
    // to be able to pop from the stack we need to store the min at every stack depth, so we stor min in an array
    // in line with stack
    const currentMin =
      this.min.length === 0 ? val : this.min[this.min.length - 1];
    if (val < currentMin) {
      this.min.push(val);
    } else {
      this.min.push(currentMin);
    }
  }

  pop(): void {
    if (this.stack.length > 0) {
      this.stack.pop();
      this.min.pop();
    }
  }

  // stacks are LIFO so the first out would be the latest element pushed
  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.min[this.min.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
