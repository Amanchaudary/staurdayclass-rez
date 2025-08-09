// forof == array ra string ko lagi use garinxa 


//1for array
const items=["book","table","chair","kite"]
for(i=0;i<items.length;i++){
    console.log(items[i]);
}

// another way
console.log("forin using");
// const item=items[i]
for (const i of items) {
    console.log(i);
}

// 2 for string
 const str="hello programmer"
 for (const letter of str) {
    console.log(letter);
 }