const str = "Banagalore is beautiful city";
//using charAt() method
const length = str.charAt(str.length - 2);
console.log(length);

// using slice() method
const slice = str.slice(-2, -1);
console.log(slice);

// using at() method
const at = str.at(-3);
console.log(at);