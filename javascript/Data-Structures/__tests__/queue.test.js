'use strict';

const Queue = require('../stacksAndQueues/lib/queue.js');

xdescribe('Queue Tests:', () => {

  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('Should throw exceptions on a peek or dequeue on an empty queue', () => {
    let queue = new Queue();
    expect(queue.peek()).toBe('queue is empty');
    expect(queue.dequeue()).toBe('queue is empty');
  });

  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue(5);
    expect(queue.length).toEqual(1);
  });

  it('Can successfully enqueue multiples onto a queue', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    expect(queue.length).toEqual(3);
  });

  it('Can successfully dequeue out of a queue', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    expect(queue.dequeue().value).toEqual(5);
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.length).toEqual(0);
  });

  it('Can successfully peek the queue', () => {
    const queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.enqueue(15);

    expect(queue.peek().value).toEqual(5);
  });

});
