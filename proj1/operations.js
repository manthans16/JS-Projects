// ******** Conversion *********//
let score 

console.log(typeof(score));

let valueInNum = Number(score)

console.log(typeof(valueInNum));
console.log(valueInNum);

let isLogedIn 

// 1 => "True"
// 0 => "False"
// "" => "False"
// "String" => "True"

let boolIsLoggedIn = Boolean(isLogedIn)

console.log(typeof isLogedIn);
console.log(typeof boolIsLoggedIn);
console.log(boolIsLoggedIn);

let sumNum = 33
let strSumNum = String(sumNum)

console.log(typeof strSumNum);
console.log(strSumNum);

//*********Operations*********//

let value = 3
let negValue = -value

console.log(value);
console.log(negValue);

let str1 = "Hello"
let str2 = " Yash"
let str3 = str1+str2

console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log(1 + "2" + 2);
console.log("1" + 2 + "2");
console.log("" + 2 + 2);

/*
12
12
122
32
122
122
22
*/

// console.log(2 + 2 * 2 % 3); => 3


// console.log(+true); =>1
// console.log(+false); =>0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let counter = 100

let pre, post

counter++
post = counter
console.log(post);
console.log(counter);
console.log(post);

++counter
pre = counter
console.log(counter);
console.log(pre);