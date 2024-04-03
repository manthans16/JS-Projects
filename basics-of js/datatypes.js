//Premtive

const score = 100
const scoreValue = 100.3

const id = Symbol('123')
const id1 = Symbol(123)
const id2 = Symbol('123')

 console.table( id + id2);

 console.log(id === id1); //false
let BigInt = 2n
console.log(typeof BigInt);
// String, Number, Boolean, null, undefined, Symbol, BigInt

//Reference (Non Premitive Types ) 

//Array, Objects, Functions

const herosArr = ["Hulk", "Antman", "Thor" ]

let nameObj = {

    name:"Yash",
    age:"22"

}

/*
@manthans16 ➜ /workspaces/JS-Projects (main) $ git config pull.rebase false
@manthans16 ➜ /workspaces/JS-Projects (main) $ git pull origin main
*/

// console.log(typeof nameObj);
// console.log(typeof herosArr);

// Stack (Premitive), Heap (Non-Premitive)

let name = "Yash"
let name1 = name

console.log(name);
console.log(name1);
// Yash
// Yash

name1 = "Manthan"

console.log(name1);
console.log(name);
// Manthan
// Yash

let details1 = {

    name:"Yash",
    age:"22q"

}

let details2 = details1

console.log(details1.name);
console.log(details2.name);
// Yash
// Yash
details2.name = "Manthan"

console.log(details1.name);
console.log(details2.name);

// Manthan
// Manthan