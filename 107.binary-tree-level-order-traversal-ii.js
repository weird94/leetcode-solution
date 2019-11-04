/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
 */

// @lc code=start

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function Queue() {
  this.end = this.first = null;
}

/**
 * @param {TreeNode} root
 */
Queue.prototype.push = function(node) {
  if (!this.end) {
    this.first = this.end = { node, next: null };
  } else {
    this.end.next = { node, next: null };
    this.end = this.end.next;
  }
};

/**
 * @return {TreeNode}
 */
Queue.prototype.unshift = function() {
  if (!this.first) {
    return null;
  } else if (this.first === this.end) {
    const toReturn = this.first;
    this.first = this.end = null;
    return toReturn.node;
  } else {
    const toReturn = this.first;
    this.first = this.first.next;
    return toReturn.node;
  }
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom(root) {
  const res = [];

  if (root === null) return res;
  const queue = new Queue();
  queue.push(root);
  let total = 1;
  while (total) {
    let arr = [];
    let current = 0;
    for (let i = 0; i < total; i++) {
      const node = queue.unshift();

      arr.push(node.val);

      if (node.left !== null) {
        queue.push(node.left);
        current++;
      }

      if (node.right !== null) {
        queue.push(node.right);
        current++;
      }
    }

    res.unshift(arr);
    total = current;
  }

  return res;
}
// @lc code=end

// 34/34 cases passed (56 ms)
// Your runtime beats 76.04 % of javascript submissions
// Your memory usage beats 66.67 % of javascript submissions (34.9 MB)
