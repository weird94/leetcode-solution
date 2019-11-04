/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l1 = 0;
  let l2 = nums.length - 1;
  if (nums[l1] >= target) {
    return 0;
  }

  if (nums[l2] < target) {
    return nums.length;
  }

  while (l2 - l1 > 1) {
    const mid = ~~((l2 - l1) / 2) + l1;
    const midValue = nums[mid];
    if (midValue < target) {
      l1 = mid;
    } else {
      l2 = mid;
    }
  }

  return l2;
};
