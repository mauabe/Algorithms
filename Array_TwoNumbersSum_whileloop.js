// function twoNumberSum(array, targetSum) {
// 	const result = [];
// 	for(let i=0; i<array.length-1; i++){
// 		for (let j=i+1; j<array.length; j++){
// 			if(array[i]+array[j] === targetSum){
// 				result.push(array[i], array[j]);
// 				result.sort((a,b) => (a-b));
// 			}
// 		}
// 	}
//   return result;
// }

function twoNumberSum(array, targetSum) {
		//MAKE pointer to lower side  //MAKE pointer to upper side
		//WHILE lower < upper, increase lower or decrease upper if sum is higher
		//or lower than target.
		array.sort((a, b) => a - b);
		let lower = 0;
		let upper = array.length -1;
		while(lower < upper){
			let current = array[lower] + array[upper];
			if(current === targetSum){
				return [array[lower], array[upper]];
			}
			else if(current < targetSum){
				lower++;
			}
			else if(current > targetSum){
				upper--;	
			}
		}
	return [];
}



console.log(twoNumberSum([-4, 7, -1, -6, 3, 8, -2],10));