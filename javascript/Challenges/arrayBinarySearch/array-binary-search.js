'use strict';

function binarySearch(array, key) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.ceil((left + right) / 2);

    if (array[middle] === key) {
      return middle;
    } else if (array[middle] < key) {
      left = middle + 1;
    } else if (array[middle] > key) {
      right = middle - 1;
    }
  }
  return -1;
}

module.exports = binarySearch;
