const score = 100
console.log(typeof score);

const balance = new Number(100)
console.log(balance.toFixed(1));

const cost = 123.8757

console.log(cost.toPrecision(3));

const zeros = 10000000

console.log(zeros.toLocaleString('en-IN'));

// ********************** MATHS ************************ 

console.log(Math);
console.log(Math.abs(-7)); 
console.log(Math.round(4.6));
console.log(Math.ceil(7.4));
console.log(Math.floor(7.7));
console.log(Math.min(4,6,56,5,6));
console.log(Math.max(4,6,56,5,6));
console.log(Math.random(1,10));
console.log(Math.random(1,10)*10 + 1);
console.log(Math.floor(Math.random(1,10)*10 + 1));


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
