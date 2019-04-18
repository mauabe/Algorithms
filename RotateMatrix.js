/*
Rotate Matrix
Write a function that rotates a NxN matrix 90 degrees clockwise.
A matrix, also called a 2-D array, is simply an array of arrays of values.

2x2 MATRIX EXAMPLE:

[ [1, 2],
[3, 4] ]

Rotated:

[ [3, 1],
[4, 2] ]

Examples
Input	Output
matrix:
[ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, "A", "B", "C" ], [ "D", "E", "F", "G" ] ]	[ [ "D", 9, 5, 1 ], [ "E", "A", 6, 2 ], [ "F", "B", 7, 3 ], [ "G", "C", 8, 4 ] ]
matrix:
[ [ 1 ] ]	[ [ 1 ] ]
matrix:
[ [ 1, 2 ], [ 3, 4 ] ]	[ [ 3, 1 ], [ 4, 2 ] ]
matrix:
[ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]	[ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

*/


function rotateMatrix (matrix) {
  let newMatrix = [];
  for (let j = 0; j < matrix[0].length; j++){
    let subMatrix = [];
    for (let  i =  matrix[0].length-1; i >= 0 ; i--){
      subMatrix.push(matrix[i][j]);
    }
   newMatrix.push(subMatrix);
  }
  return newMatrix;
}