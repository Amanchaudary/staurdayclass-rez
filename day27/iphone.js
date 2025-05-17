// for ac button for delete all
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
let display=document.getElementById('display')
display.value=display.value+value
}

function calculate(){
  const display=document.getElementById('display')
  try {
    display.value=eval(display.value)
    // if(display.value==="Infinity"||display.value==="-Infinity"){
    //   display.value='undefined'
    // }
  //  else if(display.value="-Infinity"){  
  //     display.value="undefined"
  //   }

  // by switch statement  key value ma use grxa
switch (display.value) {
  case "Infinity":
    display.value='undefined'
  case "-Infinity":
     display.value='undefined'
    break;
    default:
      break;
}  

  } catch (error) {
    display.value="Error"
  }
}

