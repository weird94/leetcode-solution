function quick(array, start, end) {
  if (start === end) return start;
  const base = array[start];
  let i = start + 1;
  let j = end;

  while (j > i) {
    while (array[j] > base && j > i) {
      j--;
    }

    while (array[i] < base && j > i) {
      i++;
    }

    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  array[start] = array[i];
  array[i] = base;

  return i;
}

function quickSort(array, start, end) {
  if (start >= end) return;
  const mid = quick(array, start, end);
  quickSort(array, start, mid - 1);
  quickSort(array, mid + 1, end);
}

// n + n/2 + n/2 + 4*n/4 + .... log2n * n/log2n

// o(nlog2n)

// 优化
// 在逆序的情况下 性能最差
// 原因是每次都没有将数组均分
// 一个优化就是去 start center end 的中位数作为base

var a, b;
console.log((a = performance.now()));
(function () {
  const array = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8];
  quickSort(array, 0, array.length - 1);
  console.log(array);
})();

console.log((b = performance.now()));
console.log("cost", b - a);
