// // math==> yo chai static vayar new key chaidain
// let ma=Math.random()
// console.log(ma);
// // const d=Date()
// // console.log(d);
// // const d1=new Date()
// // console.log(d1);

// // some function
// // abusulute function==> nagative value lai ni positive banauxa eg age haru ko lagi
// let m=Math.abs(-9)
// console.log(m);
// // rouding function ==> rounding garxa decimal vaule lai
// let m1=Math.round(4.555)
// console.log(m1);
// // pow function==> 2 ota value linxa ra power ma banxa
// let m3=Math.pow(2,3)
// console.log(m3);


// problem random 1-50 and random 1-100 sum ,devide,multiple
let ran1=Math.floor(Math.random()*50)+1  /* 0to49 +1 */
console.log(ran1);
let ran2=Math.floor(Math.random()*100)+1
console.log(ran2);
// adding
function add(ran1,ran2){
    return ran1+ran2
}
let addNumber=add(ran1,ran2)
console.log(addNumber);
// substractiong
function sub(ran1,ran2){
    return ran1-ran2
}
let subNumber=sub(ran1,ran2)
console.log(subNumber);

function devide(ran1,ran2){
    return ran1/ran2
}
let devideNumber=Math.floor(devide(ran1,ran2))
console.log(devideNumber);