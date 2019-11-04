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
function isSymmetric(root) {
  if (root === null) return true;
  return isSymmetric2(root.left, root.right);
}

function isSymmetric2(left, right) {
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;
  if (left.val !== right.val) return false;
  return isSymmetric2(left.left, right.right) && isSymmetric2(left.right, right.left);
}
// @lc code=end

// 195/195 cases passed (52 ms)
// Your runtime beats 96.52 % of javascript submissions
// Your memory usage beats 90 % of javascript submissions (35.6 MB)
