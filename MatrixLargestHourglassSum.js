'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));
  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
  //arr is a 2D matrix (6x6), an array with built in arrays.
  //Hourglass is: First Line: [i][j] + [i+1][j] + [i+2][j] + 
  //Second Line: [i+1][j+1] + 
  //Third Line: [i][j+2] + [i+1][j+2] + [i+2][j+2]

  //create result variable with lowest possible combination(-9 x 7 = -63)
  let result = -63;

  //iterate over matrix array (nested arrays in arr)
  //variable i is the value of column in arr, ie, value in position 1 of each nester array
  //i cannot be index 4 or 5, because it would not make an hourglass. 
  //Same as arr[0].length-2. We know arr had 6 nested arrays, with 6 elements in each, 
  //so we use 4 as the stop limit.
  for (let i = 0; i < 4; i++) {
    //nested for loop to iterate over column. Same here j, has to be smaller than 4.
    for (let j = 0; j < 4; j++) {
      //create a variable to calculate the sum of elements of hourglass
      //not very elegant, brute force method to add all elements in hourglass.
      //It would be possible to push each element into an array, and reduce the sum, 
      //but it would just increase time and space complexity.
      let hourglassSum = arr[i][j]   + arr[i][j+1]     + arr[i][j+2] 
                                     + arr[i+1][j+1] 
                       + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];

      //compare sum with result on each iteration and update result
      // if (hourglassSum > result) result = hourglassSum; //or a more elegant:
      result = (hourglassSum > result ? hourglassSum : result);
    }
  }
  // result has the largets hourglass sum in matrix.
  return result;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
  let arr = Array(6);
  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
  }
  let result = hourglassSum(arr);
  ws.write(result + "\n");
  ws.end();
}

const case1 =[
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

const case2 = [
[-9, -9, -9,  1, 1, 1],
[ 0, -9,  0,  4, 3, 2],
[-9, -9, -9,  1, 2, 3],
[ 0,  0,  8,  6, 6, 0],
[ 0,  0,  0, -2, 0, 0],
[ 0,  0,  1,  2, 4, 0]
];

const case3 = [
  [-9, -9, -9,  0,  0,  0],
  [ 0, -9,  0,  0,  0,  0],
  [-9, -9, -9,  0,  0,  0],
  [ 0,  0,  0,  0,  0,  0],
  [ 0,  0,  0, 0,  0,  0],
  [ 0,  0,  0,  0,  0,  0]
  ]

console.log (hourglassSum(case1));  //19
console.log (hourglassSum(case2));  //28
console.log (hourglassSum(case3));  //0