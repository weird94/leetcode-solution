/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);
  const start = 0;
  const end = nums.length - 1;

  function build(nums, start, end, isLeft) {
    if (start === end) {
      return new TreeNode(nums[start]);
    }

    const mid = (isLeft ? Math.floor((end - start) / 2) : Math.ceil((end - start) / 2)) + start;

    const current = new TreeNode(nums[mid]);
    const left = mid === start ? null : build(nums, start, mid - 1, true);
    const right = mid === end ? null : build(nums, mid + 1, end);

    current.left = left;
    current.right = right;
    return current;
  }

  return build(nums, start, end);
}
// @lc code=end

// 分析: 找中点游戏

// 32/32 cases passed (60 ms)
// Your runtime beats 93.37 % of javascript submissions
// Your memory usage beats 30.77 % of javascript submissions (37.8 MB)
