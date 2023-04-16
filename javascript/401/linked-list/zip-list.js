'use strict';

const LinkedList = require('./linked-list');



function zipLists(list1, list2) {
  let list = new LinkedList();
  let current1=list1.head;
  let current2=list2.head;
  let idx = (list1.length < list2.length) ? list1.length : list2.length;

  while (idx > 0) {
    list.append(current1.value);
    list.append(current2.value);
    current1 = current1.next;
    current2 = current2.next;

    idx = idx -1;
  }
  // console.log(JSON.stringify(list));
  return list;
}

function print (list1, list2) {
  console.log(list1, list2);
}

module.exports = { print, zipLists};




