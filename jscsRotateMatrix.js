// //rotateGrid

// rotateGrid([[1,2,3],
//             [4,5,6],
//             [7,8,9]]) // returns [[7,4,1],
//                                   [8,5,2],
//                                   [9,6,3]]



var array = [[1,2,3], [4,5,6], [7,8,9]];

function transposeArray(array){
	const newArray = [];
		for(let i = 0; i < array.length; i++){
			newArray.push([]);
		}
	for(let i = 0; i < array.length; i++){
		for(let j = 0; j < array[i].length; j++){
			newArray[j].push(array[i][j]);
		};
	};
	return newArray;
}
console.log(transposeArray(array));


function rotateArray(array){
  array.reverse();
	const newArray = [];
	for(let i = 0; i < array.length; i++){
	  newArray.push([]);
  }
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      newArray[j]. push(array[i][j]);
    }
  }
	return newArray;
};

console.log(rotateArray(array));

    