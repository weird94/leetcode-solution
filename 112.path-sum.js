/*
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */
function hasPathSum(root, sum) {
  if (root === null) return false;
  if (root.left === null && root.right === null) {
    if (root.val === sum) {
      return true;
    } else {
      return false;
    }
  }

  const aim = sum - root.val;

  if (root.left !== null) {
    if (hasPathSum(root.left, aim)) {
      return true;
    }
  }

  if (root.right !== null) {
    if (hasPathSum(root.right, aim)) {
      return true;
    }
  }

  return false;
}
// @lc code=end

// 114/114 cases passed (56 ms)
// Your runtime beats 96.05 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (37.1 MB)
