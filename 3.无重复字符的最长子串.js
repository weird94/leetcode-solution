/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
  const charPosition = Object.create(null);
  let max = 0;
  let current = 0;
  let start = 0;

  for (let i = 0, len = str.length; i < len; i++) {
    const c = str[i];
    const pos = charPosition[c];

    if (pos !== undefined && pos >= start) {
      start = charPosition[c] + 1;
      charPosition[c] = i;
    } else {
      charPosition[c] = i;
    }

    current = i + 1 - start;

    max = Math.max(current, max);
  }

  return max;
};
// @lc code=end

// 987/987 cases passed (84 ms)
// Your runtime beats 97.16 % of javascript submissions
// Your memory usage beats 78.08 % of javascript submissions (37.6 MB)
