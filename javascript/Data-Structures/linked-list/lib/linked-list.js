'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let node = new Node(value);
    // is he head currently empty?
    if (!this.head) {
      this.head = node;
    } else { //if it's not empty, the new value will become the 'head' and it will need to point at the old head
      node.next = this.head;
      this.head = node;
    }
  }

  includes(value) {
    if (!this.head) {
      return false;
    } else {
      let currentNode = this.head;

      while (currentNode) {
        if (value === currentNode.value) {
          return true;
        } else {
          currentNode = currentNode.next;
        }
      }
      return false;
    }
  }

  toString() {
    let str = '';
    if (!this.head) {
      return;
    } else {
      let node = this.head;

      while (node) {
        str += (`{${node.value}} -> `);
        node = node.next;
      }
      return str.concat('NULL');
    }
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertBefore(value, newValue) {
    let node = new Node(newValue);
    let current = this.head;

    if (!this.includes(value)) {
      return null;
    } else {
      while (current.next !== null && current.next.value !== value) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
  }

  insertAfter(value, newValue) {
    let node = new Node(newValue);
    let current = this.head;

    if (!this.includes(value)) {
      return null;
    } else {
      while (current.next !== null && current.value !== value) {
        current = current.next;
      }
      node.next = current.next;
      current.next = node;
    }
  }

  kthFromEnd(k) {
    if(this.head === null || k < 1) {
      return null;
    }

    let firstPointer = this.head;
    let secondPointer = this.head;
    // move 1st pointer to kth node from start
    for(let i = 0; i < k; i++) {
      if(firstPointer === null) // if length is less than k
        return null;
      firstPointer = firstPointer.next;
    }
    // move both pointers until 1st hits end of list
    while (firstPointer.next !== null){
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
    }
    // 2nd pointer will now be at the kth from the end!
    return secondPointer.value;
  }
}

module.exports = LinkedList;
