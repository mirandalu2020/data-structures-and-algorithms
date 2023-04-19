'use strict';

const AnimalShelter = require('./animal-shelter');
let shelter = new AnimalShelter();

describe('TESTS for animal shelter adoption enqueue and dequeue', ()=>{

  let dog1 = {
    name: 'BOBO',
    species: 'dog'
  };
  let cat2 = {
    name: 'Lucky',
    species: 'cat'
  };
  test('Can add new animals to the shelter', ()=>{
    shelter.enqueue(dog1);
    expect(shelter.queue.front.value.name).toEqual(dog1.name);
    shelter.enqueue(cat2);
    // console.log(shelter.queue);
    expect(shelter.queue.back.value.name).toEqual(cat2.name);
  });

  test('Should throw error if the species is not a dog or a cat', ()=>{
    let cobra = {
      name: 'slinky',
      species: 'snake'
    };
    expect(() => shelter.enqueue(cobra)).toThrow();
  });

  test('Can dequeue animal if mathes preference input', ()=>{
    let pref = {
      species: 'dog',
    };
    let frontVal = shelter.queue.front.value;
    let dequeued = shelter.dequeue(pref);
    // console.log(dequeued);
    expect(dequeued).toEqual(frontVal);
  });

  test('If animal requested is not a dog or a cat, return the animal has stayed in the shelter the longest', ()=>{
    let pref = {
      species: 'penguin',
    };
    console.log(shelter.queue);
    let frontVal = shelter.queue.front;
    let dequeued = shelter.dequeue(pref);
    console.log(dequeued);
    expect(dequeued).toEqual(frontVal);
  });
});
