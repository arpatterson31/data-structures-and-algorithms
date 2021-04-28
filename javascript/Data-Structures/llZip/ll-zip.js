'use strict';


const LinkedList = require('../linked-list/lib/linked-list');

function zipLists(list1, list2) {
  // create new list that will be the zipped one
  const zippedList = new LinkedList();
  zippedList.current = zippedList.head;
  // grab heads of the 2 lists
  list1.current = list1.head;
  list2.current = list2.head;

  while(list1.current !== null || list2.current !== null ) {
    if(list1.current !== null && list2.current !== null){
      zippedList.insert(list2.current.value);
      zippedList.insert(list1.current.value);
      list2.current = list2.current.next;
      list1.current = list1.current.next;
    }
    else if(list1.current !== null && list2.current === null) {
      zippedList.insert(list1.current.value);
      list1.current = list1.current.next;
    }
    else if(list1.current === null && list2.current !== null) {
      zippedList.insert(list2.current.value);
      list2.current = list2.current.next;
    }
    else {
      return;
    }
  }
  return zippedList.head;
}


module.exports = zipLists;
