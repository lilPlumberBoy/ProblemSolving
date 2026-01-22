import sys
import unittest
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parents[2]
sys.path.append(str(ROOT_DIR / "problems" / "python"))

from TwoSum import Solution


class TestTwoSum(unittest.TestCase):
    def assert_indices(self, nums, target, expected):
        result = Solution().twoSum(nums, target)
        self.assertIsNotNone(result)
        self.assertEqual(set(result), set(expected))

    def test_example_1(self):
        self.assert_indices([2, 7, 11, 15], 9, [0, 1])

    def test_example_2(self):
        self.assert_indices([3, 2, 4], 6, [1, 2])

    def test_example_3(self):
        self.assert_indices([3, 3], 6, [0, 1])


if __name__ == "__main__":
    unittest.main()
