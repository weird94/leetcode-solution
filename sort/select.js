function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function select(arr) {
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] > arr[i]) {
        swap(arr, i, j);
      }
    }
  }

  return arr;
}

select([1, 3, 2, 5, 4, 6, 7]);
