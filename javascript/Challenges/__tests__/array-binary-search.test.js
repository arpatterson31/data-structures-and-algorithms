'use strict';

const binarySearch = require('../arrayBinarySearch/array-binary-search.js');

describe('ARRAY BINARY SEARCH TESTS:', () => {

  it('should return the index of the array el that is equal to the search key', () => {
    expect(binarySearch([4,8,15,16,23,42], 15)).toEqual(2);
  });

  it('should return -1 if the el does not exist', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1);
    expect(binarySearch([1,2,3,5,6,7], 4)).toEqual(-1);
  });

});
