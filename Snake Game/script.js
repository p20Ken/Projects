let canvas = document.getElementById("myCanvas");
canvas.style.backgroundColor = "white";
let ctx = canvas.getContext("2d");

let b1 = document.getElementById("bt1");
b1.addEventListener("click", startGame);

// Variables 

let timerID;
let snakeBody = [];
let snakeLength = 1;
let score = 0;
let pixel = 30;
let rows = 25;
let columns = 25;
let gameWidth = columns * pixel;
let gameHeight = rows * pixel;
let moveX = 12 * pixel;
let moveY = 12 * pixel;
let xAxis = 0;
let yAxis = 0;

// Food Formula for Generating at Random Points

let pointX = Math.round(Math.random() * (columns - 5)) * pixel;
let pointY = Math.round(Math.random() * (rows - 5)) * pixel;

// Start the game Function

function startGame() {

    // Reset the snake position and direction

    moveX = 12 * pixel;
    moveY = 12 * pixel;
    xAxis = 0;
    yAxis = 0;

    // Reset the snake body array and length

    snakeBody = [];
    snakeLength = 1;

    // Start the game loop

    clearInterval(timerID);
    timerID = setInterval(moveSnake, 150);

    // User ArrowKey Controls

    document.addEventListener("keydown", arrowKeys);
}

// Score Function that Keep's track of User's Score

function scorePoint() {

    ctx.fillStyle = "black";
    ctx.font = "20px Terminus";
    ctx.fillText("Score: " + score, 10, 20);

}

// If User's Snake Touches its body or goes back its Game Over

function checkSnake() {

    for (let i = 1; i < snakeBody.length; i++) {

        if (moveX == snakeBody[i].x && moveY == snakeBody[i].y) {

            clearInterval(timerID);
            alert("Game Over! Your Final Score is " + score);
            score = 0;
            return;

        }
    }
}

// Function for the Snake's Movement

function moveSnake() {

    ctx.clearRect(0, 0, gameWidth, gameHeight);

    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i].x = snakeBody[i - 1].x;
        snakeBody[i].y = snakeBody[i - 1].y;
    }

    moveX += xAxis * pixel;
    moveY += yAxis * pixel;

    // if User Hits the Wall "GAME OVER"

    if (moveX < 0 || moveX >= gameWidth || moveY < 0 || moveY >= gameHeight) {
        clearInterval(timerID);
        alert("Game Over! You Hit the Wall!");
        alert("Your Final Score is " + score);
        score = 0;
        return;
    }

    checkSnake();

    // Check if the snake eats the food

    if (moveX == pointX && moveY == pointY) {

        pointX = Math.round(Math.random() * (columns - 5)) * pixel;
        pointY = Math.round(Math.random() * (rows - 5)) * pixel;

        snakeBody.unshift({ x: moveX, y: moveY });
        
        snakeLength++;

        score++;
    }

    snakeBody.unshift({ x: moveX, y: moveY });

    if (snakeBody.length > snakeLength) {
        snakeBody.pop();
    }

    snake();
    foodDot();

    // To draw the Snake's Body

    for (let i = 0; i < snakeBody.length; i++) {
        ctx.fillStyle = "orange";
        ctx.fillRect(snakeBody[i].x, snakeBody[i].y, pixel, pixel);
    }

    scorePoint();
}

// Draw the Snake 

function snake() {
    ctx.fillStyle = "orange";
    ctx.fillRect(moveX, moveY, pixel, pixel);
}

// Draw the Food

function foodDot() {
    ctx.fillStyle = "pink";
    ctx.fillRect(pointX, pointY, pixel, pixel);
}

// Controls for the Snake

function arrowKeys(e) {
    if (e.code == "ArrowUp") {
        xAxis = 0;
        yAxis = -1;
    }
    if (e.code == "ArrowDown") {
        xAxis = 0;
        yAxis = 1;
    }
    if (e.code == "ArrowLeft") {
        xAxis = -1;
        yAxis = 0;
    }
    if (e.code == "ArrowRight") {
        xAxis = 1;
        yAxis = 0;
    }
}