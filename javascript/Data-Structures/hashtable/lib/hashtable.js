'use strict';

const Node = require('./node.js');
const LL = require('./ll.js');

class HashTable {
  constructor(size) {
    this.storage = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.split('').reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0) * 19 % this.size;
  }

  set(key, val) {
    let hash = this.hash(key);

    if(!this.storage[hash]) {
      let ll = new LL();
      ll.add([key, val]);
      this.storage[hash] = ll;
    } else {
      this.storage[hash].add([key, val]);
    }
  }

  get(key) {
    if(!this.contains(key)) return;
    let hash = this.hash(key);
    let storage = this.storage[hash];
    let current = storage.head;

    while (current) {
      if(current.value[0] === key) {
        return current.value;
      } else if (current.next === null) {
        return null;
      } else {
        current = current.next;
      }
    }
  }

  contains(key) {
    let hash = this.hash(key);

    if(this.storage[hash]){
      return true;
    } else {
      return false;
    }
  }
}

// let hashtable = new HashTable(3);

// hashtable.set('brian', 'nations');
// hashtable.set('alex', 'boberson');
// hashtable.set('alex', 'johnson');
// hashtable.set('alex', 'thompson');
// hashtable.set('xale', 'coolness');
// hashtable.set('sally', 'samsonite');
// hashtable.set('tom', 'tiller');

// console.log(hashtable);

module.exports = HashTable;
