function shell(array, gap) {
  for (let i = 0; i < gap; i++) {
    for (
      let j = 0, index = gap * j + i;
      index < array.length;
      j++, index = gap * j + i
    ) {
      const current = array[index];
      let bigger = false;
      for (let k = j - 1; k >= 0; k--) {
        if (array[gap * k + i] > current) {
          bigger = true;
          array[gap * (k + 1) + i] = array[gap * k + i];
        } else {
          if (bigger) {
            array[gap * (k + 1) + i] = current;
            bigger = false;
          }
          break;
        }
      }

      if (bigger) {
        array[gap * 0 + i] = current;
      }

      console.log("array", array);
    }
  }
}

var array = [4, 2, 8, 9, 5, 7, 6, 1, 3, 10];

// 希尔排序
// 可以大幅减少移动次数
shell(array, 4);
console.log(array);
shell(array, 1);
console.log(array);
