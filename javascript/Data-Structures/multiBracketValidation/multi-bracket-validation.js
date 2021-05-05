'use strict';

const Stack = require('../stacksAndQueues/lib/stack.js');

function multiBracketValidation(input) {
  let stack = new Stack();
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  input = input.replace(/[^[\](){}<>]+/g,'');

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
      stack.push(input[i]);
    }
    else {
      let last = stack.pop();

      if (input[i] !== map[last]) return false;
    }
  }

  if (stack.length !== 0) return false;
  return true;
}

module.exports = multiBracketValidation;

// console.log(multiBracketValidation('(){}')); // true
// console.log(multiBracketValidation('[]')); // true
// console.log(multiBracketValidation('()[[Extra Characters]]')); // true
// console.log(multiBracketValidation('{}{Code}[Fellows](())')); // true
// console.log(multiBracketValidation('[({}]')); // false
// console.log(multiBracketValidation('{(})')); // false

