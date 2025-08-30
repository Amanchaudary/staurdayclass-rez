const nums=[1,2,3,4,,5,6,7,8,,9,10]
const sum1=nums.reduce((a,c)=>(a+c))
console.log(sum1);

// // using forloop
let sum=0;
for(let i=0;i<nums.length-1;i++){
    sum=sum+i
}
console.log(sum);
