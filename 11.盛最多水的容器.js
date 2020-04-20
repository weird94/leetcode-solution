/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start

// s = min(h1, h2) * (w(h2) - w(h1))

// /**
//  * @param {number[]} heights
//  * @return {number}
//  */
// var maxArea = function (heights) {
//   let max = 0;

//   for (let i = 0, len = heights.length; i < len - 1; i++) {
//     const h1 = heights[i];
//     for (let j = i + 1; j < len; j++) {
//       const h2 = heights[j];
//       const s = Math.min(h1, h2) * (j - i);
//       max = Math.max(max, s);
//     }
//   }

//   return max;
// };

/**
 * @param {number[]} heights
 * @return {number}
 */
var maxArea = function (heights) {
  let max = 0;

  let i = 0,
    j = heights.length - 1;

  while (i < j) {
    const h1 = heights[i];
    const h2 = heights[j];

    const s = Math.min(h1, h2) * (j - i);
    max = Math.max(max, s);

    if (h2 < h1) {
      j--;
    } else {
      i++;
    }
  }

  return max;
};
// @lc code=end

// 50/50 cases passed (64 ms)
// Your runtime beats 92.66 % of javascript submissions
// Your memory usage beats 94.12 % of javascript submissions (35.6 MB)
