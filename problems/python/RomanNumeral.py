class Solution:
    def romanToInt(self, s: str) -> int:
        guide = {}
        numMap = {}
        guide["I"] = 1
        guide["V"] = 5
        guide["X"] = 10
        guide["L"] = 50
        guide["C"] = 100
        guide["D"] = 500
        guide["M"] = 1000
        total = 0
        # when a smaller number appears before a larger number it represents subtraction
        # when a bigger number appears before a smaller number it represents addition
        for i in range(len(s)):
            if i < len(s) -1 and (guide[s[i]] < guide[s[i+1]]):
                total -= guide[s[i]]
            else: 
                total += guide[s[i]]
        return total