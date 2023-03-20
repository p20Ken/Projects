let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let bxt = document.getElementById("bx1").value;
let b1 = document.getElementById("bt1");
let b2 = document.getElementById("bt2");

b1.addEventListener("click", paintDot);
b2.addEventListener("click", paintStar);

function paintDot() {
    bxt = document.getElementById("bx1").value;
    if (isNaN(bxt) || bxt < 1 || bxt > 100) {
        alert("Please enter a valid number between 1 and 100");
        return;
    }
    for (let i = 0; i < bxt; i++) {

        let x = Math.floor(Math.random() * 800);
        let y = Math.floor(Math.random() * 400);

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.arc(x, y, Math.floor(Math.random() * 50) + 5, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
        ctx.fill();
        ctx.clearRect(800, 400, 800, 400)
        ctx.closePath();

    }

}

function paintStar() {
    let bxt = document.getElementById("bx1").value;
    if (isNaN(bxt) || bxt < 1 || bxt > 100) {
        alert("Please enter a valid number between 1 and 100");
        return;
    }

    for (let i = 0; i < bxt; i++) {

        let x = Math.floor(Math.random() * 800);
        let y = Math.floor(Math.random() * 400);
        let r = Math.floor(Math.random() * 46) + 5;
        let w = r * 2

        ctx.beginPath();
        for (let j = 0; j < 5; j++) {
            ctx.moveTo(x + r / 2, y - w)
            ctx.rect(x, y, r, r)

            ctx.lineTo(x, y);
            ctx.moveTo(x + r / 2, y - w)
            ctx.lineTo(x + r, y);
            ctx.lineTo(x, y);

            ctx.moveTo(x + r + w, y + r / 2)
            ctx.lineTo(x + r, y + r);
            ctx.moveTo(x + r + w, y + r / 2)
            ctx.lineTo(x + r, y);
            ctx.lineTo(x + r, y + r);

            ctx.moveTo(x - w, y + r / 2)
            ctx.lineTo(x, y);
            ctx.moveTo(x - w, y + r / 2)
            ctx.lineTo(x, y + r);
            ctx.lineTo(x, y);

            ctx.moveTo(x + r / 2, y + r + w)
            ctx.lineTo(x, y + r);
            ctx.moveTo(x + r / 2, y + r + w)
            ctx.lineTo(x + r, y + r);
            ctx.lineTo(x, y + r);

        }
            ctx.fillStyle = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
            ctx.fill();
            ctx.clearRect(800, 400, 800, 400)
            ctx.closePath();

    }
}
