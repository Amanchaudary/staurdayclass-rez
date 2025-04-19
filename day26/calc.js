// add
function addNumber(){
    let num1=document.getElementById('num1').value
    // convert string into number
    let num1convert=parseInt(num1)
    let num2=document.getElementById('num2').value
    // convert string into number
    let num2convert=parseInt(num2)
    let result=num1convert+num2convert
    let b=document.getElementById('result')
    b.textContent=result
}
// substrct
function substract(){
    let num1=document.getElementById('num1').value
    // convert string into number
    let num1convert=parseInt(num1)
    let num2=document.getElementById('num2').value
    // convert string into number
    let num2convert=parseInt(num2)
    let result=num1convert-num2convert
    let b=document.getElementById('result')
    b.textContent=result
}
// multiple
function multiple(){
    let num1=document.getElementById('num1').value
    // convert string into number
    let num1convert=parseInt(num1)
    let num2=document.getElementById('num2').value
    // convert string into number
    let num2convert=parseInt(num2)
    let result=num1convert*num2convert
    let b=document.getElementById('result')
    b.textContent=result
}
// devide
function devide(){
    let num1=document.getElementById('num1').value
    // convert string into number
    let num1convert=parseInt(num1)
    let num2=document.getElementById('num2').value
    // convert string into number
    if(num1convert===0){
        document.getElementById('result').textContent="cannot devide"
    }
    else{
        let num2convert=parseInt(num2)
        let result=num1convert/num2convert
        let b=document.getElementById('result')
        b.textContent=result
    }
    }