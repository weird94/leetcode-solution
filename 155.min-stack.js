/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.topNode = this.end = null;
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this.end === null) {
    this.topNode = this.end = { val: x, next: null, min: x };
  } else {
    const currentMin = this.topNode.min;
    if (x < currentMin) {
      const newNode = { val: x, next: this.topNode, min: x };
      this.topNode = newNode;
    } else {
      const newNode = { val: x, next: this.topNode, min: currentMin };
      this.topNode = newNode;
    }
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.topNode === null) return;
  if (this.topNode === this.end) {
    this.topNode = this.end = null;
  } else {
    this.topNode = this.topNode.next;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.topNode ? this.topNode.val : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.topNode ? this.topNode.min : null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
