let b1 = document.getElementById("box1");
let b2 = document.getElementById("box2");
let b3 = document.getElementById("box3");
let btn1 = document.getElementById("button1");
let btn2 = document.getElementById("button2");
let p4 = document.getElementById("p4")
let chance = Math.random();

btn1.addEventListener('click', AddCredits);
btn2.addEventListener('click', PlayGame);

function AddCredits(){
    if (isNaN(b1.value) || Number(b1.value) <= 0){
        alert("Your input is not valid");
        return;
    }
    b3.value = Number(b3.value) + Number(b1.value);
}

function PlayGame(){
    if (isNaN(b2.value) || Number(b2.value) <= 0){
        alert("Your input is not valid");
        return;
    }    
    if (Number(b2.value) > Number(b1.value)){
        alert("The number cannot be greater than the credits!");
        return;
    }
    if (chance < 0.4){
        p4.innerHTML = "You Win!";
        b3.value = Number(b3.value) + Number(b2.value);
    } else if (chance < 0.6) {
        p4.innerHTML = "You Lose!";
        b3.value = Number(b3.value) - Number(b2.value);
    }

    b2.value = "";
}