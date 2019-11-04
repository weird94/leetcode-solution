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
  const al = a.length;
  const bl = b.length;
  const max = Math.max(al, bl);
  const tempArr = new Uint8Array(max);

  let index = 1;
  let shouldPlusOne = false;
  while (index <= al && index <= bl) {
    const ai = a[al - index];
    const bi = b[bl - index];

    if (shouldPlusOne) {
      if (ai === '0' && bi === '0') {
        shouldPlusOne = false;
        tempArr[max - index] = 1;
      } else if (ai === '1' && bi === '1') {
        tempArr[max - index] = 1;
      } else {
        tempArr[max - index] = 0;
      }
    } else {
      if (ai === '0' && bi === '0') {
        tempArr[max - index] = 0;
      } else if (ai === '1' && bi === '1') {
        tempArr[max - index] = 0;
        shouldPlusOne = true;
      } else {
        tempArr[max - index] = 1;
      }
    }

    index++;
  }

  if (index - 1 === max) {
    return shouldPlusOne ? '1' + tempArr.join('') : tempArr.join('');
  }

  const isALongThanB = al > bl;

  for (; index <= max; index++) {
    const vi = isALongThanB ? a[al - index] : b[bl - index];
    if (shouldPlusOne) {
      if (vi === '1') {
        tempArr[max - index] = 0;
      } else {
        tempArr[max - index] = 1;
        shouldPlusOne = false;
      }
    } else {
      if (vi === '1') {
        tempArr[max - index] = 1;
      } else {
        tempArr[max - index] = 0;
      }
    }
  }

  return shouldPlusOne ? '1' + tempArr.join('') : tempArr.join('');
};
// @lc code=end
