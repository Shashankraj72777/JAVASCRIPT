const a = new String("Shashank");   // string object.
const b = String("Shashank");   // string primitive.

console.log(a === "Shashank");  // it return false (Here object are compared by reference).
console.log(a == "Shashank");  // it return true.

console.log(a instanceof String); // it gives true because a is String object.
console.log(b instanceof String);  // it gives false because b is primitive String, not an object.

console.log(typeof a); // it is object. 
console.log(typeof b);  // it is string.
