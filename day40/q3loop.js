// 3print all even numbers upto50
for (let i = 0; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// // anoter way
function even(start,end){
  for (let i = start; i <= end; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
}
even(1,50)
// or
for(let i=0;i<=50;i=i+2){
  console.log(i);
}
