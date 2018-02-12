'use strict';

const name = prompt('Hi!  What is your name?');

let tally = [];


// Question 1: about birth city.
const birthCity = prompt('Were you born in Paris?').toLowerCase();
function question1(){
    if (birthCity === 'yes' || birthCity === 'y') {
        alert('No, I was born in Springfield');
    } else if (birthCity === 'no' || birthCity === 'n') {
        alert('Correct!');
        console.log(tally.push(1));
    } else {
        prompt('Please respond yes/no');
    }
    console.log('Born in Paris?: ' + birthCity);
}

question1();


// Question 2: about favorite food.
const favFood = prompt('Is your favorite food sushi?').toLowerCase();
function question2() {
    if (favFood === 'yes' || favFood === 'y') {
        alert('Correct!');
        console.log(tally.push(2));
    } else if (favFood === 'no' || favFood === 'n') {
        alert('Sorry, sushi is delicious');
    } else {
        prompt('Please respond yes/no');
    }
    console.log('Favorite food sushi?: ' + favFood);
}
question2();


// Question 3: about cutest animal.
const cutestAnimal = prompt('Is the otter the cutest animal?').toLowerCase();
function question3() {
    if (cutestAnimal === 'yes' || cutestAnimal === 'y') {
        alert('Correct!');
        console.log(tally.push(3));
    } else if (cutestAnimal === 'no' || cutestAnimal === 'n') {
        alert('Sorry, nothing is cuter than an otter');
    } else {
        prompt('Please respond yes/no');
    }
    console.log('Cutest animal?: ' + cutestAnimal);
}
question3();


// Question 4: about amount of chickens.
const amountChickens = prompt('Do you have 100 chickens?').toLowerCase();
function question4() {
    if (amountChickens === 'yes' || amountChickens === 'y') {
        alert('No, I only have 3');
    } else if (amountChickens === 'no' || amountChickens === 'n') {
        alert('Correct!');
        console.log(tally.push(4));
    } else {
        prompt('Please respond yes/no');
    }
    console.log('Amount of chickens?: ' + amountChickens);
}

question4();


// Question 5: about love of chickens.
const loveChickens = prompt('Do you love your chickens?').toLowerCase();
function question5() {
    if (loveChickens === 'yes' || loveChickens === 'y') {
        alert('Correct!');
        console.log(tally.push(5));
    } else if (loveChickens === 'no' || loveChickens === 'n') {
        alert('Incorrect.  I love them very much!');
    } else {
        prompt('Please respond yes/no');
    }
    console.log('Love chickens?: ' + loveChickens);
}

question5();


//Question 6: about favorite number.

let guess = parseInt(prompt('What is my favorite number?'));
let i = 0;
function question6() {
    while (i < 3) {
        i++;
        if (guess === 12) {
            alert('Correct!');
            console.log(tally.push(6));
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
}


question6();


//Question 7: about other states lived in

let states = ['virginia', 'michigan'];
let guessState = prompt('Beside Oregon, what other states have I lived in?').toLowerCase();
function question7() {
    for (let j = 0; j < 6; j++){
        if (states.includes(guessState)) {
            alert('Correct!  I have lived in Virginia and Michigan.');
            console.log(tally.push(7));
            break;
        } else if (j === 5) {
            alert('You are out of guesses.  I\'ve lived in Virginia and Michigan.');
        } else {
            prompt('Beside Oregon, what other states have I lived in?').toLowerCase();
        }   
    }
}
question7();


// score message
if (tally.length === 0) {
    alert('Hi ' + name + ', you answered 0 of 7 questions correctly!');
}
if (tally.length === 1) {
    alert('Hi ' + name + ', you answered 1 of 7 questions correctly!');
}
if (tally.length === 2) {
    alert('Hi ' + name + ', you answered 2 of 7 questions correctly!');
}
if (tally.length === 3) {
    alert('Hi ' + name + ', you answered 3 of 7 questions correctly!');
}
if (tally.length === 4) {
    alert('Hi ' + name + ', you answered 4 of 7 questions correctly!');
}
if (tally.length === 5) {
    alert('Hi ' + name + ', you answered 5 of 7 questions correctly!');
}
if (tally.length === 6) {
    alert('Hi ' + name + ', you answered 6 of 7 questions correctly!');
}
if (tally.length === 7) {
    alert('Hi ' + name + ', you answered 7 of 7 questions correctly!');
}