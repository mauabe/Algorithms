function isPalindrome(string) {

	let pointer1 = 0;
	let pointer2 = string.length-1;
  
	//recursive solution //O(n)/O(n)
  // if(string.length <= 1){return true}
	// else if(string[pointer1] !== string[pointer2]){ return false }
  // // else { string = string.slice(1, -1);
  //   isPalindrome(string);
  // }
  
	//Iterative solution // O(n)/O(1)
	while(pointer1 < pointer2){
		if(string[pointer1] !== string[pointer2]){ return false }
		pointer1++;
		pointer2--;
	}
	return true
}
console.log(isPalindrome('annnnnnnnna'))
