import sys
import unittest
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parents[2]
sys.path.append(str(ROOT_DIR / "problems" / "python"))

from ValidBrackets import Solution


class TestValidBrackets(unittest.TestCase):
    def test_example_true(self):
        self.assertTrue(Solution().isValid("([])"))

    def test_example_false(self):
        self.assertFalse(Solution().isValid("([)]"))

    def test_empty(self):
        self.assertTrue(Solution().isValid(""))

    def test_simple_pairs(self):
        self.assertTrue(Solution().isValid("()"))
        self.assertTrue(Solution().isValid("{}"))
        self.assertTrue(Solution().isValid("[]"))

    def test_unbalanced(self):
        self.assertFalse(Solution().isValid("("))
        self.assertFalse(Solution().isValid(")"))
        self.assertFalse(Solution().isValid("(()"))

    def test_wrong_order(self):
        self.assertFalse(Solution().isValid("(]"))
        self.assertFalse(Solution().isValid("{[}]"))


if __name__ == "__main__":
    unittest.main()
