'use strict';

const LinkedList = require('./linked-list');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class Stack extends LinkedList{

  constructor() {
    super();
    this.top = null; //eq. to the tail of the linked list
  }

  push(value) {
    let node = new Node(value);
    if (this.length === 0){
      this.top = node;
      // this.head = node;
      this.length += 1;
    }
    else{
      let temp = this.top;
      this.top = node;
      this.top.next = temp;
      this.length += 1;
    }


    return this;
  }

  pop() {
    let temp;
    if (this.length === 0) {
      // console.log('Nothing to pop');
      throw Error('Nothing to pop');
    }

    else {
      temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length -= 1;
    }
    return temp.value;
  }


  peak() {
    if (this.length !== 0){
      return this.top.value;
    }

    else{
      console.log('Nothing to peak');
      throw Error('Nothing to peak');
    }
  }

  isEmpty() {
    if (this.length === 0){
      return true;
    }
    return false;
  }

}

module.exports = Stack;
