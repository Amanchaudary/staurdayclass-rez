// slice and splice method
let arr;
let nums=[16,1,33,1,4,5]
// slice method
// slice function ==>asle array lai tutra tutra gari new array dinxa 
// (1,5) vaneko index 1 bata start ra 5 ma end tar 5 value aaudain
let numSlice=nums.slice(1,5)
console.log(numSlice);
// nums lai print garda pheri tei aaauxa vanna matlab slice le array lai effect gardian
console.log(nums);
// splice method
// (1,5)==> asle 1 deko 5 samma ko value delete garxa ra delete value ko new array dinxa
// asle first array lai effect gari first array ko value change garxa
let arrSplice=nums.splice(1,5)
console.log(arrSplice);
// new value change
console.log(nums);