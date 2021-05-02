'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.length = 0;
    this.top = null;
  }

  push(value) {
    let node = new Node(value);
    this[this.length++] = node;
    return this;
  }

  pop() {
    if(this.length === 0) return 'empty stack';

    let node = this[--this.length];
    delete this[this.length];

    return node.value;
  }

  peek() {
    if(this.length === 0) return 'empty stack';
    return this[this.length - 1].value;
  }

  isEmpty() {
    if(this.length === 0) return true;
    return false;
  }

}

module.exports = Stack;
