'use strict';

const Stack = require('../stacksAndQueues/lib/stack.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    while(this.stack1.length !== 0){
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(value);

    while(this.stack2.length !==0){
      this.stack1.push(this.stack2.pop());
    }
  }

}

module.exports = PseudoQueue;
