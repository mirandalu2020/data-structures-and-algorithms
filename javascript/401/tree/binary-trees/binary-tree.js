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

  breadthFirst(node=this.root){
    let current = node;
    let queue = [];
    let val = [];
    queue.push(current);
    val.push(current.value);

    while(queue.length){
      current = queue.shift();
      // console.log(current.value);
      if(current.left){
        queue.push(current.left);
        val.push(current.left.value);
      }
      if(current.right){
        queue.push(current.right);
        val.push(current.right.value);
      }
    }
    // console.log(val);
    return val;
  }
}

module.exports = {BinaryTree, Node};
