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
    }
    let current = this.root;
    while(current){
      if(value < current.value){
        if(current.left === null){
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value){
    if(this.root === null) return 'empty tree';
    // TODO
  }
}

module.exports = BinarySearchTree;
