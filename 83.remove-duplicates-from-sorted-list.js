/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head;
  let current = head;
  while (current.next) {
    const next = current.next;
    if (current.val === next.val) {
      current.next = next.next;
    } else {
      current = next;
    }
  }

  return head;
};
// @lc code=end

// 165/165 cases passed (60 ms)
// Your runtime beats 93.19 % of javascript submissions
// Your memory usage beats 93.75 % of javascript submissions (35.5 MB)
