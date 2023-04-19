'use strict';

const Queue = require('./../queue');

class AnimalShelter {

  constructor () {
    this.queue = new Queue();
  }

  enqueue(animal){
    if (animal.species === 'cat' || animal.species === 'dog') {
      if (animal.name){
        this.queue.enqueue(animal);
      }
      else {
        throw('the animal must have a name');
      }
    }
    else {
      throw ('The animal must be a dog or a cat');
    }
    return this;
  }

  dequeue(pref){
    if (pref.species === 'dog' || pref.species === 'cat'){

      let current = this.queue.peak();
      // console.log(current);
      for (let idx=0; idx < this.queue.length; idx++ ) {
        if (current.species === pref.species){
          let temp = this.queue.front;
          this.queue.front = current;
          temp.next = this.queue.front;
          // console.log(this);
          let result = this.queue.dequeue();
          // console.log(result);
          return result;
        }
        else{
          current = current.next;
        }
      }
    }
    else{
      return this.queue.front;
    }
  }
}

module.exports = AnimalShelter;

