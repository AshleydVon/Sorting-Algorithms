// Initialize an array with random numbers
const unsortedInputArray = [];
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// Merge Arrays Function
const mergeArrays = (leftArray, rightArray) => {
  const resultArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Merge the two arrays while maintaining order
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      resultArray.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements
  return resultArray.concat(leftArray.slice(leftIndex)).concat(rightArray.slice(rightIndex));
};

// Merge Sort Algorithm
const mergeSort = (array) => {
  if (array.length <= 1) return array; // Base case

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return mergeArrays(mergeSort(left), mergeSort(right)); // Recursive sort and merge
};

// Sort the array and output the result
const sorted = mergeSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
