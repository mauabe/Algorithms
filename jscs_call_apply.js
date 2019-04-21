
// call()

// Remember constructors?
function Product(name, price) {
  this.name = name;
  this.price = price;
  console.log(this);
}

const produce = new Product('staples', 14);
const produce2 = Object.create(Product)
console.log(produce2);
console.log(produce);
function Product(name, price) {
  return {
    name: name,
    price: price
  }
}

function Food(name, price) {
  // What is this?
  console.log(this);
  Product.call(this, name, price);
  // this.name = name;
  // this.price = price;
  this.category = 'food';
}

const cheese = new Food('cheese', 5);
console.log(cheese.name);


// apply() and ...arguments

//Arguments Object is an array-like object

// Return a function that console.logs a callback function with an
// unknown number of arguments

function funFactory(callback) {
  return function() {
    // 'this' does not matter
    console.log(callback.apply(null, arguments));
    // Use the ... spread operator
    console.log(callback(...arguments));
  }
}

function fun1(a, b) {
  return a + b;
}

function fun2(a, b, c, d) {
  return a * b * c * d;
}

function fun3() {
  return 'Coding is fun!';
}

const fun1Apply = funFactory(fun1);
fun1Apply(2, 3);

const fun2Apply = funFactory(fun2);
fun2Apply(1, 2, 3, 4);

const fun3Apply = funFactory(fun3);
fun3Apply();
funFactory(fun1)(1, 2);
funFactory(fun2)(1, 2, 3, 4);
funFactory(fun3)();

