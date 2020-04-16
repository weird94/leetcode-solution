/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let current = nums[0];

  for (let i = 1, len = nums.length; i < len; i++) {
    const v = nums[i];
    if (current < 0) {
      current = v;
    } else {
      current += v;
    }

    max = Math.max(max, current);
  }

  return max;
};
