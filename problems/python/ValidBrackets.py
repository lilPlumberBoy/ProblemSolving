# Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# An input string is valid if:

# Open brackets must be closed by the same type of brackets.
# Open brackets must be closed in the correct order.
# Every close bracket has a corresponding open bracket of the same type.

# Example 4:

# Input: s = "([])"

# Output: true

# Example 5:

# Input: s = "([)]"

# Output: false

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        hash = {')': '(', ']': '[', '}': '{'}
        for i in s:
            if i in hash:
                if stack and stack[-1] == hash[i]:
                    # .pop() returns last in array by default
                    stack.pop()
                else:
                    return False
            else:
                stack.append(i)
        return not stack
    
