let bx1 = document.getElementById('box1');
let bn1 = document.getElementById('button1');
let p1 = document.getElementById('p1');
bn1.addEventListener('click', checkNum);

function checkNum() {
    if (isNaN(bx1.value)) {
        p1.innerHTML = "Your input is not a number.";
    } else {
        checkNumIf(bx1.value);
    }
}

function checkNumIf(value) {
    if (value < 1 || value > 5) {
        p1.innerHTML = "It is not a number in the given range.";
    }
    else if (value % 2) {
        p1.innerHTML = "It is an odd number.";
    }
    else
        p1.innerHTML = "It is an even number.";
}

function checkNumSwitch() {
    switch (p1.innerHTML) {
        case 0: 
            console.log('it is not a number in the given range');
            break;
        case 1:
            console.log('it is an odd number.');
            break;
        case 2:
            console.log('it is an even number.');
            break;
    }

}
