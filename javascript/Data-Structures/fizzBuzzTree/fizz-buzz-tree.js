'use strict';

const Queue = require('../stacksAndQueues/lib/queue.js');

class Node {
  constructor(value, parent = null, children =[]) {
    this.value = value;
    this.parent = parent;
    this.children = children;
  }
}

class K_aryTree {
  constructor(value) {
    let node = new Node(value);
    this.root = node;
  }

  fizzBuzzTree() {
    if(this.root === null) return 'empty tree';
    let current = this.root;
    let queue = new Queue();
    while (current && current.children) {
      for (let i = 0; i < current.children.length; i++) {
        queue.enqueue(current.children[i]);
      }
      if (current.value % 3 === 0 && current.value % 5 === 0) {
        current.value = 'FizzBuzz';
      } else if (current.value % 3 === 0) {
        current.value = 'Fizz';
      } else if (current.value % 5 === 0) {
        current.value = 'Buzz';
      } else {
        current.value = String(current.value);
      }
      current = queue.dequeue();
    }
    return this;
  }
}



module.exports = { Node, K_aryTree };
