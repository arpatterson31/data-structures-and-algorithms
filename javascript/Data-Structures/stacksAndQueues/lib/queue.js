'use strict';

const Node = require('./node.js');

// class Queue {
//   constructor() {
//     this.length = 0;
//     this.next = null;
//   }

//   enqueue(value) {
//     let node = new Node(value);
//     this[this.length] = node;
//     if (!this.next) this.next = 0;
//     this.length++;
//     return this;
//   }

//   dequeue() {
//     if(this.length === 0) return 'queue is empty';
//     let temp = this[this.next];

//     delete this[this.next++];
//     this.length--;

//     return temp;

//   }

//   peek(){
//     if(this.length === 0) return 'queue is empty';
//     return this[this.next];
//   }

//   isEmpty() {
//     if(this.length === 0) return true;
//     return false;
//   }
// }

class Queue {
  constructor(){
    this.size = 0,
    this.next = null,
    this.first = null,
    this.last = null;
  }

  enqueue(val){
    let newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue(){
    if(!this.first) return 'Exception, empty queue';
    let temp = this.first;

    if(this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

  peek(){
    if(!this.first) return 'Exception, empty queue';
    let temp = this.first;
    return temp.value;
  }


  isEmpty(){
    if( this.size === 0) return true;
    return false;
  }

}


module.exports = Queue;
