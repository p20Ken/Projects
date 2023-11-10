let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let b1 = document.getElementById("bt1");
let Dots = [];

b1.addEventListener("click", startAnimation);
canvas.addEventListener("click", addDot);

function startAnimation() {
  setInterval(moveDots, 100);
}

function dot(x, y) {

  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();

  x = 0;
  y = 0;
  r = Math.floor(Math.random() * 16) + 5;
  mx = Math.floor(Math.random() * 31) - 15;
  my = Math.floor(Math.random() * 31) - 15;
  color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';


}

function addDot(e) {

  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
  Dots.push({ x, y, r, color });

  rect = canvas.getBoundingClientRect();
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  r = Math.floor(Math.random() * 16) + 5;
  color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
}

function moveDots() {

  ctx.beginPath();
  ctx.arc(dot.x, dot.y, dot.r, 0, 2 * Math.PI);
  ctx.fillStyle = dot.color;
  ctx.fill();
  ctx.closePath();

  for (let i = 0; i < Dots.length; i++) {
    let dot = Dots[i];
    dot.x += dot.mx;
    dot.y += dot.my;

    if (dot.x - dot.r < 0 || dot.x + dot.r > canvas.width) {
      dot.mx = -dot.mx;
      dot.r = Math.floor(Math.random() * 16) + 5;
      dot.color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    }

    if (dot.y - dot.r < 0 || dot.y + dot.r > canvas.height) {
      dot.my = -dot.my;
      dot.r = Math.floor(Math.random() * 16) + 5;
      dot.color = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    }
  }


} 