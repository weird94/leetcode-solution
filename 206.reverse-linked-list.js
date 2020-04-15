/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
var reverseList = function(head) {
  if (head == null || head.next == null) return head;
  var newHead = head;
  var headNext = head.next;
  head.next = null;
  while (headNext != null) {
    var next = headNext.next;
    headNext.next = newHead;
    newHead = headNext;
    headNext = next;
  }

  return newHead;
};
// @lc code=end

// 27/27 cases passed (56 ms)
// Your runtime beats 83.58 % of javascript submissions
// Your memory usage beats 52.17 % of javascript submissions (35.1 MB)