function twoNumberSum(array, targetSum) {
	const result = [];
	for(let i=0; i<array.length-1; i++){
		for (let j=i+1; j<array.length; j++){
			if(array[i]+array[j] === targetSum){
				result.push(array[i], array[j]);
				result.sort((a,b) => (a-b));
			}
		}
	}
  return result;
}