'use strict';

const Queue = require('../stacksAndQueues/lib/queue.js');

class Animal {
  constructor(type){
    this.type = type;
  }
}

class AnimalShelter {
  constructor() {
    this.dog = new Queue();
    this.cat = new Queue();
  }

  enqueue(animal) {
    if(animal.type === 'dog') {
      this.dog.enqueue(animal);
      return this.dog;
    } else if(animal.type === 'cat') {
      this.cat.enqueue(animal);
      return this.cat;
    } else {
      return 'cats and dogs only';
    }
  }

  dequeue(pref) {
    if(pref.type === 'dog') {
      return this.dog.dequeue(pref);
    } else if(pref.type === 'cat') {
      return this.cat.dequeue(pref);
    } else {
      return null;
    }
  }
}

module.exports = { Animal, AnimalShelter };
