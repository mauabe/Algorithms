
// Function Methods

// Properties of a function object 
function fun() {
};

const fun2 = () => {
}
console.log(Object.getOwnPropertyNames(fun.__proto__));
console.log(Object.getOwnPropertyNames(().__proto__))

