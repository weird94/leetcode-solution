/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = Object.create(null);

  for (let i = 0, len = nums.length; i < len; i++) {
    const val = nums[i];
    if (map[target - val] !== undefined) {
      return [map[target - val], i];
    }
    map[val] = i;
  }
};
// @lc code=end

// 29/29 cases passed (52 ms)
// Your runtime beats 93.39 % of javascript submissions
// Your memory usage beats 89.67 % of javascript submissions (34.4 MB)
