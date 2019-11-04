/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let shouldPlus = false;
  const len = digits.length;
  const addedLst = (digits[len - 1] + 1) % 10;

  if (addedLst === 0) {
    shouldPlus = true;
  }

  digits[len - 1] = addedLst;

  for (let i = len - 2; i > -1; i--) {
    if (shouldPlus === true) {
      shouldPlus = false;
      const addedI = (digits[i] + 1) % 10;
      if (addedI === 0) {
        shouldPlus = true;
      }
      digits[i] = addedI;
    } else {
      break;
    }
  }

  if (shouldPlus) {
    return [1, ...digits];
  } else {
    return digits;
  }
};
// @lc code=end
