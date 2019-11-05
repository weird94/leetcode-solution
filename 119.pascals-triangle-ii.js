/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start

const rows = [[1], [1, 1], [1, 2, 1]];

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
function getRow(n) {
  if (n < rows.length) return rows[n];
  const lastRow = getRow(n - 1);

  const newRows = [1];

  for (let i = 1, len = lastRow.length; i < len; i++) {
    newRows[i] = lastRow[i] + lastRow[i - 1];
  }

  newRows.push(1);

  rows[n] = newRows;

  return newRows;
}
// @lc code=end

// 34/34 cases passed (48 ms)
// Your runtime beats 93.81 % of javascript submissions
// Your memory usage beats 40 % of javascript submissions (34.1 MB)
