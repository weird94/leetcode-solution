/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNode(headA, headB) {
  const map = new Map();

  while (headA) {
    map.set(headA, true);
    headA = headA.next;
  }

  while (headB) {
    if (map.get(headB)) return headB;
    headB = headB.next;
  }

  return null;
}
// @lc code=end

// 45/45 cases passed (68 ms)
// Your runtime beats 99.88 % of javascript submissions
// Your memory usage beats 72.73 % of javascript submissions (42.9 MB)
