const fruits = ["Banana", "Oranges", "Apple"];

// Using loop
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// array.forEach() function
fruits.forEach(myfunction);
function myfunction(value){
    console.log(value);
}

// Adding array element
function myFunction(){
    fruits.push("Kiwi");
}
myFunction();
console.log(fruits);

// Nested JS Objects and Arrays
const myObj = {
    name: "Shashank Raj",
    age: 24,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }

  for(let i in myObj.cars){
    console.log("Brand: " + myObj.cars[i].name);
    for(let j in myObj.cars[i].models){
        console.log(" * " + myObj.cars[i].models[j]);
    }
  }


// Converting array to a string
console.log(fruits.toString());

// Access the full array
console.log(fruits);

// Array are objects
const person = ["Shashank", "Raj", 24];
console.log(person[0]);

// length property
console.log(fruits.length);

// Accessing the first array elements
console.log(fruits[0]);

// Accessing the last array elements
console.log(fruits[fruits.length-1]);