/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  const len = prices.length;
  if (len < 2) return 0;
  let profit = 0;
  let min = prices[0];

  for (let i = 1; i < len; i++) {
    const val = prices[i];
    const newProfit = val - min;
    if (newProfit > profit) {
      profit = newProfit;
    }

    if (val < min) {
      min = val;
    }
  }

  return profit;
}
// @lc code=end

// 200/200 cases passed (56 ms)
// Your runtime beats 85.94 % of javascript submissions
// Your memory usage beats 22.22 % of javascript submissions (35.7 MB)
