/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 == null) {
    return l2;
  }

  if (l2 == null) {
    return l1;
  }

  let maxList, minList;

  if (l1.val < l2.val) {
    maxList = l2;
    minList = l1;
  } else {
    maxList = l1;
    minList = l2;
  }

  const l0 = minList;

  while (minList.next !== null) {
    const l1Val = minList.next.val;
    const l2Val = maxList.val;
    if (l1Val > l2Val) {
      const temp = minList.next;
      minList.next = maxList;
      maxList = maxList.next;
      minList.next.next = temp;
      if (maxList === null) {
        break;
      }
    } else {
      minList = minList.next;
    }
  }

  if (maxList !== null) {
    const temp = minList.next;
    minList.next = maxList;

    if (temp !== null) {
      minList.next.next = temp;
    }
  }

  return l0;
};
