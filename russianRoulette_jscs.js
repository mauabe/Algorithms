/*
Challenge 2: Russian Roulette
Define a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string ‘click’ the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string ‘bang’. On every invocation after that, the returned function returns the string ‘reload to play again’.
*/

//CHALLENGE 2 - ADD CODE BELOW

const russianRoulette = function(n){
  let counter = 0;
  return function(){
    counter += 1;
    if(counter < n){return 'click';}
    else if(counter === n){return 'bang';}
    else {return 'reload to play again';}
  }
};
// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const play = russianRoulette(3);
console.log(play(1)); // should log: ‘click’
console.log(play(2)); // should log: ‘click’
console.log(play(3)); // should log: ‘bang’
console.log(play(4)); // should log: ‘reload to play again’
console.log(play(6)); // should log: ‘reload to play again’