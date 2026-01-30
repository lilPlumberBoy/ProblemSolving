import sys
import unittest
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parents[2]
sys.path.append(str(ROOT_DIR / "problems" / "python"))

from AddTwoNums import ListNode, Solution


def list_from_array(values):
    head = None
    tail = None
    for value in values:
        node = ListNode(value)
        if head is None:
            head = node
            tail = node
            continue
        tail.next = node
        tail = node
    return head


def array_from_list(head):
    out = []
    current = head
    while current is not None:
        out.append(current.val)
        current = current.next
    return out


class TestAddTwoNums(unittest.TestCase):
    def assert_sum(self, l1, l2, expected):
        result = Solution().addTwoNumbers(list_from_array(l1), list_from_array(l2))
        self.assertEqual(array_from_list(result), expected)

    def test_example_1(self):
        self.assert_sum([2, 4, 3], [5, 6, 4], [7, 0, 8])

    def test_example_2(self):
        self.assert_sum([0], [0], [0])

    def test_example_3(self):
        self.assert_sum([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9], [8, 9, 9, 9, 0, 0, 0, 1])


if __name__ == "__main__":
    unittest.main()
