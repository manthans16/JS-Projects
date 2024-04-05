const marvel = ["Thor", "Ironman", "Hulk"]
const dc = ["Superman", "Flash", "Batman"]
// marvel.push(dc)

console.log(marvel);

// const mdc = marvel.concat(dc)

// console.log(...marvel, ...dc);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_a_n = another_array.flat(1)

console.log(another_array);
console.log(real_a_n);