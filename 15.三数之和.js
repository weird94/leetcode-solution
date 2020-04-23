/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums = nums.sort((o1, o2) => o1 - o2);
  const res = [];
  let last;
  for (let i = 0, len = nums.length; i < len - 2; i++) {
    let j = i + 1;
    let k = len - 1;
    const iv = nums[i];
    if (iv === last) {
      continue;
    }
    last = iv;

    while (k > j) {
      const jv = nums[j];
      const kv = nums[k];
      const sum = jv + kv;
      if (sum === -iv) {
        res.push([iv, jv, kv]);
        while (k > j) {
          if (nums[j + 1] === jv) {
            j++;
          } else if (nums[k - 1] === kv) {
            k--;
          } else {
            j++;
            k--;
            break;
          }
        }
      } else if (sum > -iv) {
        k--;
      } else {
        j++;
      }
    }
  }

  return res;
};
// @lc code=end

// 313/313 cases passed (196 ms)
// Your runtime beats 57.99 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (46.8 MB)
