
// PARAMETERS vs. ARGUMENTS

// a and b are parameters
function addNums(a, b) {
  return a + b;
}

// 1 and 2 are arguments
const c = addNums(1, 2);
console.log(c);
const d = addNums(1, 2, 3); // That's too many!
console.log(d);
console.log(c === d)
