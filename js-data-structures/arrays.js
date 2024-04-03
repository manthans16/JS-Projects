const myArr = [1,2,3,4,5,6,7,8,9]
const names = ["Yash", "Shiv", "Simran"]
const myArr2 = new Array(11,22,33,44,55)

console.log(myArr);
console.log(myArr2);

//Array Methods

/*
1. To add values in an arrray we use push()
2. To delete values we use pop()
*/ 

myArr.push(11)
console.log(myArr);
myArr.pop()

myArr.unshift(101) //Not a Good practice but usable, enter value at 1st
myArr.shift() //removes 1st value


console.log(myArr.includes(4));

//slice, Splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("c", myArr);

console.log(myn2);

