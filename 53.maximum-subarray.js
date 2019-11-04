/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let last = -Infinity;
  let current = nums[0];

  let i = 1;
  const len = nums.length;
  const maxIndex = len - 1;

  while (i < len) {
    const num = nums[i];
    console.log('loop', i, num);
    if (current < 0) {
      if (current < num) {
        current = num;
      }
    } else {
      if (num >= 0) {
        if (current < 0) {
          current = num;
        } else {
          current += num;
        }
      } else {
        if (last < current) {
          last = current;
        }
        let currentNum = num;
        while (currentNum <= 0 && i < maxIndex) {
          i++;
          let num1 = nums[i];
          currentNum += num1;
        }
        if (current + currentNum < 0) {
          current = -Infinity;
        } else {
          current += currentNum;
        }
      }
    }
    i++;
  }

  return Math.max(last, current);
};

console.log(maxSubArray([3, -2, -3, -3, 1, 3, 0]));
console.log(maxSubArray([3, -2, -3, -3, 1, 3, 0].reverse()));
