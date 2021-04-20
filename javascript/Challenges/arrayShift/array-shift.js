'use strict';

function insertShiftArray(array, value) {
  let newArray = [];
  let middle = Math.ceil(array.length / 2);

  for(let i = 0; i <= array.length; i++){
    if (i < middle){
      newArray[i] = array[i];
    } else if(i === middle ){
      newArray[i] = value;
    } else if(i > middle){
      newArray[i] = array[i-1];
    }
  }
  return newArray;
}

module.exports = insertShiftArray;
