//CracklePop
//Write a program that prints out the numbers 1 to 100 (inclusive). 
//If the number is divisible by 3, print Crackle instead of the number. 
//If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print CracklePop. 


const cracklePop = function(n){
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 !== 0){console.log('Crackle');}
    else if(i % 5 === 0 && i % 3 !== 0){console.log('Pop');}
    else if(i % 3 === 0  && i % 5 === 0){console.log('CracklePop');}
    else if(i % 3 !== 0  && i % 5 !== 0){console.log(i);}
  }
}
console.log(cracklePop(100));