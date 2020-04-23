/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  const tempArr = [];
  tempArr.push(root);
  let len = 1;
  let current = 0;
  const result = [];

  while (tempArr.length > 0) {
    if (current === 0) {
      result.push([]);
    }

    const node = tempArr.shift();
    result[result.length - 1].push(node.val);

    node.left && tempArr.push(node.left);
    node.right && tempArr.push(node.right);

    current++;
    if (current === len) {
      current = 0;
      len = tempArr.length;
    }
  }

  return result;
};

// 34/34 cases passed (64 ms)
// Your runtime beats 85.15 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (34.7 MB)
// @lc code=end

// var root = {
//   val: 3,
//   left: {
//     val: 9,
//   },
//   right: {
//     val: 20,
//     left: {
//       val: 15,
//     },
//     right: {
//       val: 7,
//     },
//   },
// };

// console.log(levelOrder(root));
