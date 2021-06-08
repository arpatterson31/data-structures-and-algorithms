'use strict';

const HashTable = require('../hashtable/lib/hashtable.js');

function repeatedWord(string) {
  const ht = new HashTable(430);

  const words = string.replace(/[^a-z0-9 ]/g,'').split(' ');

  for(let i = 0; i < words.length; i++){
    let key = words[i].toLowerCase();

    if(ht.contains(key)){
      return ht.get(key);
    }
    ht.set(key, key);
  }
  return 'no repeats';
}

module.exports = repeatedWord;
