'use strict';

const LinkedList = require('../linked-list/lib/linked-list.js');
const zipLists = require('../llZip/ll-zip.js');

describe('ZIP LIST TESTS:', () => {

  it('should prove that the function works', () => {
    let list1 = new LinkedList();
    list1.insert(1);
    list1.insert(3);
    list1.insert(2);

    let list2 = new LinkedList();
    list2.insert(5);
    list2.insert(9);
    list2.insert(4);

    let answer = zipLists(list1, list2);
    let result = new LinkedList();
    result.head = answer;

    expect(result.toString()).toEqual('{1} -> {5} -> {3} -> {9} -> {2} -> {4} -> NULL');
  });

  it('should return nothing if both lists are empty', () => {
    let list1 = new LinkedList();
    let list2 = new LinkedList();

    let answer = zipLists(list1, list2);
    let result = new LinkedList();
    result.head = answer;

    expect(result.toString()).toBeFalsy();
  });

  it('should return list1 if list2 is empty', () => {
    let list1 = new LinkedList();
    list1.insert(1);
    list1.insert(3);
    list1.insert(2);

    let list2 = new LinkedList();

    let answer = zipLists(list1, list2);
    let result = new LinkedList();
    result.head = answer;

    expect(result.toString()).toEqual('{1} -> {3} -> {2} -> NULL');
  });

  it('should list2 if list1 is empty', () => {
    let list1 = new LinkedList();

    let list2 = new LinkedList();
    list2.insert(5);
    list2.insert(9);
    list2.insert(4);

    let answer = zipLists(list1, list2);
    let result = new LinkedList();
    result.head = answer;

    expect(result.toString()).toEqual('{5} -> {9} -> {4} -> NULL');
  });
});
