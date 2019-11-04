/*
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
function isBalanced(root) {
  if (root == null) return true;
  if (root.left === root.right) return true;

  function deep(node) {
    if (node === null) return 0;
    if (!node.left && !node.right) return 1;
    const leftDep = deep(node.left);
    const rightDep = deep(node.right);

    if (leftDep === -1 || rightDep === -1) {
      return -1;
    }

    const leftMax = leftDep > rightDep;
    if ((leftMax ? leftDep - rightDep : rightDep - leftDep) < 2) {
      return 1 + (leftMax ? leftDep : rightDep);
    } else {
      return -1;
    }
  }

  return deep(root) !== -1;
}
// @lc code=end

// 227/227 cases passed (52 ms)
// Your runtime beats 99.74 % of javascript submissions
// Your memory usage beats 64.29 % of javascript submissions (37.6 MB)

// 优化策略
// 1. 不要重复计算
// 2. 不要提前计算
// 3. 空间换时间
