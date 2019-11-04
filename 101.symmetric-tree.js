/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true;

  const queue = [];
  queue.push(root.left, root.right);
  let start = 0;
  let sl = queue.length;

  while (true) {
    let allNULL = true;
    for (let i = 0, len = sl / 2; i < len; i++) {
      const a = queue[start + i];
      const b = queue[start + sl - i - 1];
      if (a === null && b === null) {
        // do nothing
      } else if ((a === null && b !== null) || (a !== null && b === null)) {
        return false;
      } else if (a.val !== b.val) {
        return false;
      } else {
        allNULL = false;
      }
    }

    if (allNULL) return true;

    for (let i = 0; i < sl; i++) {
      const toDelete = queue[start + i];
      if (toDelete) {
        queue.push(toDelete.left, toDelete.right);
      } else {
        queue.push(null, null);
      }
    }

    start += sl;
    sl = sl * 2;
  }
};
// @lc code=end

// 考察: 层次遍历
// 结论: 性能很差
