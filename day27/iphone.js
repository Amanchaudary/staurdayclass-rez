function clearAll() {
  const display = document.getElementById('display');
  console.log(display);
  display.value =""
}

// substring function==> String vittra ko string ko meaing ho
// slice ==> tukra garna use garinxa
// let num1="12345"
// const res=num1.slice(0,-1)
// console.log(res);

/* 
delete last value by using slice function
function deleteOneword(){
   let display= document.getElementById('display')
   display.value=display.value.slice(0,-1)
} */

// delete last vlaue by using pop function
function deleteOneword(){
let  display=document.getElementById('display')
let displaychars=Array.from(display.value)
displaychars.pop()
// 2ota value join garna use garinxa
display.value=displaychars.join('')
}

function addNumber(value){
 console.log(value);
}
