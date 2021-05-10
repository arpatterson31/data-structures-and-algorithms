'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    let results = [];

    let _walk = node => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  inOrder() {
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };
    _walk(this.root);
    return results;
  }

  postOrder() {
    let results = [];

    let _walk = node => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };
    _walk(this.root);
    return results;
  }

  findMaximumValue() {
    if(this.root === null) return 'empty tree';

    let _findMax = node => {

      if(node.left === null && node.right === null) return;

      let max = node.value;
      let leftMax = _findMax(node.left);
      let rightMax = _findMax(node.right);

      if(leftMax > max) max = leftMax;
      if(rightMax > max) max = rightMax;
      return max;
    };
    return _findMax(this.root);
  }

  insertNode(value) {
    let node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (current) {
      if (current.left === null) {
        current.left = node;
        return this;
      } else if (current.right === null) {
        current.right = node;
        return this;
      }
      current = current.left;
    }
  }


}

module.exports = BinaryTree;
