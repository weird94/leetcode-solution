/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const end = prices.length - 1;
  let profit = 0;

  let last = prices[end];
  for (let i = end - 1; i > -1; i--) {
    const current = prices[i];
    if (current <= last) {
      profit += last - current;
    }

    last = current;
  }

  return profit;
};
// @lc code=end

// 201/201 cases passed (52 ms)
// Your runtime beats 94.49 % of javascript submissions
// Your memory usage beats 23.81 % of javascript submissions (35.7 MB)
