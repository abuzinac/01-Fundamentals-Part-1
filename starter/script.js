/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Andrija";
let first = "Marija";
let firstNamePerson
let first_name_person


console.log(firstName);
console.log(firstName);
console.log(firstName);


// 10. Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "Andrija";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);

//12. Datatypes
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Andrija");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

//13. let,const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = "programmer";
job = "teacher";

lastName = "Buzinac";
console.log(lastName);
*/

// 14. BASIC OPERATORS

// Math operators
const now = 2037;
const ageAndrija = now - 1987;
const ageLjubica = now - 1984;
console.log(ageAndrija, ageLjubica);

console.log(ageAndrija * 2, ageAndrija / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Andrija";
const lastName = "Buzinac";
console.log(firstName + " " + lastName);

// Assigment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
x--;
console.log(x);

// Comparison operators
console.log(ageAndrija > ageLjubica); // >, <, >=, <=;
console.log(ageLjubica >= 18);

const isFullAge = ageLjubica >= 18;

console.log(now - 1987 > now - 1984);