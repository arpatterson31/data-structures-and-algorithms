'use strict';

const HashTable = require('../hashtable/lib/hashtable.js');


function leftJoin (table1, table2) {
  let finalArray = [];

  for (let i = 0; i < table1.storage.length; i++) {
    let array = [];
    if (table1.storage[i] !== undefined) {
      let key = (Object.keys(table1.storage[i].head.value)[0]);
      array.push(key);
      array.push(table1.storage[i].head.value[key]);

      if (table2.contains(key)) {
        array.push(table2.get(key));
      } else {
        array.push(null);
      }
      finalArray.push(array);
    }
  }
  return finalArray;
}

let table1 = new HashTable(17);
table1.set('fond', 'enamored');
table1.set('wrath', 'anger');
table1.set('diligent', 'employed');

let table2 = new HashTable(17);
table2.set('fond', 'averse');
table2.set('wrath', 'delight');
table2.set('diligent', 'idle');

let htCombo = leftJoin(table1, table2);

console.log(htCombo);

module.exports = leftJoin;
