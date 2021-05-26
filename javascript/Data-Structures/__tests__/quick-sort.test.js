'use strict';

const quickSort = require('../blog/quickSort/quick-sort.js');

describe('QUICKSORT TESTS', () => {
  it ('should sort the array in ascending order', () => {
    let testArray = [8,4,23,42,16,15];
    let results = quickSort(testArray, 0, 5);

    expect(results).toEqual([4,8,15,16,23,42]);
  });

  it ('should sort a reverse sorted array in ascending order', () => {
    let testArray = [20,18,12,8,5,-2];
    let results = quickSort(testArray, 0, 5);

    expect(results).toEqual([-2,5,8,12,18,20]);
  });

  it ('should sort a unique array in ascending order', () => {
    let testArray = [5,12,7,5,5,7];
    let results = quickSort(testArray, 0, 5);

    expect(results).toEqual([5,5,5,7,7,12]);
  });

  it ('should finish sorting a nearly sorted array in ascending order', () => {
    let testArray = [2,3,5,7,13,11];
    let results = quickSort(testArray, 0, 5);

    expect(results).toEqual([2,3,5,7,11,13]);
  });
});
