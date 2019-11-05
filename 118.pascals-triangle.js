/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start

const rows = [[1], [1, 1], [1, 2, 1]];

/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  const index = numRows - 1;
  if (index < 0) return [];
  if (index < rows.length) return rows.slice(0, numRows);

  function generateRow(n) {
    if (n < rows.length) return rows[n];
    const lastRow = generateRow(n - 1);

    const newRows = [1];

    for (let i = 1, len = lastRow.length; i < len; i++) {
      newRows[i] = lastRow[i] + lastRow[i - 1];
    }

    newRows.push(1);

    rows[n] = newRows;

    return newRows;
  }

  generateRow(index);

  return rows;
}
// @lc code=end

// 15/15 cases passed (48 ms)
// Your runtime beats 89.66 % of javascript submissions
// Your memory usage beats 46.15 % of javascript submissions (33.8 MB)
