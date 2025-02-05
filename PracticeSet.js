// Write a function that takes a string and returns the number of characters in it.
function getLength(str){
    return str.length;
}
console.log(getLength("My name is Shashank Raj"));


// Write a function that returns the character at the third position of a given string.
function getThirdChar(str){
    return str.charAt(3);
}
console.log(getThirdChar("My name is Shashank Raj"));


// Create a function that returns the Unicode value of the first character in a given string.
function UniCodefirstChar(str){
    return str.charCodeAt(0);
}
console.log(UniCodefirstChar("I love my India"));


// Use at() to return the last character of a given string.
function lastChar(str){
    return str.at(-1);
}
console.log(lastChar("My name Neetish Raj"));


// Write a function that returns the index of the first occurrence of the word "code" in a given string.
function findCodeIndex(str){
    return str.indexOf("coding");
}
console.log(findCodeIndex("I love coding in JavaScript"));


// Write a function that returns the index of the last occurrence of the letter "a" in a given string.
function lastOccur(str){
    return str.lastIndexOf("a");
}
console.log(lastOccur("Shashank"));


// Write a function that checks if a given string contains the word "JavaScript".
function givenString(str){
    return str.includes("Banana")
}
console.log(givenString("Monkies favourite fruit are Banana"));


// Write a function that checks if a string starts with "Hello".
function stringCheck(str){
    return str.startsWith("Hello");
}
console.log(stringCheck("Hello my name is Shashank"));


// Write a function that checks if a string ends with ".js".
function stringCheckLast(str){
    return str.endsWith(".js");
}
console.log(stringCheckLast("I love doing JavaScript and this extension is .cpp"));


// Convert a given string to uppercase.
function toUpper(str){
    return str.toUpperCase();
}
console.log(toUpper("neetish"));


// Convert a given string to lowercase.
function toLower(str){
    return str.toLowerCase();
}
console.log(toLower("NEETISH"));


// Remove leading and trailing whitespaces from a given string.
function trimString(str){
    return str.trim();
}
console.log(trimString("           hello          "));


// Write a function that trims only the beginning of a string and another function that trims only the end.
function trimStart(str){
    return str.trimStart();
}

function trimEnd(str){
    return str.trimEnd();
}
console.log(trimStart("  hello    "));
console.log(trimEnd("     hello   "));