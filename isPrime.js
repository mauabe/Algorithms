////////////////////////////
//     IS PRIME
////////////////////////////

// Modify the function so that it returns whether a number is prime

function isPrime(num) {
  // 	let max = Math.min(Math.ceil(num ** 0.5), num-1);
  let max = num - 1;
  if (num === 1){return false;}
  
  for(let i = 2; i <= max; i++){
    if (num % i === 0){return false;}
  }
  return true;
}
  
// Extension: solve this in 0(logn) time

// primeTests() // Uncomment to check code!
function primeTests() {
  console.log(isPrime(1), ' -> false');
  console.log(isPrime(2), ' -> true');
  console.log(isPrime(3), ' -> true');
  console.log(isPrime(17), ' -> true');
}
  
  