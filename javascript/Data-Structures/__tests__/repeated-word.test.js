'use strict';

const repeatedWord = require('../repeatedWord/repeated-word.js');
const strOne = 'Once upon a time, there was a brave princess who...';
const strTwo = 'I am just here for the test';

describe('REPEATED WORD TEST', () => {

  it('should find repeats in provided strOne', () => {
    let test1 = repeatedWord(strOne);

    expect(test1).toEqual(['a', 'a']);
  });

  it('should return no repeats if there are no repeats', () => {
    let test2 = repeatedWord(strTwo);

    expect(test2).toEqual('no repeats');
  });
});
