/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 1) {
    return 1;
  }
  let left = 0;
  let right = x;

  while (right - left > 1) {
    const mid = ~~((right + left) / 2);
    const midSqrt = mid * mid;

    if (midSqrt > x) {
      right = mid;
    } else if (midSqrt < x) {
      left = mid;
    } else {
      return mid;
    }
  }

  return left;
};

// @lc code=end
