/*
Common Characters
Write a function that accepts two strings as arguments, and returns only the characters that are common to both strings.

Your function should return the common characters in the same order that they appear in the first argument. Do not return duplicate characters and ignore whitespace in your returned string.

Example: commonCharacters('acexivou', 'aegihobu')

Returns: 'aeiou'
*/


var commonCharacters = function(string1, string2){
let array = [];

  for (let i = 0; i < string1.length; i++){
    for (let j = 0; j < string2.length; j++){
      if(string1.charAt(i) === string2.charAt(j)){
        array.push(string1[i]);
      }
    }
  } 

  array.filter( (el, index, arr) => arr.indexOf(el) === index);
  return array.join('');
  
}