//  function banaune tarika 3 types
// method 1 name function
function hello(){
    console.log("hello");
}

// method2 anonymous or no name function ,function aslai kunai value vitra save garer
//  raknu parxa asma function navayakole call kasari garne garda mildain so let ma save garna parxa
let hello2=function(){
    console.log("hello 2");
}
// method3 arrow function arrow function chai anoymous function pani ho 
let hello3=()=>{
 console.log("hello 3");
}
// call garne tarika hello() , hello2(), ()sabai lekna parxa
hello()
hello2()
hello3()

// return keyword  yo keyword le chai j value xa tyo value call gareko function ma gayar basxa
function add(num1, num2){
    return num1+num2
}
let result1=add(5,6)
console.log(result1);

// substract
function sub(num1, num2){
    return num1-num2
}
let result2=sub(10,2)
console.log(result2);

// multifly
function mul(num1, num2){
    return num1*num2
}
let result3=mul(10,2)
console.log(result3);

// devide
function div(num1, num2){
    return num1/num2
}
let result4=div(10,2)
console.log(result4);

// same code with anonymous function
console.log("anonymous function start");
add
 let add2=function(num1, num2){
    return num1+num2
}

const a =add2(100,200)
console.log(a);
// subtract
let sub2=function(num1 ,num2){
    return num1-num2
}
const b=sub2(10,2)
console.log(b);

// multiply
let mul2=function(num1, num2){
    return num1*num2
}
const c=mul2(10,2)
console.log(c);

// multiply
let div2=function(num1, num2){
    return num1/num2
}
const d=div(10,2)
console.log(d);

// same code with arrow function
console.log("arrow function start");
// add
let add3=(num1,num2)=>{
    return num1+num2
}
let x=add3(5,6)
console.log(x);
 
