/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  if (root === null) return [];
  const stack = [];
  const res = [];

  stack.push(root);
  while (stack.length > 0) {
    const node = stack[stack.length - 1];
    if (node.left != null) {
      stack.push(node.left);
    } else {
      // 推栈
      let node = stack.pop();

      while (node != null) {
        res.push(node.val);
        if (node.right != null) {
          stack.push(node.right);
          break;
        } else {
          node = stack.pop();
        }
      }
    }
  }
  return res;
};
// @lc code=end
// 68/68 cases passed (64 ms)
// Your runtime beats 70.08 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (33.5 MB)
