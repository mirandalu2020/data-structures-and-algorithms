'use strict';

// const LinkedList = require('./linked-list');
const LinkedList = require('./../linked-list');
const { zipLists } = require('./../zip-list');
const { print } = require('./../zip-list');
console.log(zipLists);

const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(5);
list1.append(7);

const list2 = new LinkedList();
list2.append(2);
list2.append(4);
list2.append(6);
list2.append(8);

print(list1, list2);
console.log(zipLists(list1, list2));

describe('Should zip two linked lists in an alternating manner', () => {
  test('list1 and list2 have the same length, and should be zipped in an alternating manner', () => {
    let zipped = zipLists(list1, list2);
    console.log(zipped.toString());
    expect(zipped.head.value).toEqual(1);
    expect(zipped.head.next.value).toEqual(2);
    expect(zipped.length).toEqual(list1.length + list2.length);
  });

});

