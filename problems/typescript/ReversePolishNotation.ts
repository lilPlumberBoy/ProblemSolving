// You are given an array of strings tokens that represents an arithmetic expression in
// a Reverse Polish Notation.
// Evaluate the expression. Return an integer that represents the value of the expression.
// Note that:
// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.
// Example 1:
// Input: tokens = ["2","1","+","3","*"]
// Output: 9
// Explanation: ((2 + 1) * 3) = 9
// Example 2:
// Input: tokens = ["4","13","5","/","+"]
// Output: 6
// Explanation: (4 + (13 / 5)) = 6
// Example 3:
// Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// Output: 22
// Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
// = ((10 * (6 / (12 * -11))) + 17) + 5
// = ((10 * (6 / -132)) + 17) + 5
// = ((10 * 0) + 17) + 5
// = (0 + 17) + 5
// = 17 + 5
// = 22

// if (int)
//     add to stack
// if (operator)
//     process 2 most bottom ints in the stack
//         result should be pushed to the bottom of the stack

["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  // const operators: string[] = ["+", "-", "/", "*"];
  const operators = new Set<string>();
  operators.add("+");
  operators.add("-");
  operators.add("/");
  operators.add("*");
  for (let i = 0; i < tokens.length; i++) {
    // if operator then perform action
    if (operators.has(tokens[i])) {
      console.log("operator found");
      const op = tokens[i];
      // the + does the conversion from string to int
      const ndInt = stack.pop();
      // the leading int comes first in the stack so must be popped 2nd
      const firstInt = stack.pop();
      console.log("doing calc: ", firstInt, op, ndInt);
      let result = 0;
      if (op == "+") {
        result = firstInt + ndInt;
      }
      if (op == "-") {
        result = firstInt- ndInt;
      }
      if (op == "*") {
        result = firstInt * ndInt;
      }
      if (op == "/") {
        // This satifies the ask to truncate towards 0, it drops the fractional portion
        result = Math.trunc(firstInt / ndInt);
      }
      console.log("result: ", result);
      stack.push(result);
    } else {
      console.log("adding int to stack ", +tokens[i]);
      // otherwise an int
      stack.push(+tokens[i]);
    }
  }
  // The last calculation will be the only item in the stack
  return stack[0];
}

console.log(
  evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]),
);
Explanation: 10 * (6 / ((9 + 3) * -11)) + 17 + 5;
