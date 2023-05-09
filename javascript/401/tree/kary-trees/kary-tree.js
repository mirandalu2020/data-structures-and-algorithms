'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.child = [];
  }
}

class KaryTree {

  constructor(){
    this.root = null;
  }

  add(k, val) {
    const node = new Node(val);

    if (this.root === null){
      this.root = node;
    }
    else{
      let current;
      for (let i=0; i<k; i++){
        if (node.child[i]) {
          current = node.child[i+1];
        }
        else{
          node.child[i] = node;
        }
      }
    }
  }
}

module.exports = KaryTree;
