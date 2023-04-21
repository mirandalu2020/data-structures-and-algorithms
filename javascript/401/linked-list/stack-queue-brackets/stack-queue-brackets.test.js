'use strict';

const stackQueueBrackets = require('./stack-queue-brackets');

describe('If brackets are balanced in a string', ()=>{

  test('Should return true if string have corresponding opening/closing brackets', ()=>{

    expect(stackQueueBrackets('{}')).toBe(true);
    expect(stackQueueBrackets('{}(){}')).toBe(true);
    expect(stackQueueBrackets('(){}[[]]')).toBe(true);
  });

  test('Should return true if strings have extra characters AND with have corresponding opening/closing brackets', ()=>{

    expect(stackQueueBrackets('{}{Code}[Fellows](())')).toBe(true);
    expect(stackQueueBrackets('()[[Extra Characters]]')).toBe(true);
  });

  test('Should return false if string does NOT have corresponding opening/closing brackets', ()=>{

    expect(stackQueueBrackets('[({}]')).toBe(false);
    expect(stackQueueBrackets('(](')).toBe(false);
  });

  test('Should return false if string does NOT have corresponding opening/closing brackets in the correct order', ()=>{

    expect(stackQueueBrackets('{(})')).toBe(false);
  });


});
