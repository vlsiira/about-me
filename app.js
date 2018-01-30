'use strict';


const birthCity = prompt('Were you born in Paris?');
if (birthCity === 'yes' || birthCity === 'y') {
    alert('No, I was born in Springfield');
} else if (birthCity === 'no' || birthCity === 'n') {
    alert('Correct!');
} else {
    const notYN = prompt('Please respond yes/no');
}


const favFood = prompt('Is your favorite food sushi?');
if (favFood === 'yes' || favFood === 'y') {
    alert('Correct!');
} else if (favFood === 'no' || favFood === 'n') {
    alert('Sorry, sushi is delicious');
} else {
    const notYN = prompt('Please respond yes/no');
}

const cutestAnimal = prompt('Is the otter the cutest animal?');
if (cutestAnimal === 'yes' || cutestAnimal === 'y') {
    alert('Correct!');
} else if (cutestAnimal === 'no' || cutestAnimal === 'n') {
    alert('Sorry, nothing is cuter than an otter');
} else {
    const notYN = prompt('Please respond yes/no');
}

const amountChickens = prompt('Do you have 100 chickens?');
if (amountChickens === 'yes' || amountChickens === 'y') {
    alert('No, I only have 3');
} else if (amountChickens === 'no' || amountChickens === 'n') {
    alert('Correct!');
} else {
    const notYN = prompt('Please respond yes/no');
}

const loveChickens = prompt('Do you love your chickens?');
if (loveChickens === 'yes' || loveChickens === 'y') {
    alert('Correct!');
} else if (loveChickens === 'no' || loveChickens === 'n') {
    alert('Incorrect.  I love them very much!');
} else {
    const notYN = prompt('Please respond yes/no');
}


/*
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
*/