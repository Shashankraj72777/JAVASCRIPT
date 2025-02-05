const sentence = "My name is Shashank Raj and I am from Patna.";
let index = 6;

// This is an example of string.prototype.at()
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// output An index of 6 returns the character e


// This is an example of string.prototype.Charat()
console.log(`Character at index ${index} is ${sentence.charAt(index)}`);
// output is e


// This is an example of string.prototype.CharCodeat()
console.log(`Charater Code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`,);
// output Charater Code 101 is equal to i


// This is an example of string.prototype.CodePointat()
const icons = '★♲';
console.log(icons.codePointAt(1));
// output 9842


// This is an example of string.prototype.concat()
const str1 = "Neetish Raj";
const str2 = "Shashank Raj";
console.log(str1.concat(" , ", str2));
// output Neetish Raj , Shashank Raj


// This is an example of string.prototype.endsWith()
console.log(str1.endsWith("Raj"));  // true
console.log(str1.endsWith("Raj", 11)); // true
console.log(str2.endsWith("Shashank")); // false


// This is an example of string.prototype.includes()
const word = "Patna";
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`,);
// output the word "Patna is in the senetence


// This is an example of string.prototype.indexOf()
const paragraph = "Chandigarh is very beautiful place and very clean city";
const search = "very";
const indexOfFirst = paragraph.indexOf(search);

console.log(`The index of the first "${search}" is ${indexOfFirst}`);
console.log(`The index of the second "${search}" is ${paragraph.indexOf(search, indexOfFirst + 1)}`);
//output The index of the first "very" is 14
// output The index of the second "very" is 39


// This is an example of string.prototype.isWellFormed()
const strings= ["abc", "ab\uD83D\uDE04c",];
for (const str of strings){
    console.log(str.isWellFormed());
}
//output true, true


// This is an example of string.prototype.lastIndexOf()
const sent1 = "My college name is Chandigarh university";
const search1 = "Chandigarh";
console.log(`Index of the last ${search1} is ${sent1.lastIndexOf(search1)}`,);
// output Index of the last Chandigarh is 19


// This is an example of string.prototype.loacaleCompare()
const a1 = 'shashank';
const a2 = 'SHASHANK';
console.log(a1.localeCompare(a2));
console.log(a1.localeCompare(a2, 'en', {sensitivity: 'base' }));
// output -1, 0


// This is an example of string.prototype.match()
const para1 =  "Our college in located in Chandigarh";
const regexp = /[A-Z]/g;
const found = para1.match(regexp);
console.log(found);
// output [ 'O', 'C' ]


// This is an example of string.prototype.matchAll()
const regexp1 = /e(x)(am(\s?))/g;
const string1 = "exams1exams2";
const array = [...string1.matchAll(regexp1)];
console.log(array[0]);
console.log(array[1]);
/*output [
  'exam',
  'x',
  'am',
  '',
  index: 6,
  input: 'exams1exams2',
  groups: undefined
]*/


// This is an example of string.prototype.normalize()
const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${name1}, ${name2}`); // "Amélie, Amélie
console.log(name1 === name2); // false 
console.log(name1.length === name2.length); // false

const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
//  output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// output: true
console.log(name1NFC.length === name2NFC.length);
//  output: true


// This is an example of string.prototype.padEnd()
const string3 = "Oranges are ripe";
console.log(string3.padEnd(20, '.'));
const string4 = '200';
console.log(string4.padEnd(6));
// output: Oranges are ripe
// 200


// This is an example of string.prototype.padStart()
const string5 = '5';
console.log(string5.padStart(2, '0')); // output 05

const BigNumber = '12345678909876543';
const last_6_Digit = BigNumber.slice(-6);
const hiddenNo = last_6_Digit.padStart(BigNumber.length, '$');
console.log(hiddenNo);
// output $$$$$$$$$$$876543


// This is an example of string.prototype.repeat()
const mood = "Sad , ";
console.log(`I feel very ${mood.repeat(6)}`);
// output I feel very Sad , Sad , Sad , Sad , Sad , Sad ,


// This is an example of string.prototype.replace()
console.log(paragraph.replace("very", "wonderful"));
// output: Chandigarh is wonderful beautiful place and very clean city


// This is an example of string.prototype.replaceAll()
console.log(paragraph.replaceAll("very", "wonderful"));
//output: Chandigarh is wonderful beautiful place and wonderful clean city


// This is an example of string.prototype.search()
const regexpression = /[A-Z]/;
console.log(paragraph.search(regexpression)); // 0
console.log(paragraph[paragraph.search(regexpression)]); // C


// This is an example of string.prototype.slice()
const string6 = "My name is Shashank Raj and I am from Buxar Bihar";
console.log(string6.slice(8));
console.log(string6.slice(7, 18));
//output: is Shashank Raj and I am from Buxar Bihar
// output: is Shashan


// This is an example of string.prototype.split()
const words = string6.split(' ');
console.log(words[4]);

const characters = string6.split('');
console.log(characters[8]);

const strCopy = string6.split();
console.log(strCopy);
//output
/* Raj
i
[ 'My name is Shashank Raj and I am from Buxar Bihar' ]
 */


// This is an example of string.prototype.startsWith()
console.log(string6.startsWith("My"));  // true
console.log(string6.startsWith("My", 6));  // false


// This is an example of string.prototype.startsWith()
const str11 = "Shashank";
console.log(str11.substring(1, 4));  // has
console.log(str11.substring(5)); // ank


// This is an example of string.prototype.toLocaleLowerCase()
const example = "India";
console.log(`EN-US: ${example.toLocaleLowerCase('en-US')}`);
// output: india


// This is an example of string.prototype.toLocaleUpperCase()
const example1 = "india";
console.log(`EN-US: ${example.toLocaleUpperCase('en-US')}`);
// output: INDIA


// This is an example of string.prototype.toLowerCase()
const sent = "My name is Shashank Raj and I am from Buxar Bihar";
console.log(sent.toLowerCase());
// output: my name is shashank raj and i am from buxar bihar


// This is an example of string.prototype.toString()
const strObj = new String("Raj");
console.log(strObj);   // [String: 'Raj']
console.log(strObj.toString());  // Raj


// This is an example of string.prototype.toUpperCase()
console.log(sent.toUpperCase());
// output: MY NAME IS SHASHANK RAJ AND I AM FROM BUXAR BIHAR


// This is an example of string.prototype.toWellFormed()
const str3 = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];
for (const str of str3) {
  console.log(str.toWellFormed());
}
// Logs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"


// This is an example of string.prototype.trim()
const sent2 = "     Lemon       ";
console.log(sent2);  //  "      Lemon       " 
console.log(sent2.trim()); // Lemon


// This is an example of string.prototype.trimEnd()
console.log(sent2);  // "     Lemon        "
console.log(sent2.trimEnd()); // "           Lemon"


// This is an example of string.prototype.trimStart()
console.log(sent2);  // "     Lemon        "
console.log(sent2.trimStart()); // "Lemon         "


// This is an example of string.prototype.valueOf()
const strObj1 = new String("Raj");
console.log(strObj1);   // [String: 'Raj']
console.log(strObj1.valueOf());  // Raj


// This is an example of string.prototype.[Symbol.iterator]()
const str = "The quick red fox jumped over the lazy dog's back.";

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while(!theChar.done && theChar.value !== ' ') {
  console.log(theChar.value);
  theChar = iterator.next();
}
// output: 