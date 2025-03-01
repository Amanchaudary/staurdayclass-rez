// type concersion
let amn=Number("2")
console.log(amn);
console.log(typeof amn);


// false=0
// true=1
const res=false+true
const res2=true+true
console.log(res,res2)


// flase , 0, '' ,"" ,undefined ===> yo sabai fase ho

let res6=Boolean({})
let res7=Boolean('gokul')
console.log(res6);
console.log(res7);


const age=0
if(age){
    console.log("age is xero");
}
else{
    console.log("age is not 0");
}