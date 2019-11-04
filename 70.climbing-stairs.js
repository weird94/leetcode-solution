/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let l1 = 1;
  let l2 = 2;

  if (n === 1) return l1;
  if (n === 2) return l2;

  for (let i = 3; i < n; i++) {
    const l3 = l1 + l2;
    l1 = l2;
    l2 = l3;
  }

  return l1 + l2;
};
// @lc code=end

// 动态规划

// 分析
// 假设要走10步
// 最后一步只可能是两种情况 1 或者 2
// 最后一步是1的可能性走法 l9 + 1
// 最后一步是2的可能性走法 l8 + 2
// 所有 l10 = 19 + l8

// 优化
// 由于ln 只用到了 ln-1 和 ln-2
// 所以动态规划的结果没有必要都进行存储
// 只需要存储最后两个值即可
