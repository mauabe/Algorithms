// The ARGUMENTS keyword 

function noArgs() {
  console.log(arguments);

  // Can access data like an array
  console.log(arguments[0]);

  // Array methods
  console.log('Array', Object.getOwnPropertyNames([].__proto__));

  // arguments methods
  console.log('arguments',Object.getOwnPropertyNames(arguments.__proto__));
}

const noArgsArrow = () => {
  console.log(arguments);
}

// noArgs();
noArgs(1);
noArgs(1, 2);
noArgsArrow();

// Rewrite addNums to take an unknown number of arguments

function addNums() {
//   // Why can't I use reduce?
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(addNums(1, 2, 3)); 
console.log(addNums(1, 2, 3, 4, 5)); 
