/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var map = Object.create(null);
  for (var i = 0, len = nums.length; i < len; i++) {
    var vi = nums[i];
    if (map[vi] !== undefined) {
      return true;
    } else {
      map[vi] = true;
    }
  }

  return false;
};
// @lc code=end
