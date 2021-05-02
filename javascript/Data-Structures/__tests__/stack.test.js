'use strict';

const Stack = require('../stacksAndQueues/lib/stack.js');

describe('Stack Tests:', () => {

  it('Can successfully instantiate an empty Stack', () => {
    let stack = new Stack();
    expect(stack.isEmpty()).toBe(true);
  });

  it('Should throw exceptions on a pop or peek on an empty stack', () => {
    let stack = new Stack();
    expect(stack.peek()).toBe('empty stack');
    expect(stack.pop()).toBe('empty stack');
  });

  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(5);
    expect(stack.length).toEqual(1);
  });

  it('Can successfully push multiples onto a stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    expect(stack.length).toEqual(3);
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    expect(stack.pop()).toEqual(15);
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.length).toEqual(0);
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push(5);
    stack.push(10);
    stack.push(15);
    stack.peek();
    expect(stack.peek()).toEqual(15);
  });

});
