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

console.log(typeof nameObj);
console.log(typeof herosArr);