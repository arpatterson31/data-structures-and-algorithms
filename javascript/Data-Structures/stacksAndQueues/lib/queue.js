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
    if (!this.next) this.next = 0;
    this.length++;
    return this;
  }

  dequeue() {
    if(this.length === 0) return 'queue is empty';
    let temp = this[this.next];

    delete this[this.next++];
    this.length--;

    return temp;

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
