'use strict';

function leftJoin(synonyms, antonyms) {

  let leftJoin = {};

  for (let idx=0; idx<synonyms.size; idx++){
    let commonKey = Object.keys(synonyms.buckets[idx])[0];
    if (antonyms.has(commonKey)) {
      let synonym = synonyms.get(commonKey);
      let antonym = antonyms.get(commonKey);
      leftJoin[commonKey] = [synonym, antonym];
    }
    else if (antonyms.has(commonKey) === false){
      let synonym = Object.keys(synonyms[idx])[0];
      leftJoin[synonym] = [synonyms[idx].synonym, null];
    }
  }

  console.log(leftJoin);
  return leftJoin;

}

module.exports = leftJoin;
