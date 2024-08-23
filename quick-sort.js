// Initialize an array with random numbers
const unsortedInputArray = [];
for (let i = 0; i < 2000; i++) {
  unsortedInputArray.push(Math.round(Math.random() * 2000));
}

// Quick Sort Algorithm
const quickSort = (array) => {
  if (array.length <= 1) return array; // Base case

  const pivot = array.splice(Math.floor(Math.random() * array.length), 1)[0];
  const left = [];
  const right = [];

  array.forEach((el) => {
    el <= pivot ? left.push(el) : right.push(el);
  });

  return quickSort(left).concat(pivot, quickSort(right)); // Recursive sort and merge
};

// Sort the array and output the result
const sorted = quickSort(unsortedInputArray);
console.log('Post Sort:', sorted.join(' '));
console.log('DONE!');
