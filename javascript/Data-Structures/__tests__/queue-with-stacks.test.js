'use strict';

const PseudoQueue = require('../queueWithStacks/queue-with-stacks.js');

describe('QUEUE WITH STACKS TESTS:', () => {

  it('Should enqueue a value', () =>{
    let queue = new PseudoQueue();
    let newQueue = queue.enqueue(1);
    expect(newQueue.length).toEqual(1);
  });

  it('should dequeue the first item', () =>{
    let pQ = new PseudoQueue();
    pQ.enqueue(5);
    pQ.enqueue(10);
    pQ.enqueue(15);
    pQ.enqueue(20);
    expect(pQ.dequeue()).toEqual(5);
  });

  it('should return false or an error if dequeuing an empty stack', () => {
    let empty = new PseudoQueue();
    expect(empty.dequeue()).toBe(false);
  });
});
