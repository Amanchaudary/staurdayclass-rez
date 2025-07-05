// for loop
/*  starting point
condition
increment
 */

/* i++ ==> increment by 1
*/
for (let i = 0; i< 10; i++) {
console.log(i);  
}
// example
let names=["hello","world","js","java"]
for (let i=0 ; i<names.length;i++){
    console.log(names[i]);
}
// nested array
/* 1*1=1
1*2=2
1*3=3 */

for (let i = 1; i <= 10; i++) {
console.log("table of "+i);    
for (let j = 0; j <=10; j++) {
console.log(`${i}*${j}=${i*j}`);
}
}