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

  it('Can successfully add a node to the end of the linked list', () => {
    let list = new LinkedList();
    list.insert('test node');
    expect(list.head.value).toEqual('test node');
    list.append('test node 2');
    expect(list.head.next).toEqual({value: 'test node 2', next: null });
  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let list = new LinkedList();
    list.insert('test node');
    expect(list.head.value).toEqual('test node');
    list.append('test node 2');
    expect(list.head.next).toEqual({value: 'test node 2', next: null });
    list.append('test node 3');
    expect(list.head.next.next).toEqual({value: 'test node 3', next: null});
  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let list = new LinkedList();
    list.append('test node');
    list.append('test node 2');
    list.insertBefore('test node', 'test node 3');
    expect(list.head.value).toEqual('test node');
  });

  it('should return null if k is greater than the length of list', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
    list.append(2);
    expect(list.head.next).toEqual({value: 2, next: null});
    list.kthFromEnd(3);
    expect(list.kthFromEnd(3)).toEqual(null);
  });

  it('should return head value if k and the length are the same', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    expect(list.kthFromEnd(2)).toEqual(1);
  });

  it('should return null if k is a negative integer', () => {
    let list = new LinkedList();
    list.insert(1);
    expect(list.head.value).toEqual(1);
    list.append(2);
    expect(list.head.next).toEqual({value: 2, next: null});
    list.kthFromEnd(-2);
    expect(list.kthFromEnd(-2)).toEqual(null);
  });

  it('should return value of node kth from end', () => {
    let list = new LinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(4);
    list.append(5);
    expect(list.kthFromEnd(2)).toEqual(3);
  });

  it('should return null if linked list is size of 1 and k is larger than list size', () => {
    let list = new LinkedList();
    list.append(1);
    expect(list.kthFromEnd(2)).toEqual(null);
  });

});
