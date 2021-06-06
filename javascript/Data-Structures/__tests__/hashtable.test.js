'use strict';

const HashTable = require('../hashtable/lib/hashtable.js');

describe('HASH TABLE TESTS', () => {
  let hashtable = new HashTable(430);

  it('should set a key/value pair into the table and handle collision as needed', () => {
    hashtable.set('mindy', 'kaling');
    hashtable.set('brad', 'pitt');
    hashtable.set('jonathan', 'vanNess');
    hashtable.set('jimin', 'park');

    expect(hashtable.contains('jimin')).toBe(true);
  });

  it('can get the value from the table using the key', () => {
    hashtable.set('audrey', 35);
    hashtable.set('cora', 3);

    expect(hashtable.get('audrey')).toEqual(['audrey', 35]);
    expect(hashtable.get('cora')).toEqual(['cora', 3]);
  });

  it('should return false if no key exists in the hashtable', () => {
    hashtable.set('mindy', 'kaling');
    hashtable.set('brad', 'pitt');
    hashtable.set('jonathan', 'vanNess');
    hashtable.set('jimin', 'park');

    expect(hashtable.contains('bob')).toBe(false);
    expect(hashtable.contains('sally')).toBe(false);
  });

  it('should successfully retrieve a value from a hashtable with a collision', () => {
    let ht = new HashTable(25);

    ht.set('mindy', 'kaling');
    ht.set('brad', 'pitt');
    ht.set('brad', 'patt');
    ht.set('jonathan', 'vanNess');
    ht.set('jimin', 'park');

    expect(ht.get('brad')).toEqual(['brad','patt']);
  });

  it('can hash a key to an in-range value', () => {

    expect(hashtable.hash('test')).toBeLessThanOrEqual(430);
  });

});
