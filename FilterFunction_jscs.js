/*
Challenge 1: Select
Define a function select which takes two arguments, an array and a callback function. The callback function can be considered a test in that it will return either true or false depending on the input. select will iterate/loop through the array and pass each array element to the callback as an argument.
If the callback called on a certain value returns true, the original value (the input to the callback) is pushed to a new array. select will return this new array.
*/

//Using FILTER
// const select = function(array, callback){
//   let newArray = array.filter(callback); 
//   return newArray;
// }

//using forEach
//const select = function(array, callback){
//   const newArray = [];
//   array.forEach(elem =>{
//    if(callback(elem) === true) {
//      newArray.push(elem);
//    }
//   }); 
//   return newArray;
// }

//Using for loop
const select = function(array, callback){
  const newArray = [];
  for (let i = 0; i < array.length; i++){
    if (callback(array[i]) === true){
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const arr = [1, 2, 3, 4, 5];
const isEven = n => n % 2 === 0;
console.log(select(arr, isEven)); // should log: [2, 4]
console.log('Select Function is passing')