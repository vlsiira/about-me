'use strict';


/*I tried to add .toLowerCase() to my variabless with an array, but it didn't work.
  Perhaps because arrays don't accept variables?  My attempt below:
    const questions = [birthCity, favFood, cutestAnimal, amountChickens, loveChickens];
    questions[0,1,2,3,4].toLowerCase();
*/

/*
// Question about birth city.
const birthCity = prompt('Were you born in Paris?').toLowerCase();

if (birthCity === 'yes' || birthCity === 'y') {
    alert('No, I was born in Springfield');
} else if (birthCity === 'no' || birthCity === 'n') {
    alert('Correct!');
} else {
    const notYN = prompt('Please respond yes/no');
}
console.log('Born in Paris?: ' + birthCity);


// Question about favorite food.
const favFood = prompt('Is your favorite food sushi?').toLowerCase();

if (favFood === 'yes' || favFood === 'y') {
    alert('Correct!');
} else if (favFood === 'no' || favFood === 'n') {
    alert('Sorry, sushi is delicious');
} else {
    const notYN = prompt('Please respond yes/no');
}
console.log('Favorite food sushi?: ' + favFood);


// Question about cutest animal.
const cutestAnimal = prompt('Is the otter the cutest animal?').toLowerCase();

if (cutestAnimal === 'yes' || cutestAnimal === 'y') {
    alert('Correct!');
} else if (cutestAnimal === 'no' || cutestAnimal === 'n') {
    alert('Sorry, nothing is cuter than an otter');
} else {
    const notYN = prompt('Please respond yes/no');
}
console.log('Cutest animal?: ' + cutestAnimal);


// Question about amount of chickens.
const amountChickens = prompt('Do you have 100 chickens?').toLowerCase();

if (amountChickens === 'yes' || amountChickens === 'y') {
    alert('No, I only have 3');
} else if (amountChickens === 'no' || amountChickens === 'n') {
    alert('Correct!');
} else {
    const notYN = prompt('Please respond yes/no');
}
console.log('Amount of chickens?: ' + amountChickens);


// Question about love of chickens.
const loveChickens = prompt('Do you love your chickens?').toLowerCase();

if (loveChickens === 'yes' || loveChickens === 'y') {
    alert('Correct!');
} else if (loveChickens === 'no' || loveChickens === 'n') {
    alert('Incorrect.  I love them very much!');
} else {
    const notYN = prompt('Please respond yes/no');
}
console.log('Love chickens?: ' + loveChickens);
*/


//Question 6: about favorite number.

/*
let guess = parseInt(prompt('What is my favorite number?'));
let i = 0;

while (i < 3) {
    i++;
    if (guess === 12) {
        alert('Correct!');
        break;
    } else if (guess < 12) {
        alert('too low');
        guess = parseInt(prompt('What is my favorite number?'));
    } else if (guess > 12) {
        alert('too high');
        guess = parseInt(prompt('What is my favorite number?'));
    } else {
        guess = parseInt(prompt('Please enter an integer'));
    }
}
console.log('Favorite number: user guessed: ' + guess);
*/


//Question 7: about other states lived in

let states = ['virginia', 'michigan'];
let guessState = prompt('Beside Oregon, what other states have I lived in?').toLowerCase();

for (let j = 0; j < 6; j++){
    if (guessState === states[j]) {
        alert('Correct!  I have lived in Virginia and Michigan.');
        break;
    } else if (j === 5) {
        alert('You are out of guesses.  I\'ve lived in Virginia and Michigan.')
    } else {
        prompt('Beside Oregon, what other states have I lived in?').toLowerCase();
    }
console.log(j);
}



/*********** From Class 1

const birthCity = prompt('What city were you born in?')
alert('You were born in ' + birthCity)
console.log('birth city is: ' + birthCity)

const favFood = prompt('What is your favorite food?')
alert('You were born in ' + birthCity + ', where you like to eat ' + favFood)
console.log('favorite food is: ' + favFood)

const cutestAnimal = prompt('What is the cutest animal?')
alert('You were born in ' + birthCity + ', where you like to eat ' + favFood + ' with ' + cutestAnimal)
console.log('cutest animal is: ' + cutestAnimal)

const amountChickens = prompt('How many chickens do you have?')
alert('You were born in ' + birthCity + ' where you like to eat ' + favFood + ' with ' + cutestAnimal + ' and ' + amountChickens + ' chickens')
console.log('number of chickens: ' + amountChickens)
***********/