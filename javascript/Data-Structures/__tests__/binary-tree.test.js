'use strict';

const BinaryTree = require('../tree/lib/binary-tree');
const Node = require('../tree/lib/node');


describe('BINARY TREE TESTS:', () => {

  let bt = new BinaryTree();

  it('can instantiate a Binary tree', () => {
    bt.insertNode(1);
    expect(bt.root).toBeTruthy();
    expect(bt.root.value).toBe(1);
  });

  it('can add multiple nodes to a Binary tree', () => {
    bt.insertNode(1);
    bt.insertNode(3);
    bt.insertNode(6);
    bt.insertNode(19);
    expect(bt.root).toBeTruthy();
    expect(bt.root.left).toBeTruthy();
    expect(bt.root.right).toBeTruthy();
    expect(bt.root.left.left).toBeTruthy();
  });

  it('will traversal in the correct way in a preOrder', () => {
    let one = new Node (1);
    let two = new Node (2);
    let three = new Node (3);
    let four = new Node (4);
    let five = new Node (5);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    let bt = new BinaryTree(one);
    expect(bt.preOrder()).toEqual([1, 2, 3, 4, 5]);
  });

  it('will traversal in the correct way in a inOrder ', () => {
    let one = new Node (1);
    let two = new Node (2);
    let three = new Node (3);
    let four = new Node (4);
    let five = new Node (5);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    let bt = new BinaryTree(one);
    expect(bt.inOrder()).toEqual([2, 1, 4, 3, 5]);
  });

  it('will traversal in the correct way in a postOrder', () => {
    let one = new Node (1);
    let two = new Node (2);
    let three = new Node (3);
    let four = new Node (4);
    let five = new Node (5);
    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    let bt = new BinaryTree(one);
    expect(bt.postOrder()).toEqual([2, 4, 5, 3, 1]);
  });

  it('can find the max value in the tree', () => {
    let one = new Node(2);
    let two = new Node(5);
    let three = new Node(70);
    let four = new Node(15);
    let five = new Node(13);

    one.left = two;
    one.right = three;
    three.left = four;
    three.right = five;
    let bt = new BinaryTree(one);

    expect(bt.findMaximumValue()).toEqual(70);
  });

});
