/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
function minDepth(root) {
  if (root == null) return 0;
  if (root.left === null && root.right === null) return 1;

  /**
   * @param {TreeNode} root
   * @return {boolean}
   */
  function isLeaf(node) {
    if (node === null) return false;
    if (node.left === null && null === node.right) return true;
    return false;
  }

  const queue = new Queue();

  let length = 0;
  if (root.left !== null) {
    queue.push(root.left);
    length++;
  }

  if (root.right !== null) {
    queue.push(root.right);
    length++;
  }

  let depth = 1;

  while (queue.end) {
    let currentLength = 0;
    for (let i = 0; i < length; i++) {
      const current = queue.unshift();
      if (isLeaf(current)) {
        return depth + 1;
      } else {
        if (current.left) {
          queue.push(current.left);
          currentLength++;
        }

        if (current.right) {
          queue.push(current.right);
          currentLength++;
        }
      }
    }

    length = currentLength;
    depth++;
  }
}
// @lc code=end

// 41/41 cases passed (56 ms)
// Your runtime beats 94.28 % of javascript submissions
// Your memory usage beats 80 % of javascript submissions (37.1 MB)
