/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  let shouldPlusOne = false;
  let res = '';

  while (aIndex > -1 && bIndex > -1) {
    const ai = a[aIndex];
    const bi = b[bIndex];

    if (ai === '1' && bi === '1') {
      res = shouldPlusOne ? '1' + res : '0' + res;
      shouldPlusOne = true;
    } else if (ai === '0' && bi === '0') {
      res = shouldPlusOne ? '1' + res : '0' + res;
      shouldPlusOne = false;
    } else if ((ai === '0' && bi === '1') || (ai === '1' && bi === '0')) {
      if (shouldPlusOne) {
        res = '0' + res;
        shouldPlusOne = true;
      } else {
        res = '1' + res;
        shouldPlusOne = false;
      }
    }

    aIndex--;
    bIndex--;
  }

  if (aIndex === bIndex) {
    return shouldPlusOne ? '1' + res : res;
  } else if (aIndex === -1) {
    if (!shouldPlusOne) {
      return b.slice(0, bIndex + 1) + res;
    }
    while (shouldPlusOne) {
      const bi = b[bIndex];
      if (bi === '1') {
        res = '0' + res;
      } else {
        res = '1' + res;
        shouldPlusOne = false;
      }
      bIndex--;
    }

    if (bIndex === -2) {
      return res;
    } else {
      return b.slice(0, bIndex + 1) + res;
    }
  } else if (bIndex === -1) {
    if (!shouldPlusOne) {
      return a.slice(0, aIndex + 1) + res;
    }
    while (shouldPlusOne) {
      const ai = a[aIndex];
      if (ai === '1') {
        res = '0' + res;
      } else {
        res = '1' + res;
        shouldPlusOne = false;
      }
      aIndex--;
    }

    if (aIndex === -2) {
      return res;
    } else {
      return a.slice(0, aIndex + 1) + res;
    }
  }
};
// @lc code=end
