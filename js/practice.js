/* longer comment*/
const country = 'Lithuania'; //constant value that cannot be changed
const continent = 'Europe';
let population = 2; //this is a variable ('var' is to going to be able to be used across my whole program
// 'let' will only be used within the scope of where you declared that

console.log(country); //to show in console
console.log(continent);
console.log(population);

const isIsland = false;
let language; //undefined variable

language = 'lithuanian'; // we gave a value to a variable

console.log(typeof isIsland); //shows the type of variable - boolean
console.log(typeof population); //number
console.log(typeof country); //string
console.log(typeof language);//string

console.log(population / 2);
population++ // it's the same as increasedPopulation = population + 1
console.log(population);
console.log(population > 6)
console.log(population > 33)

const description =
    country +
    ' is in ' +
    continent +
    ', and its ' +
    population +
    ' million people speak ' +
    language;

console.log(description);

var sudeti = 3;
var sudeti1 = 17;
var sudeti2 = 12;

sudeti = sudeti + 12; // sudeti += 12 // -= does the same thing // *= also the same // also /=
sudeti1 = 9 + sudeti1; // sudeti1 += 9
sudeti2 = sudeti2 + 7; // sudeti2 += 7

/*
CODE OUTPUT
\' single quote
\" double quote
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
 */

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
console.log(myStr);

var secondStr = "This is the start. " + "This is the end.";
console.log(secondStr);


//find the last element on the string even when you don't know how many elements there are: firstName[firstName.length - 1];


