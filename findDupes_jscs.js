Day 6 

////////////////////////////
//     DELETE DUPS
////////////////////////////

// Write a function that takes in an array and returns a new array with duplicates removed
// Extension: solve in 0(n) time

//with obect storage solution
function deleteDups(arr) {
  const storage = {};
 for(let elem of arr){
   if (!storage[elem]){ storage[elem] = 1;}
   else storage[elem] =+ 1;
 }
 return Object.keys(storage);
}

//using Set
function deleteDups2(arr){
  // let newArray = new Set(arr);
  // return [...newArray];
  return [...new Set(arr)];
}

//NOTE ABOUT SET AND STRINGS"
var text = 'India'
var text2 = 'Mississippi'

var mySet1 = new Set(text);  
var mySet2 = new Set(text2); 

console.log([...mySet1]); // ['I', 'n', 'd', 'i', 'a']
console.log([...mySet2]); // ['M', 'i', 's', 'p']

//Using IndexOf()
function deleteDups3(array){
  return array.filter((value, index, arr) => arr.indexOf(value) === index);
}


// dupsTests() // Uncomment to check code!
function dupsTests() {
  console.log(deleteDups(['a', 'a', 'a', 'a', 'a']), ' -> [a]');
  console.log(deleteDups(['a', 'b', 'c', 'd']), ' -> [a, b, c, d]');
  console.log(deleteDups(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']), ' -> [a, b, c, d]');
}




////////////////////////////
//     FIND UNIQUE
////////////////////////////

// Write a function that takes in array in which every number appears exactly twice, except for one number which appears exactly once
// Challenge: give this function 0(n) time complexity, 0(1) space complexity

function uniqueNumber(array) {
  let unique;
  const storage = {};
  for(let num of array){
    if(!storage[num]){storage[num] = 1}
    else storage[num] += 1;
  }

  for(let single in storage){
    if(storage[single] === 1){
      unique = single;
    }
  }
  return unique;
}

// uniqueNumberTests() // uncomment to test!
function uniqueNumberTests() {
  console.log(uniqueNumber([1,2,2,1,3, 7, 3]), ' -> 7');
  console.log(uniqueNumber([1,2,2,1,3]), ' -> 3');
  console.log(uniqueNumber([1,2,2,1,3, 7, 3, 5, 5, 6, 6, 7, 9, 8, 9]), ' -> 8');
}
