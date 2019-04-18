/*
Bubble Sort
Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

If the first element is greater than the second element, it swaps the two.
It then compares the second to the third, and the third to the fourth, and so on.
In this way, the largest values ‘bubble’ to the end of the array.
Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
Implement a function that takes an array and sorts it using this technique.

NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).
*/

//USING A FOR LOOP

const bubbleSort = function(array) {
	let bucket;
	let isSorted = false;
	for(let i = 0; i < array.length && !isSorted; i++){
		isSorted = true;
		for(let j = 0; j < array.length - i; j++){
			if(array[j] > array[j + 1]){
				bucket = array[j + 1];
				array[j + 1] = array[j];
				array[j] = bucket;
				
				isSorted = false
			}
		}
	}
	return array;
}

// USING WHILE LOOP

function bubbleSort(array){
	let isSorted = false;
	let counter = 0;
	while (!isSorted){
		isSorted = true;
		let bucket;
		for(let i = 0; i < array.length - 1 - counter; i++){
			if(array[i] > array[i+1]){
				bucket = array[i+1];
				array[i+1] =  array[i];
				array[i] = bucket;			
			}
			isSorted= false;
		}
		counter++;
	}
	return array;
};

