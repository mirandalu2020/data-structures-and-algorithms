'use strict';

const Stack = require('./../stack');

const stack = new Stack();

describe('Testing stack data structure methods', ()=>{

  test('1. Can successfully push onto a stack', () => {
    stack.push(0);
    expect(stack.top.value).toBe(0);
    expect(stack.length).toBe(1);
  });

  test('2. Can successfully push multiple values onto a stack', ()=>{
    stack.push(1);
    stack.push(2);
    expect(stack.top.value).toBe(2);
    expect(stack.length).toBe(3);
  });

  test('3. Can successfully pop off the stack', ()=>{
    let originalLength = stack.length;
    let topVal = stack.top.value;
    let popped = stack.pop();
    expect(popped).toBe(topVal);
    expect(stack.length).toBe(originalLength-1);
  });

  test('4. Can successfully empty a stack after multiple pops', ()=>{
    while (stack.length > 0) {
      stack.pop();
    }
    expect(stack.length).toBe(0);
    expect(stack.isEmpty()).toBe(true);
  });

  test('5. Can successfully peek the next item on the stack', ()=>{
    stack.push(1).push(2).push(3);
    expect(stack.peak()).toEqual(stack.top.value);
  });

  test('6. Can successfully instantiate an empty stack', ()=>{
    expect(new Stack()).toBeTruthy;
  });

  test('7. Calling pop or peek on empty stack raises exception', ()=>{
    while (stack.length > 0) {
      stack.pop();
    }
    expect(() => {stack.pop();}).toThrow(Error);
    expect(() => {stack.peak();}).toThrow(Error);
  });

});
