// ARROW FUNCTIONS

function sum(a, b) {
  return a + b;
}
const sumArrow = (a, b) => a + b;
console.log(sum(1, 2));
console.log(sumArrow(1, 2));


//SPREAD OPERATORS

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2};

console.log(obj3);

function getMax() {
  return Math.max.apply(null, arguments);  
}

function getMax() {
  return Math.max(...arguments);
}
console.log(getMax(1, 5, 7)); 


// REST OPERATOR

function sum(...nums) {
  console.log(nums);
  // nums is an array!
  return nums.reduce((sum, num) => {
    console.log('sum', sum);
    return sum + num;
  });
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 6));

// 6 digit split: returns sum of all the digits of a 6 digit number

function addDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = (num - num % 10) / 10;
  }
  return sum;
}

function sixDigitSum(num) {
  let sum = 0;
  const numStr = num.toString();
  console.log(numStr);
  for (let i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return sum;
};

console.log(sixDigitSum(123456));

