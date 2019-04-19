
/*
Even Occurrence
Find the first item that occurs an even number of times in an array. 
Remember to handle multiple even-occurrence items and return the first one. 
Return null if there are no even-occurrence items.


Examples

[ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]	2
[ "cat", "dog", "dig", "cat" ]	"cat"

*/

function evenOccurrence (array) {
  //initialize a storage
  //iterate through the array
  //check if the key already exists
  //if yes, increment value by one
  //if not, assing value of 1 to key
  //Iterate through the storage using the arrai os it's ordered
  //check for values to be even: use modulo
  // return first value, or retun null

  let obj = {};

  for(let value of array){
     if (obj[value]){
       obj[value]++;
     } else{
       obj[value] = 1;
     }
  }
    for(let value of array){
      if(obj[value] % 2 === 0){
        return value;
      }
    }
   return null;
  };
  