'use strict';

// const LinkedList = require('./linked-list');
const LinkedList = require('./linked-list');

describe ('Should test on linked list', () => {

  test ('Can successfully instantiate an empty linked list', () => {
    const list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  test ('Can properly insert into the linked list', () => {
    const list = new LinkedList();
    list.insertVal('value');
    expect(list.head.value).toEqual('value');
  });

  test ('The head property will properly point to the first node in the linked list', () => {
    const list = new LinkedList();
    list.insertVal('value');
    list.insertVal('value2');
    // console.log(list.head);
    expect(list.head.value).toEqual('value2');
  });

  test ('Can properly insert multiple nodes into the linked list', () => {
    const list = new LinkedList();
    list.insertVal('value');
    list.insertVal('value2');
    // console.log(list);
    expect(list.head.next).toBeTruthy();
  });

  test ('Will return true when finding a value within the linked list that exists', () => {
    const list = new LinkedList();
    list.insertVal(0);
    list.insertVal(1);
    // console.log(list);
    expect(list.includeVal(0)).toEqual(true);
    expect(list.includeVal(1)).toEqual(true);
    expect(list.includeVal(10)).toEqual(false);
  });

  test ('Will return false when searching for a value in the linked list that does not exist', () => {
    const list = new LinkedList();
    list.insertVal(0);
    list.insertVal(1);
    expect(list.includeVal(10)).toEqual(false);
  });

  test ('Can properly return a collection of all the values that exist in the linked list', () => {
    const list = new LinkedList();
    list.insertVal(0);
    list.insertVal(1);
    // console.log(list);
    console.log(list.toString());
    expect(list.toString()).toEqual('{ 1 } -> { 0 } -> { null }');
  });

});
