'use strict';

const Node = require('./node.js');

class Queue {
  constructor() {
    this.length = 0;
    this.next = null;
  }

  enqueue(value) {
    let node = new Node(value);
    this[this.length] = node;
    this.length++;

    return this;
  }

  dequeue() {
    if(this.length === 0) return 'queue is empty';
  }

  peek(){
    if(this.length === 0) return 'queue is empty';
    return this[this.next];
  }

  isEmpty() {
    if(this.length === 0) return true;
    return false;
  }
}

module.exports = Queue;
