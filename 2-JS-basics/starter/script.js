/*
* variables and data types
*/

// var firstName = 'Thomas';
// console.log(firstName);

// var lastName = 'Brown';
// var age = 28;

// var fullAge = true;
// console.log(fullAge)

// // an undefined variable
// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// // Variable and mutation and type coercion

// var firstName = 'Thomas';
// var age = 28;


// console.log(firstName + ' ' + age)

// var job, isMarried;
// job = 'student';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation

// age = 'twenty eight';
// job = 'driver';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//  var LastName = prompt('What is his Last Name?')
//  console.log(firstName + ' ' + lastName);


//  // Basic Operators
//  var year, yearThomas, yearMark;
//  ageThomas = 28
//  ageMark = 33;


//  var now = 2019;
//  var yearThomas = now - ageThomas;
//  var yearMark = now - ageMark;
//  console.log(yearThomas);

//  console.log(now + 2)
//  console.log(now * 2)
//  console.log(now / 10);

//  //Logical Operators


// var thomasOlder = ageThomas < ageMark;
// console.log(thomasOlder)

// // typeof operator

// console.log(typeof thomasOlder);
// console.log(typeof ageThomas);
// console.log(typeof 'Mark is older than Thomas');
// var x;
// console.log(typeof x);

// //Operator precedence

// var now = 2019;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);

// //Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6// 26
// console.log(x, y);

// // More operators

// x = x * 2;
// x *= 2;


// x += 10;

// x++


// /*********************
//  * CODING CHALLENGE 1
//  */

// var johnMass = 150;
// var johnHeight = 1.8;

// var markMass = 180;
// var markHeight = 1.9

// var johnBmi = johnMass / johnHeight**2;
// console.log(johnBmi)

// var markBmi = markMass / markHeight**2;
// console.log( markBmi);

// var markHigher = markBmi > johnBmi;
// console.log(markHigher)
// console.log('Is Mark\'s BMI higher than John\'s? ' + markHigher);

//If / else statements


// var firstName = 'Thomas';
// var civilStatus = 'single';

// if(civilStatus === 'married'){
//     console.log(firstName + ' is married!')
// }
// else{
//     console.log(firstName + ' will hopefully marry soon!')
// }

// var isMarried = true;
// if(isMarried){
//     console.log(firstName + ' is married!')
// }
// else{
//     console.log(firstName + ' will hopefully marry soon!')
// }

// var johnMass = 200;
// var johnHeight = 1.8;

// var markMass = 180;
// var markHeight = 1.9

// var johnBmi = johnMass / johnHeight**2;
// console.log(johnBmi)

// var markBmi = markMass / markHeight**2;
// console.log( markBmi);

// if (markBmi > johnBmi){
//     console.log('Mark\'s BMI is higher than John\'s.')
// }
// else{
//     console.log('John\'s BMI is higher than Mark\'s.')
// }

// // var markHigher = markBmi > johnBmi;
// // console.log(markHigher)
// // console.log('Is Mark\'s BMI higher than John\'s? ' + markHigher);

// //Boolean Logic

// var firstName = 'John';
// var age = 16;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.')
// } else if(age >= 20 && age < 30){
//     console.log(firstName + ' is a young man')
// } else {
//     console.log(firstName + ' is a man.');
// }

// The Ternary Operator and Switch Statements

var firstName = 'John';
var age = 16;

// Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// // Switch statement

// var job = 'teacher';
// switch(job){
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver' :
//         console.log(firstName + ' drives an uber in Lisbon.');
//         break;
//     case 'designer' :
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }
// age = 56;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }


// Truthy and Falsy values and equality operators

//falsy values: undefined, null 0, '', NaN
// truthy values: NOT falsy values

var height;
height = 23;

if (height || height === 0){
    console.log('Variable is defined')
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height == '23'){
    console.log('The == operator does type coercion!');
}


