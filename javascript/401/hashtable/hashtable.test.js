const { name } = require('mustache');
const HashTable = require('./hashtable');

describe('Tests for methods and properties of a hash table', ()=> {

  const nameTable = new HashTable(100, 599);
  nameTable.set('a', 'FirstName');
  console.log(nameTable);

  test('1. Setting a key/value to your hashtable results in the value being in the data structure', ()=>{
    let position = ('a'.charCodeAt(0) * 599)%100;
    // console.log(position);
    // console.log(nameTable.buckets[position]);
    expect(nameTable.buckets[position].head.value['a']).toEqual('FirstName');
  });

  test('2. Retrieving based on a key returns the value stored', ()=>{
    let result = nameTable.get('a');
    // console.log(result);
    expect(result).toBe('FirstName');
  });

  test('3. Successfully returns null for a key that does not exist in the hashtable', ()=>{
    let result = nameTable.get('not-a-key');
    // console.log(result);
    expect(result).toBe(null);
  });

  test('4. Successfully returns a list of all unique keys that exist in the hashtable', ()=>{
    nameTable.set('test-key', 'test-val');
    nameTable.set('test-key2', 'test-val');
    let result = nameTable.keys();
    console.log(result);
    expect(result.length).toEqual(3);
  });

  test('5. Successfully handle a collision within the hashtable', ()=>{
    nameTable.set('da', 'FirstName2');
    let result = nameTable.get('da');
    let expected = nameTable.buckets[3].head.value['da'];
    // console.log(expected);
    // console.log(nameTable.get('da'));
    // let expected = nameTable[3].head.next.value;
    expect(result).toEqual(expected);
  });

  test('6. Successfully retrieve a value from a bucket within the hashtable that has a collision', ()=>{
    let result = nameTable.get('da');
    expect(result).toBe('FirstName2');
  });

  test('7.Successfully hash a key to an in-range value', ()=>{
    let value = (('ABC'.charCodeAt(0) * 599) + ('ABC'.charCodeAt(1) * 599) + ('ABC'.charCodeAt(2) * 599))%nameTable.size;
    // console.log(value);
    // console.log(nameTable.hash('ABC'));
    expect(nameTable.hash('ABC')).toEqual(value);
  });

});




