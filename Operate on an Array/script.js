let b1 = document.getElementById("bt1");
let b2 = document.getElementById("bt2");
let b3 = document.getElementById("bt3");
let b4 = document.getElementById("bt4");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");

let v1 = document.getElementById("val1");
let v2 = document.getElementById("val2");

b1.addEventListener("click", pushArray);
b2.addEventListener("click", removeElement);
b3.addEventListener("click", showElement);
b4.addEventListener("click", reverseArray);

let myArray = [];

function pushArray() {
    myArray.push(v1.value);
    p1.innerHTML = myArray;
}

function removeElement() {
    myArray.pop();
    p1.innerHTML = myArray;
}

function showElement() {
    let show = v2.value;
    let i = show - 1;

    if (i >= 0 && i < myArray.length) {
        p2.innerHTML = "The number " + show + " element is " + myArray[i];
    }
}

function reverseArray() {
    myArray.reverse();
    p3.innerHTML = "["+ myArray + "]";
}