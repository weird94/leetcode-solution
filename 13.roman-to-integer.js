/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

const ROMAN_CHAR = Object.create(null);

ROMAN_CHAR["I"] = 1;
ROMAN_CHAR["V"] = 5;
ROMAN_CHAR["X"] = 10;
ROMAN_CHAR["L"] = 50;
ROMAN_CHAR["C"] = 100;
ROMAN_CHAR["D"] = 500;
ROMAN_CHAR["M"] = 1000;

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const len = s.length;

  let res = 0;
  let temp = 0;

  for (let i = len - 1; i > -1; i--) {
    const char = s[i];
    const value = ROMAN_CHAR[char];
    if (value >= temp) {
      res += value;
    } else {
      res -= value;
    }
    temp = value;
  }

  return res;
};

// 3999/3999 cases passed (156 ms)
// Your runtime beats 86.62 % of javascript submissions
// Your memory usage beats 100 % of javascript submissions (39.4 MB)
