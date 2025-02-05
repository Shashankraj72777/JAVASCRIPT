const text = `
JavaScript is a powerful programming language that is widely used for web development. 
It allows developers to create dynamic and interactive web applications.

String manipulation is an essential skill in JavaScript. 
With functions like slice, substring, and replace, developers can efficiently process text data.

Interview questions often focus on string methods, regular expressions, and performance optimizations.
Mastering string operations is crucial for writing clean and eff`;

// Find total no. of letters.
console.log(text.length);


//Find total no. of words.
const wordArray = text.split(" ")
console.log(wordArray.length);


// Find total no. of lines.
const totalLines = text.split("\n")
console.log(totalLines.length);


if(""){
    console.log("Print");
}
























//Find the previous word behind substring "often focus"
function findPreviousWord(substring) {

    const index = text.indexOf(substring);
    // if(index === -1){
    //     return null;
    // }

    const words = text.substring(0, index).trim().split(" ");
    return words[words.length - 1];
}
console.log(findPreviousWord("often focus"));