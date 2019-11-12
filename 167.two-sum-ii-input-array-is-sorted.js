/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input array is sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  const map = {};

  for (let i = 0, len = numbers.length; i < len; i++) {
    const val = numbers[i];
    if (map[target - val] !== undefined) {
      return [map[target - val] + 1, i + 1];
    }
    map[val] = i;
  }
};
// @lc code=end
