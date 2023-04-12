'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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

  append(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.length += 1;
    }
    else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      this.length += 1;
    }
  }

  insertBefore(val, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    let previous = this.head;
    let temp;

    if (this.head.value ===val ) {
      node.next = this.head;
      this.head = node;
      this.length += 1;
    }

    while(current.value !== val) {
      temp = current;
      current = current.next;
      previous = temp;
    }
    //existing while-loop when current.value = val
    previous.next = node;
    node.next = current.next;
    this.length += 1;
    //move the value from value and beyond forward by 1 position

  }

  insertAfter(val, newVal) {
    let node = new Node(newVal);
    let current = this.head;
    let after = this.head.next;
    let temp;

    while(current !== null) {
      if (current.value !== val) {
        temp=current;
        current = after;
        after = temp;
      }
      else {
        current.next = node;
        this.length += 1;
        node.next = after;
        break;
      }
    }
  }

  kthFromEnd(k) {
    let current = this.head;

    let message;
    if (this.length < k || k < 0){
      message = 'Exception, out of bounds';
      return message;
    }
    else if (this.length === k) {
      let idx = 0;
      while (idx < (this.length -1)) {
        current = current.next;
        idx ++;
      }
      return current.value;
    }
    else if (this.length > k) {
      let forwardIndex = this.length-k-1;
      let idx = 0;
      while (idx < forwardIndex) {
        current = current.next;
        idx ++;
      }
      console.log(current.value);
    }
    return message || current.value;
  }

}

module.exports = LinkedList;
