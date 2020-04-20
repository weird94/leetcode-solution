/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (!needle) {
    return 0;
  }
  const total = haystack.length;
  const matchLength = needle.length;
  for (let i = 0, len = total - matchLength; i <= len; i++) {
    let unEqual = false;
    for (let j = 0; j < matchLength; j++) {
      if (haystack[i + j] !== needle[j]) {
        unEqual = true;
        break;
      }
    }

    if (!unEqual) {
      return i;
    }
  }

  return -1;
};
