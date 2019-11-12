/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  if (head == null) return false;
  let head2 = head;

  while (head.next !== null) {
    head = head.next;
    if (head2 === null) {
      return false;
    }

    if (head2.next === null) {
      return false;
    }

    head2 = head2.next.next;

    if (head === head2) {
      return true;
    }
  }

  return false;
}
// @lc code=end

// 17/17 cases passed (52 ms)
// Your runtime beats 99.51 % of javascript submissions
// Your memory usage beats 75 % of javascript submissions (36.7 MB)

// 快慢指针判断指针是否存在环
