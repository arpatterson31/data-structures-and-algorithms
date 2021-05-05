'use strict';

let multiBracketValidation = require('../multiBracketValidation/multi-bracket-validation.js');

describe('Multi-Bracket Validation Test:', () => {

  it('Should return true on balanced brackets: {}', () => {
    expect(multiBracketValidation('{}')).toBe(true);
  });

  it('Should return true on balanced brackets: {}(){}', () => {
    expect(multiBracketValidation('{}(){}')).toBe(true);
  });

  it('Should return true on balanced brackets with extra characters: ()[[Extra Characters]]', () => {
    expect(multiBracketValidation('()[[Extra Characters]]')).toBe(true);
  });

  it('Should return true on balanced brackets with extra characters: {}{Code}[Fellows](())', () => {
    expect(multiBracketValidation('{}{Code}[Fellows](())')).toBe(true);
  });

  it('Should return false on unbalanced brackets: ({}', () => {
    expect(multiBracketValidation('({}')).toBe(false);
  });

  it('Should return false on unbalanced brackets: [({}]', () => {
    expect(multiBracketValidation('[({}]')).toBe(false);
  });

});

