Array to Object


function transformFirstAndLast(array) {
  var obj = {};
  obj[array[0]] = array[array.length-1];
  return obj;
}


function fromListToObject(array) {
  var newObj ={};
  for (let i = 0; i <array.length; i++){
    newObj[array[i][0]] = array[i][1];
  }  
  return newObj;
}

[  [  [x:y]  [x:y]  [x:y]  [x:y]     ]    ]


function transformEmployeeData(employeeData) {
   var arr = [];
   for(let i = 0; i < employeeData.length; i++){
      var newObj = {};
      for(let j = 0; j< employeeData[i].length; j++){
         newObj[employeeData[i][j][0]] = employeeData[i][j][1];
      }
      arr.push(newObj);;
   }
   return arr;
}

