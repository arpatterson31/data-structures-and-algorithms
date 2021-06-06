'use strict';

const Node = require('./node.js');

class LL {
  constructor() {
    this.head = null;
  }
  add(val) {
    let node = new Node(val);

    if(!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  getList() {
    if (!this.head) return 'no list';

    let current = this.head;

    while(current) {
      current = current.next;
    }
  }
}

module.exports = LL;
