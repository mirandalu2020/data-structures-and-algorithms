'use strict';

const PseudoQueue = require('./../pseudo-queue');
const Stack = require('./../stack');

let stack1 = new Stack();
let stack2 = new Stack();
let pseudoQueue = new PseudoQueue();

pseudoQueue.stack1 = stack1;
pseudoQueue.stack2 = stack2;
stack1.push(0);
stack1.push(1); //top of stack1
stack2.push(10);
stack2.push(9); //top of stack2

describe('TEST for pseudo-queue enqueue() and dequeue()', () => {

  test('Should enqueue() add a new node to the top of pseudoQueue', ()=>{
    let enqueued = pseudoQueue.enqueue(2);
    // console.log(pseudoQueue);
    expect(enqueued.rear.value).toEqual(pseudoQueue.stack1.top.value);
    expect(pseudoQueue.length).toBe(stack1.length + stack2.length);
  });

  test('Should dequeue() remove a node to pseudoQueue if neither stack1 or stack2 is empty', ()=>{
    let dequeuedVal = stack2.top.value;
    let dequeued = pseudoQueue.dequeue();
    // console.log(pseudoQueue);
    expect(dequeued).toBe(dequeuedVal);
    expect(pseudoQueue.length).toBe(stack1.length + stack2.length);
  });

  test('Should dequeue() remove a node from pseudoQueue if stack2 is empty', ()=>{
    while (stack2.length) {
      stack2.pop();
    }
    let originalLength = stack1.length;
    let dequeued = pseudoQueue.dequeue();
    console.log(dequeued);
    expect(pseudoQueue.length).toBe(originalLength-1);
  });

  test('Should dequeue() throw exception if both stacks are empty', ()=>{
    while(stack1.length || stack2.length){
      if(stack1.length){
        stack1.pop();
      }
      if(stack2.length){
        stack2.pop();
      }
    }

    expect(()=> pseudoQueue.dequeue()).toThrow(Error);

  });
});
