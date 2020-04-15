/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const len = nums.length;
  if (len === 1) {
    return nums[0];
  }
  const majorMap = Object.create(null);
  let preMajorCount = 1;
  let preMajor = nums[0];
  majorMap[nums[0]] = 1;

  for (let i = 1; i < len; i++) {
    const val = nums[i];
    const count = majorMap[val];
    if (count !== undefined) {
      majorMap[val] = count + 1;
      if (preMajorCount === count) {
        preMajorCount++;
        preMajor = val;
      }
    } else {
      majorMap[val] = 1;
    }
  }

  return preMajor;
};
// @lc code=end
// Accepted
// 44/44 cases passed (64 ms)
// Your runtime beats 72.75 % of javascript submissions
// Your memory usage beats 92.86 % of javascript submissions (37 MB)
