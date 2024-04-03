let intro = new String () // String declaration 
let name = "Manthan"
let age = 21

intro = `Hello My Name is ${name} and my age is ${age}`

console.log(intro);

let sname = "Manthan-Sharma"

console.log(sname.__proto__);
console.log(sname.length);
console.log(sname.toUpperCase());
console.log(sname);
console.log(sname.charAt('3'));

let subname = sname.substring(2, 5)

let revname = sname.substring( -4, 7)

console.log(revname);

const url = "https://github.com/manthans16/JS-Projects"

console.log(url.replace('-', '|'));
console.log(url.includes('JS'));

console.log(sname.split('-'));  