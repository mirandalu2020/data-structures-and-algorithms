'use strict';

const {BinaryTree, Node} = require('../binary-tree');
const BinarySearchTree = require('../binary-search-tree');

let newTree = new BinarySearchTree();

describe('Testing binary tree methods', ()=>{

  test('Can successfully instantiate an empty tree', ()=>{
    expect(new BinaryTree()).toBeTruthy();
  });

  test('Can successfully instantiate a tree with a single root node', ()=>{
    let tree = new BinaryTree();
    let rootNode = new Node('val');
    tree.root = rootNode;
    expect(tree.root.value).toBe('val');
  });

  test('For a Binary Search Tree, can successfully add a left child and right child properly to a node', ()=>{
    newTree.add(1);
    newTree.add(0);
    newTree.add(2);
    console.log(JSON.stringify(newTree));
    expect(newTree.root.value).toEqual(1);
    expect(newTree.root.left.value).toEqual(0);
    expect(newTree.root.right.value).toEqual(2);
  });

  test('Can successfully return a collection from a pre-order traversal', ()=>{
    let result = newTree.preOrder();
    expect(result).toEqual([1, 0, 2]);
  });

  test('Can successfully return a collection from an in-order traversal', ()=>{
    let result = newTree.inOrder();
    expect(result).toEqual([0, 1, 2]);
  });

  test('Can successfully return a collection from a post-order traversal', ()=>{
    let result = newTree.postOrder();
    expect(result).toEqual([0, 2, 1]);
  });

  test('Returns true for .contains() if the value exists', ()=>{
    expect(newTree.contains(0)).toBe(true);
  });

  test('Returns false for .contains() of the value does not exist', ()=>{
    expect(newTree.contains('falsy-value')).toBe(false);
  });

  test('Returns the greatest value in a tree', ()=>{
    newTree.add(100);
    newTree.add(30);
    newTree.add(20);
    expect(newTree.max()).toEqual(100);
  });

});
