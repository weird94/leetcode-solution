/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
  let temp = 0;
  for (let i = 0, len = nums.length; i < len; i++) {
    temp = temp ^ nums[i];
  }

  return temp;
}
// @lc code=end

//
