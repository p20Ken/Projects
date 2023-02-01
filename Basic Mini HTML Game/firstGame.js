let userInput = prompt('Please enter number 0 or 1 to predict the result, 0 for heads and 1 for tails')

userInput;
typeof (userInput);

let usernumber = document.getElementById('usernumber');
usernumber.innerHTML = ' You have Chosen ' + userInput + ' . ';
alert(' You have chosen ' + userInput + ' . ');

Math.random();
typeof (Math.random);
Math.round();
typeof (Math.round);

let imaginarynumber = document.getElementById('imaginarynumber');
let randomNumber = Math.random();
let binary = Math.round(randomNumber);

let firstGame = document.getElementById('firstGame');
firstGame.innerHTML = ' Your guess is ' + userInput + ' and the result of the coin flip is ' + binary + ' . ';
alert(' Your guess is ' + userInput + ' and the result of the coin flip is ' + binary + ' . ');

