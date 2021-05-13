'use strict';

const { Animal, AnimalShelter } = require('../fifoAnimalShelter/fifo-animal-shelter.js');

xdescribe('ANIMAL SHELTER TESTS:', () => {

  it('Can enqueue a cat', () => {
    let shelter = new AnimalShelter();
    let cat = new Animal('cat');
    shelter.enqueue(cat);
    expect(shelter.cat.length).toEqual(1);
  });

  it('Can enqueue a dog', () => {
    let shelter = new AnimalShelter();
    let dog = new Animal('dog');
    shelter.enqueue(dog);
    expect(shelter.dog.length).toEqual(1);
  });

  it('Can dequeue a cat', () => {
    let shelter = new AnimalShelter();
    let cat = new Animal('cat');
    shelter.enqueue(cat);
    shelter.enqueue(cat);
    shelter.enqueue(cat);
    shelter.dequeue(cat);
    expect(shelter.cat.length).toEqual(2);
  });

  it('Can dequeue a dog', () => {
    let shelter = new AnimalShelter();
    let dog = new Animal('dog');
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.enqueue(dog);
    shelter.dequeue(dog);
    expect(shelter.dog.length).toEqual(2);
  });

  it('Should throw error msg when enqueing anything other than a cat or dog', () => {
    let shelter = new AnimalShelter();
    let bunny = new Animal('bunny');
    expect(shelter.enqueue(bunny)).toBe('cats and dogs only');
  });

  it('Should return null when dequeing anything other than a cat or dog', () => {
    let shelter = new AnimalShelter();
    let bunny = new Animal('bunny');
    expect(shelter.dequeue(bunny)).toBe(null);
  });
});
