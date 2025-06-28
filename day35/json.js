// <!--  json==> comunication garne  tarika jsle data chai send garxa -->
//  //  <!-- json ma key ra value both string  ("")ma hunxa -->
// <!-- object change into json-->
  const obj={
    name:"hello",
    age:25
  }
  // change object into json by using stringify() and json type become string
const j=JSON.stringify(obj)
console.log(j);
console.log(typeof j);/*  type string  show garxa */
console.log(j.split(""));
console.log(j.slice(9,14));

//  json change into object by using parse() method and type become object
let jobj=JSON.parse(j)
console.log(jobj); /* type object show garxa */
console.log(jobj.name);


// compare between json and object
  /* const obj1={
    name:"hello",
    age:25
  }
  const obj2={
    "name":"hello",
    "age":25
  }
  console.log(typeof obj1);
  console.log(typeof obj2); */