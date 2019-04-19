////////////////////////////
//     FIND MISSING
////////////////////////////

// You are given an array of length n containing every number from 0 to n except for one missing number. Find that number!
// Challenge: give this function 0(n) time complexity, 0(1) space complexity

// function sumUpTo(n) {
//   let sum = 0;
//   if (n % 2 === 1) {
//     sum += n;
//     n --;
//   }
//   return sum + (n + 1) * (n / 2);
// }

function findMissing(array, n) {
  // let max = Math.max.apply(null, array);
  // let max = Math.max(...array);
  let sum = array.reduce(((a, b) => a + b), 0);
  let sumFull = 0;
  
  for(let i = 0; i < n; i++){
    sumFull += i;
  }
  return sumFull - sum;
}
console.log(findMissing([0, 1, 2, 3, 4, 5], 7));

// findMissingTests() // Uncomment to test this function
function findMissingTests() {
  console.log(findMissing([0, 1, 2, 3, 4, 5], 7), ' -> 6');
  console.log(findMissing([7, 5, 4, 3, 2, 1, 0], 8), ' -> 6');
  console.log(findMissing([0, 7, 1, 5, 2, 4, 3], 8), ' -> 6');
}
