const leftJoin = require('./left-join');
const HashTable = require('./../hashtable');

let synonyms = new HashTable(100);
let antonyms = new HashTable(80);

synonyms.set('diligent', 'employed');
synonyms.set('fond', 'enamored');
synonyms.set('guide', 'usher');
synonyms.set('outfit', 'garb');
antonyms.set('diligent', 'idle');
antonyms.set('fond', 'averse');
antonyms.set('guide', 'follow');

let joined = leftJoin(synonyms, antonyms);

describe('Testing leftJoin function for two hash maps', ()=>{

  it('Should join two hashtables when the key exists in both tables', ()=>{
    console.log(joined);
    let result = joined['diligent'];
    expect(result).toEqual(['employed', 'idle']);
  });

  it('Should make the antonym null if the key only exists in the synnonym table', ()=>{
    let result = joined['outfit'];
    expect(result).toEqual(['garb', null]);
  });

});
