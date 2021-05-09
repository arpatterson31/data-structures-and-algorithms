'use strict';

const BinarySearchTree = require('../tree/lib/binary-search-tree');

describe('BINARY SEARCH TREE TESTS:', () => {

  let bst = new BinarySearchTree();
  bst.add(20);
  bst.add(10);
  bst.add(30);
  bst.add(15);
  bst.add(31);
  bst.add(22);
  bst.add(8);

  console.log(bst);

  it('can add values to tree and keep it sorted', () => {
    expect(bst.root.value).toBe(20);
    expect(bst.root.left.value).toBe(10);
    expect(bst.root.left.left.value).toBe(8);
    expect(bst.root.left.right.value).toBe(15);
    expect(bst.root.right.value).toBe(30);
    expect(bst.root.right.right.value).toBe(31);
    expect(bst.root.right.left.value).toBe(22);
  });

  it('will return true if the tree contains the value', () => {
    expect(bst.contains(22)).toBe(true);
  });

  it('will return false if the tree contains the value', () => {
    expect(bst.contains(17)).toBe(false);
  });

});
