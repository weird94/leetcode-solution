/*
 * @lc app=leetcode id=205 lang=javascript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  var structs = [];
  var charMap = Object.create(null);
  var index = 0;
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if (charMap[c] !== undefined) {
      structs.push(charMap[c]);
    } else {
      charMap[c] = index;
      structs.push(index);
      index++;
    }
  }

  index = 0;
  charMap = Object.create(null);
  for (var j = 0; j < t.length; j++) {
    c = t[j];

    if (charMap[c] !== undefined) {
      if (charMap[c] !== structs[j]) {
        return false;
      }
    } else {
      if (index !== structs[j]) {
        return false;
      }
      charMap[c] = index;
      index++;
    }
  }

  return true;
};
// @lc code=end
