'use strict';

const HashTable = require('../hashtable');

function repeatedWord(string, tableSize=100000){
  string = string.toLowerCase();
  string = string.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,'');
  let hashed = new HashTable(tableSize);
  let strArr = string.split(' ');
  let result = null;

  let idx = 0;
  while (idx < strArr.length){
    let getResults = hashed.has(strArr[idx]);
    // console.log(getResults);
    if (getResults){
      result = strArr[idx];
      // console.log(result, idx);
      break;
    }
    else {
      hashed.set(strArr[idx]);
      idx += 1;
    }
  }
  return result;

}

module.exports = repeatedWord;


