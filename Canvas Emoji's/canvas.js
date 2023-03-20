let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let b1 = document.getElementById("bt1");
let b2 = document.getElementById("bt2");
let b3 = document.getElementById("bt3");
let b4 = document.getElementById("bt4");
let b5 = document.getElementById("bt5");

b1.addEventListener('click', smileyFace);
b2.addEventListener('click', neutralFace);
b3.addEventListener('click', frowningFace);
b4.addEventListener('click', smileUp);
b5.addEventListener('click', smileDown);

function smileyFace() {

    ctx.clearRect(0, 0, 600, 350);
    ctx.beginPath();
    ctx.arc(250, 200, 80, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250, 220, 40, 0, Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(220, 180, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(280, 180, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();



}

function neutralFace() {

    ctx.clearRect(0, 0, 600, 350);
    ctx.beginPath();
    ctx.arc(250, 200, 80, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(220, 230);
    ctx.lineTo(280, 230);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(220, 180, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(280, 180, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

}

function frowningFace() {

    ctx.clearRect(0, 0, 600, 350);
    ctx.beginPath();
    ctx.arc(250, 200, 80, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250, 240, 30, Math.PI, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(220, 180, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(280, 180, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

}

function smileUp() {

    ctx.clearRect(0, 0, 600, 350);
    ctx.beginPath();
    ctx.arc(250, 150, 80, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250, 160, 40, 0, Math.PI);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(220, 120, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(280, 120, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();




}

function smileDown() {

    ctx.clearRect(0, 0, 600, 350);
    ctx.beginPath();
    ctx.arc(250, 250, 80, 0, 2 * Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(250, 270, 40, 0, Math.PI);
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(220, 230, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(280, 230, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();
    ctx.closePath();


}