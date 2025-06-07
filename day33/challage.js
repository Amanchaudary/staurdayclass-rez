// chanllage1
// arr=[1,2,3,4,5]
//result=[6,5,4,3,2,1,0]

//challage2
// arr1=[1,2,3,4,5] arr2=[5,6,7,8,9]
// result=[1,2,3,4,5,6,7,8,9,10]

// challange1
let arr=[1,2,3,4,5]
arr.push(6)
console.log(arr);
let a=arr.reverse()
console.log(arr);
a.push(0)
console.log(a);
// challage2
const arr1=[1,2,3,4,5]
const arr2=[5,6,7,8,9]
arr1.pop()
const all=[...arr1,...arr2]
console.log(all);
