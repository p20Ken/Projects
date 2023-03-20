let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let b1 = document.getElementById("bt1")
let b2 = document.getElementById("bt2")

b1.addEventListener('click', square)
b2.addEventListener('click', text)

function wheel() {
   ctx.beginPath();
   ctx.arc(100, 100, 60, 0, 2 * Math.PI);
   ctx.moveTo(40, 100);
   ctx.lineTo(160, 100);

   ctx.moveTo(100, 40);
   ctx.lineTo(100, 160);

   ctx.moveTo(60, 55);
   ctx.lineTo(140, 145);

   ctx.moveTo(60, 145);
   ctx.lineTo(140, 55);

   ctx.stroke();
}

function wheelCar() {
   ctx.beginPath()
   ctx.moveTo(200, 120);
   ctx.lineTo(550, 120);

   ctx.moveTo(200, 75);
   ctx.lineTo(285, 75);

   ctx.moveTo(200, 75);
   ctx.lineTo(200, 120);

   ctx.moveTo(285, 75);
   ctx.lineTo(310, 30);

   ctx.moveTo(460, 75);
   ctx.lineTo(550, 75);

   ctx.moveTo(550, 75);
   ctx.lineTo(550, 120);

   ctx.moveTo(430, 30);
   ctx.lineTo(460, 75);

   ctx.moveTo(310, 30);
   ctx.lineTo(430, 30);

   ctx.moveTo(260, 120)
   ctx.arc(285, 120, 27, 0, 2 * Math.PI);

   ctx.moveTo(285, 92);
   ctx.lineTo(285, 146);

   ctx.moveTo(265, 100);
   ctx.lineTo(305, 140);

   ctx.moveTo(305, 100);
   ctx.lineTo(265, 140);

   ctx.moveTo(435, 120)
   ctx.arc(460, 120, 27, 0, 2 * Math.PI);

   ctx.moveTo(460, 93);
   ctx.lineTo(460, 146);

   ctx.moveTo(440, 100);
   ctx.lineTo(480, 140);

   ctx.moveTo(480, 100);
   ctx.lineTo(440, 140);

   ctx.stroke();
}

function hexShape() {
   ctx.beginPath();
   ctx.moveTo(60, 230);
   ctx.lineTo(90, 180);

   ctx.moveTo(60, 230);
   ctx.lineTo(90, 280);

   ctx.moveTo(90, 280);
   ctx.lineTo(160, 280);

   ctx.moveTo(160, 280);
   ctx.lineTo(190, 230);

   ctx.moveTo(190, 230);
   ctx.lineTo(160, 180);

   ctx.moveTo(160, 180);
   ctx.lineTo(90, 180);

   ctx.stroke();
   console.log(hexShape);
}

function fourStar() {
   ctx.beginPath();

   ctx.moveTo(290, 180);

   ctx.lineTo(300, 225);
   //
   ctx.lineTo(350, 240);

   ctx.lineTo(300, 250);
   //
   ctx.lineTo(290, 300);

   ctx.lineTo(280, 250);

   ctx.lineTo(240, 240);

   ctx.lineTo(280, 225);

   ctx.lineTo(290, 180);

   ctx.stroke();
   console.log(fourStar);
}

function pentaGram() {

   ctx.beginPath();


   ctx.stroke();


   ctx.stroke();

}

function square() {
   ctx.beginPath();
   ctx.fillStyle = "blue";
   ctx.fillRect(399, 199, 102, 102);
   ctx.fillStyle = "red";
   ctx.fillRect(400, 200, 100, 100);
}

function text() {
   ctx.fillStyle = "yellow";
   ctx.strokeStyle = "blue";

   ctx.font = "30px serif";
   ctx.fillText("Shapes are drawn!", 80, 320);
   ctx.strokeText("Shapes are drawn!", 80, 320);
}

function shapes() {
   wheel()
   wheelCar()
   hexShape()
   fourStar()
   pentaGram()
}
shapes()

console.log(c)