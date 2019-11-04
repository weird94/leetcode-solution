/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
  let len = nums.length;
  let lastMatch = -1;
  let NaNCount = 0;
  for (let nextIndex = 0; nextIndex < len; nextIndex++) {
    const current = nums[nextIndex];
    if (current === val) {
      NaNCount++;
      if (lastMatch === -1) {
        lastMatch = nextIndex;
      }
    } else {
      if (lastMatch !== -1) {
        nums[lastMatch] = current;
        if (lastMatch === nextIndex - 1) {
          // 交换
          lastMatch = nextIndex;
        } else {
          // 消费
          lastMatch++;
        }
      }
    }
  }

  return len - NaNCount;
};
