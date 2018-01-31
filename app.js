'use strict';

//const questions = [birthCity, favFood, cutestAnimal, amountChickens, loveChickens];
//questions[0,1,2,3,4].toLowerCase();

const birthCity = prompt('Were you born in Paris?');
if (birthCity.toLowerCase() === 'yes' || birthCity.toLowerCase() === 'y') {
    alert('No, I was born in Springfield');
} else if (birthCity.toLowerCase() === 'no' || birthCity.toLowerCase() === 'n') {
    alert('Correct!');
} else {
    const notYN = prompt('Please respond yes/no');
}
console.log('Born in Paris?: ' + birthCity);

const favFood = prompt('Is your favorite food sushi?');
if (favFood.toLowerCase() === 'yes' || favFood.toLowerCase() === 'y') {
    alert('Correct!');
} else if (favFood.toLowerCase() === 'no' || favFood.toLowerCase() === 'n') {
    alert('Sorry, sushi is delicious');
} else {
    const notYN = prompt('Please respond yes/no');
}
console.log('Favorite food sushi?: ' + favFood);

const cutestAnimal = prompt('Is the otter the cutest animal?');
if (cutestAnimal.toLowerCase() === 'yes' || cutestAnimal.toLowerCase() === 'y') {
    alert('Correct!');
} else if (cutestAnimal.toLowerCase() === 'no' || cutestAnimal.toLowerCase() === 'n') {
    alert('Sorry, nothing is cuter than an otter');
} else {
    const notYN = prompt('Please respond yes/no');
}
console.log('Cutest animal?: ' + cutestAnimal);

const amountChickens = prompt('Do you have 100 chickens?');
if (amountChickens.toLowerCase() === 'yes' || amountChickens.toLowerCase() === 'y') {
    alert('No, I only have 3');
} else if (amountChickens.toLowerCase() === 'no' || amountChickens.toLowerCase() === 'n') {
    alert('Correct!');
} else {
    const notYN = prompt('Please respond yes/no');
}
console.log('Amount of chickens?: ' + amountChickens);

const loveChickens = prompt('Do you love your chickens?');
if (loveChickens.toLowerCase() === 'yes' || loveChickens.toLowerCase() === 'y') {
    alert('Correct!');
} else if (loveChickens.toLowerCase() === 'no' || loveChickens.toLowerCase() === 'n') {
    alert('Incorrect.  I love them very much!');
} else {
    const notYN = prompt('Please respond yes/no');
}
console.log('Love chickens?: ' + loveChickens);

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