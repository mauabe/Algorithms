'use strict';
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

function plusMinus(arr) {
  let p = 0;
  let n = 0;
  let z = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){p++}
    if (arr[i] < 0){n++}
    if (arr[i] === 0){z++}
  }
  console.log ((p/arr.length).toFixed(6));
  console.log((n/arr.length).toFixed(6));
  console.log((z/arr.length).toFixed(6));
}

console.log(plusMinus([4, 3, 0, 0, 4, 1 ]))

function main() {
    const n = parseInt(readLine(), 10);
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    plusMinus(arr);
}