////////////////////////////
// RANSOM NOTE
////////////////////////////
  
// Given two strings, write a function that determines if you can build the second string with the characters of the first
// If you have more than one of a certain character in the second string, you must have at least as many of those characters in the first
// Imagine a ransom note (second string) constructed from cut-out letters from a magazine (first string). Except you also need to cut out spaces for some reason.
// Capitalization matters!
  
function ransomNote(magazine, message) {
  const storage = {};
  for(let char of magazine){
    if(!storage[char]){storage[char] = 1;}
    else storage[char]++; 
  }

  for(let letter of message){
    if(!storage.hasOwnProperty(letter) || storage[letter] <= 0){return false;}
    else storage[letter]--;
  }
  return true;
}
  
  
  function ransomTests() {
    console.log(ransomNote('this is a string!!!', 'is this a string!!'), ' -> true');
    console.log(ransomNote('this is a string!!', 'this is a string!!!'), ' -> false');
    console.log(ransomNote('THIS IS A STRING', 'this is a string'), ' -> false');
    console.log(ransomNote('this is a string', ''), ' -> true');
  }
  
  // ransomTests() // Uncomment to check code!
  
  