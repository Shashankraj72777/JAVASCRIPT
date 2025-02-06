// Array.from()
console.log(Array.from("Raj"));  // [ 'R', 'a', 'j' ]
console.log(Array.from([6, 7, 8], (x) => x + x));  // [ 12, 14, 16 ]

// Array at()
const persons = ["Shashank", "Neetish", "Sakshi", "Deepesh"];
console.log(persons.at(3)); // Deepesh

// Array join()
console.log(persons.join(" * ")); // Shashank * Neetish * Sakshi * Deepesh

// Array pop()
console.log(persons.pop()); // Deepesh
console.log(persons); // [ 'Shashank', 'Neetish', 'Sakshi' ]

// Array push()
console.log(persons.push("Shreya")); // 4
console.log(persons);  // [ 'Shashank', 'Neetish', 'Sakshi', 'Shreya' ]

// Array shift()
console.log(persons.shift()); // Shashank
console.log(persons); // [ 'Neetish', 'Sakshi', 'Shreya' ]

// Array Unshift
console.log(persons.unshift("Atul")); // 4
console.log(persons); // [ 'Atul', 'Neetish', 'Sakshi', 'Shreya' ]

// Changing Elements
persons[2] = "Rashmi";
console.log(persons); // [ 'Atul', 'Neetish', 'Rashmi', 'Shreya' ]

// Array length
persons[persons.length] = "Kanchan";
console.log(persons); // [ 'Atul', 'Neetish', 'Rashmi', 'Shreya', 'Kanchan' ]

// Array Concat
const cars = ["BMW", "AUDI", "Land Rover"];
const bikes = ["ZX10R", "Pulsar", "Hero"];
console.log(cars.concat(bikes)); // [ 'BMW', 'AUDI', 'Land Rover', 'ZX10R', 'Pulsar', 'Hero' ]

// Array copyWithin()
console.log(persons.copyWithin(2, 0)); // [ 'Atul', 'Neetish', 'Atul', 'Neetish', 'Rashmi' ]
console.log(persons.copyWithin(2, 0, 2)); // [ 'Atul', 'Neetish', 'Atul', 'Neetish', 'Rashmi' ]

// Array flast()
const myNum = [[1,2],[3,4],[5,6]];
console.log(myNum.flat()); // [ 1, 2, 3, 4, 5, 6 ]

// Array flatMap()
const myNum1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(myNum1.flatMap(x => x * 6));  
/*[
    6, 12, 18, 24, 30,
36, 42, 48, 54
 ] */

// Array splice()
console.log(persons.splice(2, 2, "Rahul", "Rohit"));
console.log(persons); // [ 'Atul', 'Neetish', 'Rahul', 'Rohit', 'Rashmi' ]

// Array slice()
console.log(persons.slice(1)); // [ 'Neetish', 'Rahul', 'Rohit', 'Rashmi' ]