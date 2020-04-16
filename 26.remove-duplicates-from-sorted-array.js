/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let lastNumber = NaN;
  let duplicateCount = 0;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const current = nums[i];
    if (current === lastNumber) {
      nums[i] = NaN;
      duplicateCount++;
    } else {
      lastNumber = current;
    }
  }

  let lastNaN = -1;
  for (let nextIndex = 0; nextIndex < len; nextIndex++) {
    const current = nums[nextIndex];
    if (isNaN(current)) {
      if (lastNaN === -1) {
        lastNaN = nextIndex;
      }
    } else {
      if (lastNaN !== -1) {
        nums[lastNaN] = current;
        lastNaN++;
      }
    }
  }
  return len - duplicateCount;
};
