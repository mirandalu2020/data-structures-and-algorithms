const LinkedList = require('./../linked-list/linked-list');

class HashTable {
  constructor(size){
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key, prime=599){
    let sum = 0;
    for (let idx in key){
      sum = sum + key.charCodeAt(idx);
    }
    return (sum*prime) % this.size;
  }

  set(key, value){
    let position = this.hash(key);
    if (!this.buckets[position]){
      this.buckets[position] = new LinkedList();
      let entry = {[key]: value};
      this.buckets[position].insertVal(entry);
    }
    else if (this.buckets[position]){
      let entry = {[key]: value};
      this.buckets[position].insertVal(entry);
    }
  }

  //returns value associated with that key in the table
  get(key){
    let position = this.hash(key);
    if (this.buckets[position]){
      let current = this.buckets[position].head;
      while (current !==null){
        if (Object.keys(current.value)[0] === key) {
          return current.value[key];
        }
        else{
          current = current.next;
        }
      }
    }
    return null;
  }

  //returns boolean indicating if the key already exists
  has(key){
    let position = this.hash(key);
    if (this.buckets[position]){
      console.log(this.buckets[position]);
      return true;
    }
    return false;
  }

  keys(){
    let keyArr = [];
    let idx = 0;
    for (let item of this.buckets){
      if (item !== undefined){
        let current = item.head;
        while(current!== null) {
          keyArr[idx] = Object.keys(current.value)[0];
          current = current.next;
          idx += 1;
        }
      }
    }
    return keyArr;
  }

}

module.exports = HashTable;

