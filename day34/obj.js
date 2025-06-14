// object creating method
const b = new Object()
b.name = "sagar"
console.log(b);

const obj = {
    name: "sagar",
    age: 22,
    profession: "Hacker",
    22: "adress",
    adress: {
        street: "nakano",
        city: "kobe"
    },
    hobbies: ["music", "racing"],
    hello: function () {
        console.log("helllo word");
        console.log(this.name);
        // arrow function ma this key use hudain
    }

}
console.log(obj);
const h = obj.hello()
console.log(h);