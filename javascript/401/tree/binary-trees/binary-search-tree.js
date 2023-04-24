'use strict';

const {BinaryTree, Node} = require('./binary-tree');

class BinarySearchTree extends BinaryTree {

  constructor(){
    super();
  }

  add(value, node=this.root){
    let newNode = new Node(value);
    let current = node;
    //when tree is empty
    if (current===null){
      this.root = newNode;
      return this;
    }

    //duplicated values
    if (value === this.root.value) {
      return this;
    }

    //if given val is smaller than root
    if (value < current.value) {
      if(current.left === null){
        current.left = newNode;
        return this;
      }
      else {
        current = current.left;
        this.add(value, current);
      }
    }

    //if given val is greater than root
    //move to the right child. If the child is null, add the newNode; if not null, repeat the function from beginning
    if (value > current.value){
      if (current.right === null){
        current.right = newNode;
        return this;
      }
      else {
        current = current.right;
        this.add(value, current);
      }
    }
  }


  find(value, node = this.root) {
    if (node === null) {
      return null;}

    // start at root, compare to root.value
    if (value === node.value) {
      return node;}

    if (value < node.value){
      return this.find(value, node = node.left);
    }
    if (value > node.value) {
      return this.find(value, node = node.right);
    }
  }

  contains(value, node){
    if (this.find(value, node)){
      return true;
    }
    else {
      return false;
    }
  }

}

module.exports = BinarySearchTree;
