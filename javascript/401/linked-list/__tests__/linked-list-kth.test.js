'use strict';

// const LinkedList = require('./linked-list');
const LinkedList = require('../linked-list');

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
console.log(list);

describe('Should test reading a value in reverse order in a linked-list', () => {
  test('Happy Path” where k is not at the end, but somewhere in the middle of the linked list', () => {
    expect(list.kthFromEnd(1)).toEqual(3);
  });

  test('Where k is greater than the length of the linked list', ()=>{
    let result = list.kthFromEnd(5);
    console.log(result);
    expect(result).toBe('Exception, out of bounds');
  });

  test('Where k and the length of the list are the same', ()=>{
    expect(list.kthFromEnd(4)).toEqual(4);
  });

  test('Where k is not a positive integer', ()=>{
    expect(list.kthFromEnd(-1)).toEqual('Exception, out of bounds');
  });

  test('Where the linked list is of a size 1', ()=>{
    const smallList = new LinkedList();
    smallList.append(1);
    expect(smallList.kthFromEnd(1)).toEqual(1);
  });

});
