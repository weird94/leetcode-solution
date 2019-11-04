/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

const isMatch = (current, match) => {
  const min = Math.min(current, match);
  const max = Math.max(current, match);
  if (
    (min === 40 && max === 41) ||
    (min === 123 && max === 125) ||
    (min === 91 && max === 93)
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === "") {
    return true;
  }
  const stack = new Stack();
  const len = s.length;

  for (let i = 0; i < len; i++) {
    const current = stack.current();
    const charCode = s.charCodeAt(i);

    if (isMatch(charCode, current)) {
      stack.pop();
    } else {
      stack.push(charCode);
    }

    // 优化
    if (len - i < stack.index) {
      return false;
    }
  }

  return stack.index === 0;
};

const INIT_SIZE = 200;
const ADD_SIZE = 100;

class Stack {
  constructor() {
    this.value = new Int16Array(20);
    this.index = 0;
  }

  /**
   *
   * @param {number} s
   */
  push(s) {
    const currentLen = this.value.length;
    if (currentLen - 1 === this.index) {
      const newArray = new Int16Array(currentLen + ADD_SIZE);
      for (let i = 0; i < currentLen; i++) {
        newArray[i] = this.value[i];
      }
      this.value = newArray;
    }
    this.value[this.index] = s;
    this.index++;
  }

  pop() {
    this.index--;
  }

  current() {
    if (this.index === 0) {
      return 0;
    }
    return this.value[this.index - 1];
  }
}
