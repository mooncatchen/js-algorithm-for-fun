function merge(left, right) {
  const leftLen = left.length;
  const rightLen = right.length;
  let i = 0;
  let j = 0;
  let arr = [];
  while (i < leftLen && j < rightLen) {
    if (left[i] > right[j]) {
      arr[i + j] = right[j];
      j += 1;
    } else if (left[i] <= right[j]) {
      arr[i + j] = left[i];
      i += 1;
    }
  }

  if (i < leftLen) {
    arr = arr.concat(left.slice(i));
  } else if (j < rightLen) {
    arr = arr.concat(right.slice(j));
  }

  return arr;
}

function mergeSort(arr) {
  const len = arr.length;
  if (len === 1) {
    return arr;
  }

  const left = arr.slice(0, Math.floor(len / 2));
  const right = arr.slice(Math.floor(len / 2), len);
  return merge(mergeSort(left), mergeSort(right));
}

 console.log(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]));
 console.log(mergeSort([2, 3, 9, 8 , 6, 4, 1]));
