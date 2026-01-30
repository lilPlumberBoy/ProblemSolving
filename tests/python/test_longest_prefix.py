import sys
import unittest
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parents[2]
sys.path.append(str(ROOT_DIR / "problems" / "python"))

from LongestPrefix import Solution


class TestLongestPrefix(unittest.TestCase):
    def test_example_1(self):
        self.assertEqual(
            Solution().longestCommonPrefix(["flower", "flow", "flight"]),
            "fl",
        )

    def test_example_2(self):
        self.assertEqual(
            Solution().longestCommonPrefix(["dog", "racecar", "car"]),
            "",
        )

    def test_single_word(self):
        self.assertEqual(Solution().longestCommonPrefix(["solo"]), "solo")

    def test_all_same(self):
        self.assertEqual(
            Solution().longestCommonPrefix(["test", "test", "test"]),
            "test",
        )


if __name__ == "__main__":
    unittest.main()
