let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

let b1 = document.getElementById("button1");


b1.addEventListener("click", startGame);
c.addEventListener("click", clickDot);

function startGame() {
     x = 600 / 2
     y = 600 / 2 
     r = 20
    moveX = 30 * (Math.random() - 0.5);
    moveY = 30 * (Math.random() - 0.5);
    timerID = setInterval(moveDot, 100);
}


function moveDot() {
    ctx.clearRect(0, 0, 600, 600);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    x = x + moveX;
    y = y + moveY;
    if (x < -20 || y < -20 || x > 600 + 20 || y > 600 + 20) {
        alert("Oops! The dot has escaped!");
        clearInterval(timerID);
        }
    }


function clickDot(event) {
    let canvasRect = c.getBoundingClientRect();
    let clickX = event.clientX - canvasRect.left;
    let clickY = event.clientY - canvasRect.top;
    let d = Math.sqrt(Math.pow(clickX - x, 2) + Math.pow(clickY - y, 2));
    if (d <= r) {
        alert("Bingo! The dot is caught and will disappear.");
        clearInterval(timerID);
        ctx.clearRect(0, 0, 600, 600)
    }
}
