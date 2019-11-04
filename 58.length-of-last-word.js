/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  let last = s.length - 1;

  // find the last unempty place
  for (let i = last; i >= 0; i--) {
    const c = s[i];
    if (c !== ' ') {
      last = i;
      break;
    }
  }

  // count the length
  for (let i = last; i >= 0; i--) {
    const c = s[i];
    if (c === ' ') {
      return last - i;
    }
  }

  // the whole unempty world was the last word
  return last + 1;
};
// @lc code=end
