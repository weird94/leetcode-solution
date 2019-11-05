/*
 * @lc app=leetcode id=204 lang=javascript
 *
 * [204] Count Primes
 */

// @lc code=start

const primes = [2, 3, 5, 7, 11];
let max = 11;

/**
 * @param {number} n
 * @return {number}
 */
function getPrimes(n) {
  let len = primes.length;
  if (n < max) {
    for (let i = 0; i < len; i++) {
      if (primes[i] > n) {
        return i;
      }
    }

    return len + 1;
  }
  let current = max + 2;

  while (current < n + 1) {
    let isPrime = true;
    for (let i = 0, len = primes.length; i < len; i++) {
      if (current === primes[i]) continue;
      if (current % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      len++;
      if (current > max) {
        primes.push(current);
        max = current;
      }
    }

    current += 2;
    isPrime = true;
  }

  return len;
}

/**
 * @param {number} n
 * @return {number}
 * 厄拉多塞筛法
 */
function countPrimes(n) {
  if (n < 3) return 0;
  const temp = Array(n).fill(1);
  temp[0] = 0;

  const max = ~~Math.sqrt(n) + 1;
  const len = getPrimes(max);

  for (let i = 0; i < len; i++) {
    const base = primes[i];
    for (let j = 2, end = n / base; j < end; j++) {
      temp[j * base] = 0;
    }
  }

  let res = 0;

  for (let i = 2; i < n; i++) {
    res += temp[i];
  }

  return res;
}

// 20/20 cases passed (112 ms)
// Your runtime beats 90.8 % of javascript submissions
// Your memory usage beats 60 % of javascript submissions (58.2 MB)
