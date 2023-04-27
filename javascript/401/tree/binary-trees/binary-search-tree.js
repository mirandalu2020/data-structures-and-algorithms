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

    //*****if given val is smaller than current value*****
    while(current) {

      if (value < current.value) {
        //Case1: no node on current.left
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      //Case2: value is smaller than current value BUT greater than current.left.value
      else if(value > current.value){

        if (current.right === null){
          current.right = newNode;
          return this;
        }
        current = current.right;
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
    let maxVal = current.value;
    while(current.right){
      current = current.right;
      if (current.value > maxVal){
        maxVal = current.value;
        // console.log(maxVal);
      }
    }
    // console.log(maxVal);
    return maxVal;
  }


}

module.exports = BinarySearchTree;
