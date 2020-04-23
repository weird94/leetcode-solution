/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// 思路：二叉搜索树最大的特点就是中序遍历的时候是有序的

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
var isValidBST = function (root) {
  if (root === null) return true;
  const stack = [];
  let current = -Infinity;

  stack.push(root);
  while (stack.length > 0) {
    const node = stack[stack.length - 1];
    if (node.left != null) {
      stack.push(node.left);
    } else {
      // 推栈
      let node = stack.pop();

      while (node != null) {
        if (node.val > current) {
          current = node.val;
        } else {
          return false;
        }

        if (node.right != null) {
          stack.push(node.right);
          break;
        } else {
          node = stack.pop();
        }
      }
    }
  }

  return true;
};

// @lc code=end
// 75/75 cases passed (72 ms)
// Your runtime beats 88.4 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (37.1 MB)
