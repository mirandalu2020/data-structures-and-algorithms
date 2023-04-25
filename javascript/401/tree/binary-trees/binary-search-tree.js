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

    //*****if given val is smaller than current value*****
    if (value < current.value) {
      //Case1: no node on current.left
      if(current.left === null){
        current.left = newNode;
        return this;
      }

      //Case2: value is smaller than current value BUT greater than current.left.value
      else if(value > current.left.value){
        newNode.left = current.left.value;
        current.left = newNode;
      }

      //Case3: value is smaller than current value but NOT greater than current.left.value
      //move the pointer to current.left and repeat from the beginning
      else {
        current = current.left;
        this.add(value, current);
      }
    }

    //*****if given val is greater than root*****
    //move to the right child. If the child is null, add the newNode; if not null, repeat the function from beginning
    if (value > current.value){
      // Case1: no node on current.right
      if (current.right === null){
        current.right = newNode;
        return this;
      }

      //Case2: value is greater than current.value but less than current.right.value
      else if (value < current.right.value){
        newNode.left = current.right;
        current.right = newNode;
        return this;
      }

      //Case3: value is greater than current.value but NOT less than current.right.value
      //Move on to the sub-tree rooted at current.right and repeat
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

  max(node=this.root){
    let current = node;
    while(current.right){
      current = current.right;
    }
    return current.value;
  }


}

module.exports = BinarySearchTree;
