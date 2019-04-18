/*
Challenge 3: nth Fibonacci
Define a function nthFibonacci that takes a number n and returns n's corresponding Fibonacci number.

Fibonacci series: 1, 1, 2, 3, 5, 8, 13, 21, 34 (each number is found by adding the previous two)
More Info: https://en.wikipedia.org/wiki/Fibonacci_number
*/

//Recursive solution
// function nthFibonacci(n){
//   if (n === 0 || n === 1) return 1;
//   return nthFibonacci(n-1) + nthFibonacci(n-2);
//   }

//Memoization solution with immediate execution
// const nthFibonacci = (function(){
//   const storage = {};
//   const f = function(n){
//     let value;
//     if (storage[n] === true){value = storage[n];}
//     else if (n === 0 || n === 1){value = 1;}
//     else {
//       value = f(n - 1) + f(n - 2);
//       storage[n] = value;
//     }
//     return value;
//   }
//   return f;
// })();

// Memoization 2
// const nthFibonacci = function (n){
//   const stor = {};
//   if(stor[n]){return stor[n];}
//   if(n === 0 || n === 1){ return 1;}
//   return stor[n] = nthFibonacci(n - 1) + nthFibonacci(n - 2);
// }


//Using While Loop
// const nthFibonacci = function(n){
//   let i = 1;
//   let a = 0;
//   let b = 1;
//   while(i <= n){
//     let sum = a + b;
//     a = b;
//     b = sum;
//     i++;
//     return sum;
//   }
// }

// Using For Loop and array
function nthFibonacci(n) {
  let array = [];
  for (let i = 0; i <= n; i++) {
    if(i === 0 || i === 1){ array.push(1)}
    else {array.push(array[i-1] + array[i-2]);}
  }
  return array[n];
}


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(nthFibonacci(1)); // should log: 1, the series starts with the second 1
console.log(nthFibonacci(2)); // should log: 2
console.log(nthFibonacci(3)); // should log: 3
console.log(nthFibonacci(4)); // should log: 5
console.log(nthFibonacci(12)); // should log: 233