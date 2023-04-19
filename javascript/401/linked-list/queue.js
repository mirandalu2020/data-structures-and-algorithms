'use strict';

const LinkedList = require('./linked-list');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Queue extends LinkedList {

  constructor() {
    super();
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.front = node;
      this.back = node;
      this.length += 1;
    }

    else {
      let temp = this.back;
      this.back = node;
      node.next = temp;
      temp.prev = node;
      this.length += 1;
    }
    return this;
  }

  dequeue() {

    if (this.length > 1){
      let temp = this.front;
      this.front = this.front.prev;
      this.length -= 1;
      console.log(this);
      return temp;
    }

    else if(this.length === 1 ){
      let temp = this.front.value;
      this.front = null;
      this.back = null;
      this.length -=1;
      return temp;
    }

    else{
      throw ('Empty list, nothing to dequeue');
    }
  }

  peak() {
    if (this.length === 0) {
      throw new Error('Nothing to peak');
    }

    return this.front.value;

  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    return false;
  }
}



module.exports = Queue;


