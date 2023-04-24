'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {

  constructor(){
    this.root = null;
  }

  preOrder(node=this.root){
    let arr = [];

    function traverse (node){
      console.log(node.value);
      arr.push(node.value);
      if (node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
    }

    traverse(node);
    return arr;
  }

  inOrder(node=this.root){
    let arr = [];

    function traverse(node){
      if (node.left){
        traverse(node.left);
      }
      arr.push(node.value);
      console.log(node.value);
      if(node.right){
        traverse(node.right);
      }
    }

    console.log(this);
    traverse(node);
    return arr;
  }

  postOrder(node=this.root){
    let arr = [];

    function traverse(node){
      if (node.left) {
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
      console.log(node.value);
      arr.push(node.value);
    }

    traverse(node);
    return arr;
  }
}

module.exports = {BinaryTree, Node};
