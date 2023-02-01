function calculateYears() {
    let a = prompt('Please enter a number');
    let futureyear = 2023 + Number(a);
    let pastyear = 2023 - a;
    alert(a + ' years from now is year ' + futureyear + ' ,and ' + a + ' years ago was year ' + pastyear)
}

function rollDice() {
    let b = Math.random() * 5 + 1;
    let c = Math.round(b)
    alert(' The point you get this time is ' + c)
}

function getVolumeOfSphere() {
    let a = prompt('Please enter the radius of the sphere in meters.')
    let b = (4 / 3) * Math.PI * Math.pow(a, 3);
    alert('The volume of a sphere with radius of ' + a + ' m' + ' is ' + b + ' m^3.')
}

function getSeconds() {
    let a = Number(prompt('Enter a number(0-23) for the hour of the current time'))
    let b = Number(prompt('Enter a number(0-59) for the minute of the current time'))
    let c = Number(prompt('Enter a number(0-59) for the second of the current time'))
    let d = (a * 3600) + (b * 60) + c;
    alert(' The current time is ' + a + ':' + b + ':' + c + ' is ' + d + ' after ' + '12:00AM')
}

