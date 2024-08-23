// Initialize an array with random numbers
const unsortedInputArray = [];
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// Bubble Sort Algorithm
const bubbleSort = (array) => {
  let n = array.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        // Swap adjacent elements if they are in the wrong order
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }

    n--; // Reduce the comparison range after each pass

  } while (swapped);

  return array;
};

// Sort the array and output the result
const sorted = bubbleSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
