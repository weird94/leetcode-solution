function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 如果没有发生交换 说明已经排序完成
function bubble(array) {
  for (let i = 0, len = array.length; i < len - 1; i++) {
    let hasSwap = false;
    for (let j = 0; j < len - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, i, j);
        hasSwap = true;
      }
    }

    if (!hasSwap) {
      break;
    }
  }

  return array;
}

// console.log(bubble([1, 2, 3, 4, 5, 6, 7]));

console.log(bubble([1, 3, 2, 5, 4, 6, 7]));
