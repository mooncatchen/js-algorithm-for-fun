function sort(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    let key = arr[i];
    let j = i;
    do {
      if (key < arr[j - 1]) {
        arr[j] = arr[j - 1]; 
        j -= 1;
      }
    } while (j > 0 && arr[j - 1] >= key);

    arr[j] = key;
  }
  console.log(arr);
}

sort([8, 2, 4, 9, 3, 6]);

