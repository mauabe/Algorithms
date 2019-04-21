// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

function multiMap(arrVals, arrCallbacks) {
  const mapObj = {};

  arrVals.forEach(val => {
    mapObj[val] = [];
    arrCallbacks.forEach(cb => {
      mapObj[val].push(cb(val));
    })
  });

  // for(let i = 0; i < arrVals.length; i++){
  //   mapObj[arrVals[i]] = []; 
  //   for(let j = 0; j < arrCallbacks.length; j++){
  //     const result = arrCallbacks[j](arrVals[i]); 
  //     mapObj[arrVals[i]].push(result);
  //   }
  // }
  return mapObj;
}

const double = a => 2 * a;
const half = a => a / 2;
const plusTen = a => a + 10;

const values = [1, 2, 3];
const callbacks = [double, half, plusTen];

const output = multiMap(values, callbacks);
console.log(output);
output = {
 1: [2, 0.5, 11],
 2: [4, 1, 12],
 3: [6, 1.5, 13]
}

