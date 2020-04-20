/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start

const map = JSON.parse(
  '["Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]'
);

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  if (n < 27) return map[n];
  let title = "";

  while (true) {
    const high = ~~(n / 26);
    const low = n % 26;
    title = map[low] + title;

    if (high > 25) {
      if (low === 0) {
        n = high - 1;
      } else {
        n = high;
      }
    } else if (low === 0) {
      if (high === 1) {
        return title;
      } else {
        return map[high - 1] + title;
      }
    } else {
      return map[high] + title;
    }
  }
};
// @lc code=end

// 18/18 cases passed (44 ms)
// Your runtime beats 97.86 % of javascript submissions
// Your memory usage beats 50 % of javascript submissions (33.8 MB)
