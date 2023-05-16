'use strict';

const HashTable = require('../hashtable');

function repeatedWord(string){
  string = string.toLowerCase();
  let hashed = new HashTable(100000);
  let strArr = string.split(' ');
  let result = null;

  let idx = 0;
  while (idx < strArr.length){
    let getResults = hashed.has(strArr[idx]);
    console.log(getResults);
    if (getResults){
      result = strArr[idx];
      // console.log(result, idx);
      break;
    }
    else {
      idx += 1;
    }
  }
  return result;

}

module.exports = repeatedWord;


