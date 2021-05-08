'use strict';

const Node = require('./node.js');


class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(value){
    let node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      // TODO
    }
  }

  contains(value){
    if(this.root === null) return 'empty tree';
    
  }
}

module.exports = BinarySearchTree;
