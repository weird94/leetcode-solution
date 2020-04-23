/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  const dp = [];
  let left = 0;
  let right = 0;
  for (let i = 0; i < len; i++) {
    const temp = [];
    temp[i] = true;
    dp[i] = temp;
  }

  for (let i = 0; i < len; i++) {
    for (let j = i - 1; j > -1; j--) {
      if ((dp[j + 1][i - 1] || i - j === 1) && s[i] === s[j]) {
        dp[j][i] = true;
      }

      if (dp[j][i] && i - j > right - left) {
        right = i;
        left = j;
      }
    }
  }

  return s.substr(left, right - left + 1);
};
// @lc code=end
