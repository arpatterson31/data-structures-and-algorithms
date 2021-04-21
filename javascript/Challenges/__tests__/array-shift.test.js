'use strict';

const insertShiftArray = require('../arrayShift/array-shift.js');

describe('ARRAY SHIFT TESTS:', () => {

  it('Handles test 1', () => {
    expect(insertShiftArray([2,4,6,8], 5)).toEqual([2,4,5,6,8]);
  });

  it('Handles test 2', () => {
    expect(insertShiftArray([4,8,15,23,42], 16)).toEqual([4,8,15,16,23,42]);
  });

});
