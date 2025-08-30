
// const cart = [
//     { id: 1, name: 'Tshirt', price: 1000 },
//     { id: 2, name: 'iphone', price: 2000 },
//     { id: 3, name: 'chasma', price: 500 },
// ];
 
// const totalprize=cart.reduce((acc,product)=>(acc+product.price),0) 
// console.log(totalprize);

// const totalprize1=cart.reduce(function(acc,product){
//     return acc+product.price
// },0) 
// console.log(totalprize1);

const cart = [
    { id: 1, name: 'Tshirt', price: 1000 },
    { id: 2, name: 'iphone', price: 2000 },
    { id: 3, name: 'chasma', price: 500 },
];
// by using reduce mthod
// note 0 chai starting vaule ho
let sanumaya=cart.reduce((acc,product)=>{
return (acc+product.price)
},0)
console.log(sanumaya);

// by using forloop
let total=0;
for(let i=0;i<cart.length;i++){
total+=cart[i].price
}
console.log(total);

// by using foreach
let totaltwo=0
let totalprize=cart.forEach((obj)=>{
    console.log(obj);
    totaltwo += obj.price
}
)
// forloop le return gardaina so totalprize navayar totaltwo rakne ho
console.log(totaltwo);