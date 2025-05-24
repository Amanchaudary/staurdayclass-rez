// const dev='developer'
// // problem 1 'developer' changeinto 'DevelopeR'
// const upcase=dev[0].toUpperCase()+dev.slice(1,8)+dev[8].toUpperCase()
// console.log(upcase);

// // 2another way
// const d=dev.substring(0,1) /* de= d*/
// console.log(d); 
// const dcap=d.toUpperCase()
// console.log(dcap);

// problem2
console.log("problem2");
function channgeFirstAndLast(str){
    let first=str[0].toUpperCase()
    console.log(first);

    let middel=str.substring(1,(str.length-1))
    console.log(middel);

    // let last=str.substring(str.length-1)
    // let lastCap=last.toUpperCase()
    let last=str[str.length-1].toUpperCase()
    return first+middel+last
}
const result=channgeFirstAndLast("developer")
console.log(result);
