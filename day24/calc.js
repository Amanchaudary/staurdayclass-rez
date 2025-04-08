function add(){
    const result=num1+num2
    return result
}
const addhtml=document.getElementById("add")
console.log(addhtml);
const  result=add(1,2)
addhtml.textContent=result
