'use strict';

const Queue = require('./../queue');

let queue = new Queue();

describe('Testing the Queue Datastructure', ()=>{

  test('1. Can successfully enqueue into a queue', () => {
    expect(queue.enqueue(0).back.value).toEqual(0);
    expect(queue.length).toEqual(1);
  });

  test('2. Can successfully enqueue multiple values into a queue', () => {
    expect(queue.enqueue(1).back.value).toEqual(1);
    expect(queue.enqueue(2).back.value).toEqual(2);
    expect(queue.length).toEqual(3);
  });

  test('3. Can successfully dequeue out of a queue the expected value', () =>{
    let toBeDequeued = queue.front.value;
    let dequeued = queue.dequeue();
    expect(dequeued).toEqual(toBeDequeued);
  });

  test('4. Can successfully peek into a queue, seeing the expected value',() => {
    expect(queue.peak()).toEqual(queue.front.value);
  });

  test('5. Can successfully empty a queue after multiple dequeues', ()=>{
    console.log(queue.length);
    while(queue.length > 0) {
      queue.dequeue();
    }
    console.log(queue.length);
    expect(queue.length).toEqual(0);
  });

  test('6. Can successfully instantiate an empty queue', ()=>{
    expect(new Queue()).toBeTruthy;
  });

  test('7. Calling dequeue or peek on empty queue raises exception', ()=>{
    let emptyQueue = new Queue();
    expect(()=> emptyQueue.peak()).toThrow();
    expect(() => emptyQueue.dequeue()).toThrow();
  });
});
