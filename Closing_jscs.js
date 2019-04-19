// Challenge Part 1

// Create a function called addingToX that accepts a number as an argument.
// It will return the sum of every integer from 1 up to and including the input number.

// addingToX(0) will return 0
// addingToX(1) will return 1
// addingToX(2) will return 3
// addingToX(3) will return 6
// addingToX(4) will return 10
// addingToX(5) will return 15
// addingToX(10) will return 55

function addingToXPart1(number) {
  let x = number * (number + 1) / 2;
  return x;
}
  
  // TESTS 
  // console.log(addingToX(1));  // 1
  // console.log(addingToX(2));  // 3
  // console.log(addingToX(3));  // 6
  // console.log(addingToX(10)); // 55
  
  
  // Challenge Part 2
  
  // Write a function arrayToX that accepts a number as an argumment.
  // It will return an array where each element is the return value of calling addingToX
  // on each integer from 1 up to and including the input number.
  
  // arrayToX(1) will return [1]
  // arrayToX(2) will return [1, 3]
  // arrayToX(3) will return [1, 3, 6]
  // arrayToX(4) will return [1, 3, 6, 10]
  // arrayToX(5) will return [1, 3, 6, 10, 15]
  function addingToX(number) {
    if(number === 0){return 0;}
    else return number += addingToX(number - 1);
  }
  
function arrayToX(number) {
  const result = [];  
  for (let i = 0; i < number; i++){
    result.push(addingToX(number - i));
  }
  return result.reverse();
}

  // TESTS
  console.log(arrayToX(1));   // [1]
  console.log(arrayToX(2));   // [1, 3]
  console.log(arrayToX(3));   // [1, 3, 6]
  console.log(arrayToX(10));  // [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]