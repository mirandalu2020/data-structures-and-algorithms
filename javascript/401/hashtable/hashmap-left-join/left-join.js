'use strict';

function leftJoin(synonyms, antonyms) {

  let leftJoin = {};

  for (let idx=0; idx<synonyms.size; idx++){
    if (synonyms.buckets[idx]){
      console.log(synonyms.buckets[idx].head.value);
      let commonKey = Object.keys(synonyms.buckets[idx].head.value)[0];
      if (antonyms.has(commonKey)) {
        let synonym = synonyms.get(commonKey);
        let antonym = antonyms.get(commonKey);
        leftJoin[commonKey] = [synonym, antonym];
      }
      else if (antonyms.has(commonKey) === false){
        let synonym = Object.keys(synonyms.buckets[idx].head.value)[0];

        leftJoin[synonym] = [ synonyms.get(synonym), null];
      }
    }
  }

  console.log(leftJoin);
  return leftJoin;

}

module.exports = leftJoin;
