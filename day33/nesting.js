const fruits=["apple","banana","orange"]
const veggie=["cabbage","potato","spinach","lettuce"]
// push gareko 1 array vitra arko array
fruits.push(veggie)
console.log(fruits);
// element target garda
let num1Element=fruits[1]
console.log(num1Element);
const cabb=fruits[3][0]
console.log(cabb);

// spread operator
const newSpread=[...fruits,...veggie]
console.log(newSpread);

// string change into array
const h="hello"
// method 1 to make array
const arr=h.split("")
console.log(arr);
// method 2 to make array
const arr2=Array.from(h)
console.log(arr2);