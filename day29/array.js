// array and arraylist javaScript ma same hunxa
// array==> collection of data --> [] key use
// browser ko console ma gai prototype click garda method haru show garxa
// browser ma debug garna  source file ma jane 

// []==>array
// {}==>object

// method1
const arr=["a","b","c","d","banana",null,true,1,2,3,{name:"hello world"}]
// method2
const arrObj=new Array("hello",1,2,3,4,5,)
// value chaida
console.log(arrObj[1]);
console.log(arrObj[2]);
console.log(arrObj[3]);
// 2 ko tham ma 6 hallna parda
arrObj[2]=6
console.log(arrObj);

// some methods of array
// value chake function
const ret=arrObj.at(5)
console.log(ret);
// push function ==> last ma vaule push garne
const pus=arrObj.push(6)
console.log(arrObj);
// pop method==> array ko last value nikaler dinxa
const popElement=arrObj.pop()
console.log(arrObj);
console.log(popElement);
// split function==>asle sabai lai tukta tukra banaidinxa
const splitElement=arrObj[0].split(",")
console.log(splitElement);


// string change in array
const a=new String("aman")
// changing method by ofmethod
const amanaof=Array.of(a)
console.log(amanaof);
// changing method by from method
const amanform=Array.from(a)
console.log(amanform);























