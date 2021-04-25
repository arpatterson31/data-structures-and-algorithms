'use strict';

// Require our linked list implementation
const LinkedList = require('../linked-list/lib/linked-list.js');

describe('Linked List', () => {
  it('Can successfully instantiate an empty linked list', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('Can properly insert into the linked list', () => {
    let list = new LinkedList();
    list.insert('test node');
    expect(list.head.value).toEqual('test node');
    expect(list.head.next).toEqual(null);
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let list = new LinkedList();
    list.insert('test node');
    expect(list.head.value).toEqual('test node');
    expect(list.head.next).toEqual(null);
  });

  it('Can properly insert multiple nodes into the linked list', () => {
    let list = new LinkedList();
    list.insert('test node');
    expect(list.head.value).toEqual('test node');
    list.append('test node 2');
    expect(list.head.next).toEqual({value: 'test node 2', next: null });
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let list = new LinkedList();
    list.insert('test node 1');
    list.append('test node 2');
    expect(list.includes('test node 2')).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let list = new LinkedList();
    list.insert('test node 1');
    list.append('test node 2');
    expect(list.includes('test node 6')).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let list = new LinkedList();
    list.insert('test node 1');
    list.append('test node 2');
    expect(list.toString()).toEqual('{test node 1} -> {test node 2} -> NULL');
  });

});
