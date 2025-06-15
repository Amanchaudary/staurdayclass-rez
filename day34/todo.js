// object 1
const todo1 = new Object()
todo1.name = "hello"
todo1.id = 1
todo1.completed = true
//  object 2 
const todo2 = new Object()
todo2.name = "hello"
todo2.id = 1
todo2.completed = true
// object 3 ma object 1 ra object 2 gari xareko
const todo3 = { ...todo1, ...todo2 }
console.log(todo3);
const obj1 = {
    a: 1,
    b: 2
}
const obj2 = {
    c: 8,
    d: 9,
    f: {
        t: 4,
        u: 5
    }
}

const obj3 = { ...obj1, ...obj2 }
console.log(obj3);
const a = Object.keys(todo1)
const b = Object.values(todo1)
const c = Object.entries(todo1)
const d = todo1.hasOwnProperty("name")
// console.log(d);
//destructuring
const todo4 = {
    id: 1,
    name: "hello",
    complete: true,
    addresss: {
        street: "nakano",
        city: "kobe"
    }
}
const
    { name,
        complete,
        id
    }
        = todo4
// console.log(todo4);
 
const arr = ["chicken", "beef", "beer", "chuhai", "lassi"]
const [first, , , , lassi] = arr
console.log(lassi);