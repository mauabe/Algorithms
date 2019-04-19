'use strict';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', inputStdin => {inputString += inputStdin;});
process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});
function readLine() {
    return inputString[currentLine++];
}

function miniMaxSum(arr) {
    const miniArr = arr.slice().sort((a, b) => (a - b));
    miniArr.pop();
    const maxArr = arr.slice().sort((a, b) => (a - b));
    maxArr.shift();
    let miniSum = miniArr.reduce((a, b) => {return a + b;}, 0);
    let maxSum = maxArr.reduce((a, b) => {return a + b;}, 0);
    console.log( `${miniSum} ${maxSum}` );
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    miniMaxSum(arr);
}

console.log(miniMaxSum([1,2,3,4,5]));