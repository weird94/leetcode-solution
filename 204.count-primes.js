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
function countPrimes(n) {
  let len = primes.length;
  if (n < max + 1) {
    const n1 = n - 1;
    for (let i = 0; i < len; i++) {
      if (primes[i] > n1) {
        return i;
      }
    }

    return len + 1;
  }
  let current = max + 2;

  while (current < n) {
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
// @lc code=end
