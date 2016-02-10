var userName = prompt('What is your name?');
console.log('The user said that their name is ' + userName);

alert('Hi there, ' + userName + ', I\'m going to ask you some questions about myself. Please answer Y/y or N/n.');

var answer1 = prompt('Was Nolan born in Michigan?');
console.log('The users answer to Question 1 was ' + answer1);
if (answer1.toLowerCase() === 'y' || answer1.toUpperCase() === 'Y') {
  alert('Nice job! I was born in Lansing Michigan.');
  console.log(userName + ' nailed Question 1.');
} else if (answer1.toLowerCase() === 'n' || answer1.toUpperCase() === 'N') {
  alert('Sorry, you\'re incorrect!!!');
  console.log(userName + ' answered Question 1 incorrect.')
} else {
  alert('You should have given a Y or N answer, so you lose this round. Try again next time.');
  console.log(userName + ' failed to answer Question 1.')
}

var answer2 = prompt('Is Nolans favorite sport football?');
console.log('The users answer to Question 2 was ' + answer2);
if (answer2.toLowerCase() === 'n'|| answer2.toUpperCase() === 'N') {
  alert('Correct! My favorite sport is, and always will be hockey.');
  console.log(userName + ' answered Question 2 correctly!');
} else if (answer2.toLowerCase() === 'y' || answer2.toUpperCase() === 'Y') {
  alert('Sorry, you\'re incorrect!!!');
  console.log(userName + ' got Question 2 wrong.');
} else {
  alert('You should have given a Y or N answer, so you lose this round.');
  console.log(userName + ' failed to answer Question 2.')
}

var answer3 = prompt('Does Nolan have any siblings?');
console.log('The user answer to Question 3 was ' + answer3);
if (answer3.toLowerCase() === 'y' || answer3.toUpperCase() === 'Y' || answer3 === 'Yes' || answer3 === 'yes') {
  alert('Good job! I have one sister named Madison. She does not like me very much.');
  console.log(userName + ' aced Question 3.');
} else if (answer3.toLowerCase() === 'n' || answer3.toUpperCase() === 'N' || answer3 === 'No' || answer3 === 'no') {
  alert('Sorry, you\'re inccorect!!!');
  console.log(userName + ' did not quite hit the mark on Question 3.')
} else {
  alert('You should have given a Y or N answer, so you lose this round.');
  console.log(userName + ' failed to answer Question 3.')
}

var answer4 = prompt('Is Nolan a Michigan State Spartans fan?');
console.log('The user answer to Question 4 was ' + answer4);
if (answer4.toLowerCase() === 'y' || answer4.toUpperCase() === 'Y') {
  alert('Correct answer! Go Green, Go White!');
  console.log(userName + ' perfected Question 4.');
} else if (answer4.toLowerCase() === 'n' || answer4.toUpperCase() === 'N') {
  alert('I am dissapointed. You are incorrect!!!');
  console.log(userName + ' got Question 4 wrong. Sadly.')
} else {
  alert('You should have given a Y or N answer, so you lose this round.');
  console.log(userName + ' failed to answer Question 4.')
}

var answer5 = prompt('Does Nolan like animals?');
console.log('The user answer to Question 5 was ' + answer5);
if (answer5.toLowerCase() === 'y' || answer5.toUpperCase() === 'Y') {
  alert('Correct! Nolan loves animals more than he likes people.');
  console.log(userName + ' got Question 5 correct!');
} else if (answer5.toLowerCase() === 'n' || answer5.toUpperCase() === 'N') {
  alert('Incorrect! Nolan is offended that you think he does not like puppies or kittens.');
  console.log(userName + ' got Question 5 incorrect. Offending him slightly.')
} else {
  alert('You should have given a Y or N answer, so you lose this round.');
  console.log(userName + ' failed to answer Question 5.')
}

var answer6 = prompt('How old is Nolan?');
console.log('The user answer to Question 6 was ' + answer6);
if (answer6 == 19) {
  alert('Spot on! You guessed correct!');
  console.log(userName + ' got Question 6 correct!');
} else if (answer6 < 19) {
  alert('Incorrect! You guessed too young.');
  console.log(userName + ' got Question 6 wrong.')
} else if (answer6 > 19) {
  alert('Incorrect! You guessed too old.');
  console.log(userName + ' got Question 6 wrong.')
}
