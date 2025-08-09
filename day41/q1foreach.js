// print the name using foreach function and  array function
const pgs=[
    "aman","sagar","gokul","niranjan","sanu","sandeep"
]
// arrow function
pgs.forEach(name => {
    console.log(name);
});

// foreach function
// callback function use garxa
console.log("using foreach function");
function valueofarray(name){
    console.log(name);
}
pgs.forEach(valueofarray)