'use strict';

const Stack = require('./../stack');

function stackQueueBrackets(string) {
  let bracket_dict = {
    '(':')',
    '[':']',
    '{': '}'
  };
  let bracketStack = new Stack();
  for (let i of string){
    if (Object.keys(bracket_dict).includes(i)){
      bracketStack.push(bracket_dict[i]);
      console.log(bracketStack);
    }
    else if (Object.values(bracket_dict).includes(i)) {
      if (i === bracketStack.peak()){
        bracketStack.pop();
      }else{
        return false;
      }
    }
  }
  console.log(bracketStack);
  if (bracketStack.isEmpty()){
    return true;
  }
  return false;
}

module.exports = stackQueueBrackets;
