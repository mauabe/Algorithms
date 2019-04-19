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
