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

// var height;
// height = 23;

// if (height || height === 0){
//     console.log('Variable is defined')
// } else {
//     console.log('Variable has NOT been defined');
// }

// // Equality operators
// if (height == '23'){
//     console.log('The == operator does type coercion!');
// }

// // CODING CHALLENGE 2

// var johnTeam = (89 + 120 + 103) / 3;
// var mikeTeam = (116 + 123 + 94) / 3;

// if(johnTeam > mikeTeam){
//     console.log("johns team wins with an average score of " + johnTeam);
// } else if (mikeTeam > johnTeam) {
//     console.log("mikes team wins with an average score of " + mikeTeam);
// } else {
//     console.log('its a tie')
// }

//  Functions

// function calculateAge(birthYear){
//     return 2018 - birthYear;
// }

// var ageThomas = calculateAge(1991);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);

// console.log(ageThomas, ageJane, ageMike);

// function retirement(year, firstName){
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0){
//         console.log(firstName + ' retires in ' + retirement + ' years');
//     } else {
//         console.log(firstName + " is already retired.");
//     }
    
// }

// retirement(1991, 'Thomas');
// retirement(1948, 'Mike');
// retirement(1969, 'Jane');

// Function statements and Expressions

// // function expression
// var whatDoYouDo = function(job, firstName){
//     switch(job) {
//         case 'teacher':
//             return firstName + " teaches kids how to code";
//         case 'driver':
//             return firstName + " drives  cab in Lisbon";
//         case 'designer':
//             return firstName + " designs beautiful websites";
//         default:
//             return firstName + " does something else";
//     }
// }


// console.log(whatDoYouDo('teacher', 'John'));

// Arrays


// Initialize new array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[2])
// console.log(names.length)

// // Mutate array data
// names[1] = 'Ben';
// names[names.length] = 'Mary';
// console.log(names);

// // Different Data types

// var john = ['John', 'Smith', 1990, 'teacher', false];

// john.push('blue');
// john.unshift('Mr.')

// console.log(john);

// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer': 'John IS a designer';
// console.log(isDesigner);


// Coding Challenge 3

// function tipCalc(bill){
//     var tip;

//     if( bill < 50){
//         tip = .2
//     } else if ( bill >= 50 && bill <= 200){
//         tip = .15
//     } else{
//         tip = .1
//     }
//     return tip * bill;
// }

// var bills = [124, 48, 268];

// var tips = [tipCalc(bills[0]), tipCalc(bills[1]), tipCalc(bills[2])];

// var amount = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2]]

// console.log(tips);

// Objects and properties


// Object Literal
// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
// }
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);


// // new Object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

//Object methods

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function(){
//         this.age = 2018 - this.birthYear;
//     }
// };

//  john.calcAge();
//  console.log(john)

 //Coding Challenge 4

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

// var john = {
//     firstName: "John",
//     lastName: "Brown",
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// }

// var mark = {
//     firstName: "Mark",
//     lastName: "Jones",
//     mass: 2,
//     height: 1.69,
//     markBmi: function(){
//         this.bmi = this.mass / this.height**2;
//         return this.bmi;
//     }
// }

// john.calcBMI()
// mark.markBmi()
// console.log(john)

// if(john.bmi > mark.bmi){
//     console.log(`John Brown has the higher bmi of ${john.bmi}`);
// }
// else if(mark.bmi > john.bmi){
//     console.log(`Mark Jones has the higher bmi of ${mark.bmi}`);
// }
// else{
//     console.log("There bmi's are the same!")
// }

//Loops and iterations


//for loop
// for(var i = 0; i < 10; i++){
//     console.log(i)
// }

// var john = ['John', 'Smith', 1990, 'teacher', false];

// for (var i = 0; i < john.length; i++){
//     console.log(john[i]);
// }


// //while loop
// var i = 0;
// while(i < john.length){
//     console.log(john[i]);
//     i++;
// }

//continue and break statements

// var john = ['John', 'Smith', 1990, 'teacher', false];

// for (var i = 0; i < john.length; i++){
//     if(typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++){
//     if(typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }


// //Looping backwards
// for(var i = john.length - 1; i >= 0; i--){
//     console.log(john[i])
// }


//coding challenge 5

var bill = {
    bills: [124, 48, 268, 180, 42],
    tipCalc: function(){
        this.tips = [];
        this.totals = [];
     for(var i = 0; i < this.bills.length; i++){
        var percentage;

        if(this.bills[i] < 50){
            percentage = .2;
        } else if(this.bills[i] >= 50 && this.bills[i] < 200){
            percentage = .15;
        } else{
            percentage = .1;
        }

        this.tips[i] = this.bills[i] * percentage;
        this.totals[i] = this.bills[i] + this.bills[i] * percentage;

     }
    }
}



var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    tipCalc: function(){
        this.tips = [];
        this.totals = [];
     for(var i = 0; i < this.bills.length; i++){
        var percentage;

        if(this.bills[i] < 100){
            percentage = .2;
        } else if(this.bills[i] >= 100 && this.bills[i] < 300){
            percentage = .1;
        } else{
            percentage = .25;
        }

        this.tips[i] = this.bills[i] * percentage;
        this.totals[i] = this.bills[i] + this.bills[i] * percentage;

     }
    }
}


function calcAverage(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
        sum = sum + tips[i]
    }
    return sum / tips.length;
}



mark.tipCalc();

bill.tipCalc();


bill.average = calcAverage(bill.tips);
mark.average = calcAverage(mark.tips);


console.log(bill)
console.log(mark);

