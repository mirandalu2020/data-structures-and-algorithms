'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  insertVal(value) {
    //create a new node with the user input
    const node = new Node(value);

    //if the head is empty, set the head as the node
    if (this.head) {
      node.next = this.head;
      this.head=node;
    }

    else {
      this.head = node;
    }
  }

  includeVal(value) {
    let current = this.head;

    while(current !== null) {
      if (current.value === value) {
        return true;
      }
      else {
        current = current.next;
      }
    }
    return false;
  }

  toString() {
    let current = this.head;
    let str = `{ ${current.value} }`;
    while (current !== null) {
      current = current.next;
      if (current !== null) {
        str =`${str} -> { ${current.value} }` ;
      }
      else {
        str = `${str} -> { ${current} }`;
      }
    }
    return str;
  }

}

module.exports = LinkedList;
