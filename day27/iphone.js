function clearAll() {
  const display = document.getElementById('display');
  console.log(display);
  display.value =""
}

// slice ==> tukra garna use garinxa
let num1="12345"
const res=num1.slice(0,-1)
console.log(res);
// substring function==> String vittra ko string ko meaing ho
function deleteOneword(){
   let display= document.getElementById('display')
   display.value=display.value.slice(0,-1)
}