/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // 优化极端情况
  if (nums1[m - 1] < nums2[0]) {
    for (let i = 0; i < n; i++) {
      nums1[i + m] = nums2[i];
    }
    return;
  }

  // 将数组 1 移动到最后
  for (let i = m - 1; i > -1; i--) {
    nums1[i + n] = nums1[i];
  }

  let i1 = n;
  let i2 = 0;
  let i = 0;

  while (i2 < n) {
    const v1 = nums1[i1];
    const v2 = nums2[i2];

    if (v1 !== undefined) {
      if (v1 > v2) {
        nums1[i] = v2;
        i2++;
      } else {
        nums1[i] = v1;
        i1++;
      }
    } else {
      nums1[i] = v2;
      i2++;
    }

    i++;
  }
};
// @lc code=end

// 59/59 cases passed (48 ms)
// Your runtime beats 95.83 % of javascript submissions
// Your memory usage beats 30.77 % of javascript submissions (34.2 MB)
