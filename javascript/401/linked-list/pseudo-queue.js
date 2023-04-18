'use strict';

const Stack = require('./stack');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class PseudoQueue {

  constructor() {
    this.rear = null;
    this.front = null;
    this.stack1 = new Stack(); //rear of the pseudoQueue
    this.stack2 = new Stack(); //front of the pseudoQueue
    this.length = 0;
  }

  enqueue(value){
    this.stack1.push(value);
    this.rear = this.stack1.top;
    this.length = this.stack1.length + this.stack2.length;
    return this;
  }

  dequeue(){
    let poppedVal;

    if (this.stack2.length){
      poppedVal = this.stack2.pop();
      this.front = this.stack2.top;
      this.length = this.stack1.length + this.stack2.length;
    }

    else if (this.length === 0) {
      throw Error('Nothing to dequeue, empty queue');
    }

    else if(this.stack2.length === 0) {
      //move the nodes from stack1 to stack2 1-by-1
      //until the last node is on the top of stack2
      while(this.stack1 .length > 0){
        this.stack2.push(this.stack1.top.value);
        this.stack1.pop();
      }
      console.log(this.stack2);
      poppedVal=this.stack2.pop();
      this.length = this.stack1.length + this.stack2.length;
    }

    return poppedVal;
  }

}

module.exports = PseudoQueue;
