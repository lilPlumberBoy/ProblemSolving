import sys
import unittest
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parents[2]
sys.path.append(str(ROOT_DIR / "problems" / "python"))

from MajorityElement import Solution


class TestMajorityElement(unittest.TestCase):
    def test_example_1(self):
        self.assertEqual(Solution().majorityElement([3, 2, 3]), 3)

    def test_example_2(self):
        self.assertEqual(Solution().majorityElement([2, 2, 1, 1, 1, 2, 2]), 2)

    def test_single_element(self):
        self.assertEqual(Solution().majorityElement([10]), 10)


if __name__ == "__main__":
    unittest.main()
