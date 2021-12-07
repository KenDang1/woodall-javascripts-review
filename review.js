console.log('Note December 6th, 2021 by Edan');
/*
Jargon!!

.   - dot
()  - parentheses, parens
[]  - square brackets, square braces 
{}  - curly braces, curlies
<   - less than, bird, angle brackets
>   - greater than, gator, angle brackets
/   - slask, forward slash, whack
\   - backslash
!   - not, exclamation point, bang
#   - pound, hash, octothorp
*   - star, asterisk
||  - or operator, pipes
&&  - and operator
$   - bling, cash money, dollar sign
NaN - Not a Number, 🍞 bread

*/

/*

Primitive Data Types

    Strings     'taco'
    Number      18
    Boolean     true/false
    Undefined   undefined
    Null        null

Complex Data Types

    Arrays      [1, 2, 3, 'hello', 'world']
    Objects     {firstName: 'Ken'}
*/

let nothing = null;

// 🐪 Always use camelCase 🐪
let firstName = 'Ken';

// <div class="class-name">Ken</div>  this use in HTML
// <dive class="className">Ken</div>

// other naming conventions
// snake case
// kebob-case
// PascalCase or UpperCamelCase
// SCREAMING_CASE

let person = {
    x: 'Ken',
    y: 'Dang',
    z: 32
}

/**
 
Expressions
    An Expression evaluates a single value
Operators
    
 */

// An Expression evaluates a single value
7 + 3;      // 10
sum(7, 3);   // 10

let aMediumSizeNumber = 7 + 3;  // 10  
let anotherNumber = sum(7, 3);  // 10

// 👇 These are equivalent!!
console.log('my fav number is', anotherNumber);
console.log('my fav number is', sum(7, 3));

// Increment operator
anotherNumber++;                        // 11
// Exact same as
anotherNumber = anotherNumber + 1;      // 11


anotherNumber += 10;                    // 22
anotherNumber = anotherNumber + 10;

let myNumber = 5;
myNumber += 3;     //8
myNumber -= 3;     //2
myNumber *= 3;     // 15
myNumber /= 3;     // 1.665
myNumber %= 3;     // 2  (remainder)


// THE TRICKY PLUS OPERATOR
// Does two things:
// - Adds two numbers together (2 + 3)
// - Joins two strings together firstName (concentatetion) = ('ken' + 'dang' = ken dang)



// Anti-values
// Values that are not values


NaN;        // not a number
// usually a tyoe coercion error, eg. Number ('abc')

// Interionally nothing
null;
// Just nothing
// Funciton with no return  actually return undefined
undefined;

// a variable can also be jsut undefinded ( actually, not delcared);
// uncaught referenceError: variale 'whatever' is not defined

/**
 CONDITIONALS
 */

if (someBoolean) {
    // then, do this
}
else if (someOtherBoolean) {
    // then do that
}
else {
    // do this, if nothing else is truthy
}

// Conditonal operators
if (myNumber > 8) {
    // do whatever...
}
/**
>      More than
>=     Greater than or equal to
<      Less than
<=     less than or equal to
===    Triple Equals (exactly equal)
==     Double Equals (coerce types, then compare)
!==     Not equals
!=      Not equals (coerce types)
*/

'5' == 5   // no
// Instead do
Number('5') === 5

/**
Array and loops!

An array is a list of things
*/

let beverages = [
    'bubbly',
    'Jasmine tea',
    'Water',
    'coffee'
];

/** 
Kinds of loops
    for..of
    for..in
    for
    while
*/
for (let beverage of beverages) {
    console.log(`I am drinking ${beverage}`);

}

for (let i = 0; i < beverages.length; i++) {
    let beverage = beverages[i];
    console.log(`I am drinking ${beverage}`);
}

for (let i = 0; i <= 100; i++) {
    console.log('Counting up...', i);
}

// for..in loop
for (let i in beverages) {
    let beverage = beverages[i];
    console.log(`I am drinking ${beverage}`);
}

// while
let forcast;
while (forcast.windSpeed < 50) {
    forcast = goAskTheWeatherService();
}
sendAMessagetoMortensenToStopTheCranse();

let isGameRunning = true;
while (isGameRunning) {
    nextTick();
}

$('#stopButton').on('click', function () {
    isGameRunning = false;
});

/**
Functions!!!
*/

function generateSong(words, notes) {
    let song = `
    🎵🎵🎵🎵
    ${words} ${words} ${words}
    ${words} ${words} ${words}
    🎹🎸
    ${words} ${words} ${words}
    ${words} ${words} ${words}
    🥁
    `
    return songs;
}

let mySong = generateSong('hey hey hey', 'C F G');
console.log('check out my song', mySong);

// function delcaration
// this is hoisted
function sum(n1, n2) {
    return n1 + n2;
}

// function expression
// Create an anonymous function
// and assign it to a variable called sum
let sum = function (n1, n2) {
    return n1 + n2;
}

function sayHell() {
    console.log('hell😈');
}

function callMeTwoTimes(fn) {
    fn();
    fn();
}

// common pattern in javascript
// 'callback function'
callMeTwoTimes(function () {
    console.log('hell 😈');
});

callMeTwoTimes();


let notes = ['do', 're', 'mi'];
// This is a called 'method'
notes.push('fa');   // adds an item to the end of the of the array
notes.pop();        // removed an item at the end
notes.shift();      // add to the beginning of the array
notes.unshift();    // removed an item at the beginning of the array


// ------------------------------------------------------------------------------------
console.log('Note December 7th, 2021 by Liz');

let snow = {
    key: 'value',
    color: 'white',
    wet: true,
    inches: 4,
    accidents: ['100', '694', '23', '35']
};

let stringText = `Today ot jas already snowed ${snow.inches} inches.`

snow.isCold = true;

console.log('snow is', snow);
console.log(`snow is ${snow.color}`);

let buildings = [
    {
        color: 'brown',
        isTall: true
    },
    {
        color: 'gray',
        isTall: true
    },
    {
        color: 'beige',
        isTall: false
    }
];

console.log('building is', buildings);

const penguins = [
    {name: 'Emperor',
    isCute: true
    },
    {name: 'Sea Gull',
    isCute: false
    },
    {name: 'little',
    isCute: true}
];

function checkPenguins (penguinsArray) {
    let cutePenguins = [];
    for (let i = 0; i < penguinsArray.length; i++) {
        if (penguinsArray[i].isCute) {
            cutePenguins.push(penguinsArray[i].name)
        }
    }
        return cutePenguins;
}

console.log('The cute ones are:', checkPenguins(penguins));


