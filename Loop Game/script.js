let balance = prompt("How much did you want to add?");

if (isNaN(balance) || balance <= 0) {
    alert("Please enter a valid number");
} else {
    alert("Your current balance is " + balance + ". Go ahead.");
}

let userInput = 0;

do {
    userInput = prompt('Your current balance is ' + balance + '. You can type "exit" to quit. To continue playing, enter a number less than or equal to your balance.');

    if (userInput !== 'exit') {
        if (isNaN(userInput) || Number(userInput) > Number(balance)) {}
         else {
            let win = Math.random() < 0.3;
            if (win) {
                balance = Number(balance) + Number(userInput);
                alert('You win! Your current balance is ' + balance + '. Take time to decide whether to continue playing.');
            } else {
                balance = Number(balance) - Number(userInput);
                alert('You lose. Your current balance is ' + balance + '. Take time to decide whether to continue playing.');
                if (balance === 0) {
                    alert('You lose. Your current balance is ' + balance + '. You are done for the game.');
                    break;
                }
            }
        }
    }
} while (userInput !== 'exit');

alert('Bye Bye.');