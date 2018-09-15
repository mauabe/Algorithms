function findThreeLargestNumbers(array) {
	const result = [];
	
	for(let elem of array){ 
		if(result[0] === undefined){result[0] = elem}
		else if(result[1] === undefined){
			if(elem >= result[0]){result[1] = elem}
			else if(elem < result[0]){result[1] = result[0]; result[0] = elem}
		}
		else if(result[2] === undefined){
			if(elem >= result[1]){result[2] = elem}
		else if(elem < result[1]){
				if(elem >= result[0]){result[2] = result[1]; result[1] = elem}
				else if(elem < result[0]){result[2] = result[1]; result[1] = result[0]; result[0] = elem}
			}
		}

		else if(elem >= result[2]){result[0] = result[1]; result[1] = result[2]; result[2] = elem}
		else if(elem < result[2] && elem >= result[1]){result[0] = result[1]; result[1] = elem}
		else if(elem < result[1] && elem >= result[0]){result[0] = elem}
    else if(elem < result[0]){ continue };
  }
	return result;	
}

//console.log(findThreeLargestNumbers([2, 2, 88, 4, 76]));