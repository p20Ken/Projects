let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let b1 = document.getElementById("bt1")
let b2 = document.getElementById("bt2");

let doti = [];

b2.addEventListener("click", runAnimation);

let timerID;

function runAnimation() {
    let numDots = b1.value;
    ctx.clearRect(0, 0, 800, 500);
    doti = [];
    for (let i = 0; i < numDots; i++) {

        doti.push({
            dotX: Math.random() * 800,
            dotY: Math.random() * 500,
            moveX: 20 * (Math.random() - 0.5),
            moveY: 20 * (Math.random() - 0.5),
            color: 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')'
        });
    }
    timerID = setInterval(moveDots, 100);
}

function moveDots() {
    ctx.clearRect(0, 0, 800, 500);
    for (let i = 0; i < doti.length; i++) {

        ctx.beginPath();
        ctx.arc(doti[i].dotX, doti[i].dotY, 5, 0, 2 * Math.PI);
        ctx.fillStyle = doti[i].color;
        ctx.fill();
        ctx.closePath();

        doti[i].dotX += doti[i].moveX;
        doti[i].dotY += doti[i].moveY;
        if (doti[i].dotX < 0 || doti[i].dotX > 800) {
            doti[i].moveX = -doti[i].moveX;
        }
        if (doti[i].dotY < 0 || doti[i].dotY > 500) {
            doti[i].moveY = -doti[i].moveY;
        }
    }
}