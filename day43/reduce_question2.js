//print by for, forEach ,forin, forof ,reduce
const carts = [
    { id: 1, name: 'speaker', price: 50 },
    { id: 2, name: 'bluetooth', price: 100 },
    { id: 3, name: 'glass', price: 200 },
    { id: 4, name: 'laptop', price: 300 },
];
// by for loop
let total1=0
for(i=0;i<carts.length;i++){
    total1 +=carts[i].price
} 
console.log(total1);
// by foreach loop
let total2=0;
let sum=carts.forEach((obj)=>{
total2+=obj.price
})
console.log(total2);

// by using reduce
let total5=carts.reduce((acc,product)=>{
return acc+product.price
},0)
console.log(total5);

// by using forof ==> forof ma product hunxa
function prize(){
    let total4=0
    for (const product of carts) {
        total4+=product.price      
    }
    console.log(total4);
}
prize()

// by using forin ma index hunxa
function prize2(){
    let total5=0
    for(const index in carts){
        total5+=carts[index].price
    }
    console.log(total5);
}
prize2()
