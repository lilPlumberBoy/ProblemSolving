class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False

        reversed_num = 0
        temp = x

        while temp != 0:
            # take the first digit of the num
            digit = temp % 10
            # multiply reversed num by 10 to make room for new digit
            reversed_num = reversed_num * 10 + digit
            #  remove the processed digit from temp with integer division
            temp //= 10

        return reversed_num == x


if __name__ == "__main__":
    import sys

    value = int(sys.argv[1]) if len(sys.argv) > 1 else 121
    print(Solution().isPalindrome(value))
