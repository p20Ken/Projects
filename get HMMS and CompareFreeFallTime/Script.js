function getHMS() {
    let a = Number(prompt('Enter a number(0-86399) for the seconds.'));
    let hours = Math.floor((a / 3600) % 60);
    let minutes = Math.floor((a / 60) % 60);
    let seconds = (a % 60);
    let time = hours + ':' + minutes + ':' + seconds;
    alert(a + ' seconds' + ' after' + ' 12:00AM' + ' is ' + time);
}

function calculateFreeFallTime(height, initialVelocity, gravity) {
    let freefalltime = (Math.sqrt(initialVelocity^2 + 2 * gravity * height) - initialVelocity) / gravity;
    return freefalltime;
}

function compareFreeFallTime() {
    let planet1 = prompt('Enter the name of the first planet');
    let height1 = Number(prompt('Enter the height of the free fall in meters on planet ' + planet1));
    let initialVelocity1 = Number(prompt('Enter the initial downward velocity in meters/sec on planet ' + planet1));
    let gravity1 = Number(prompt('Enter the gravity in meters/sec^2 on planet ' + planet1));
    let planet2 = prompt('Enter the name of the second planet');
    let height2 = Number(prompt('Enter the height of the free fall in meters on planet ' + planet2));
    let initialVelocity2 = Number(prompt('Enter the initial downward velocity in meters/sec on planet ' + planet2));
    let gravity2 = Number(prompt('Enter the gravity in meters/sec^2 on planet ' + planet2));
    let freefallplanet1 = Number(calculateFreeFallTime(height1, initialVelocity1, gravity1))
    freefallplanet1 = freefallplanet1.toPrecision(2);
    let freefallplanet2 = Number(calculateFreeFallTime(height2, initialVelocity2, gravity2))
    freefallplanet2 = freefallplanet2.toPrecision(2);
    alert('The free fall time on an object on planet ' + planet1 + ' without air from the height of ' + height1 + ' with initial downward velocity of ' + initialVelocity1 + ' is approximately ' + freefallplanet1 + ' seconds,' + ' while the free fall time of an object on planet ' + planet2 + ' without air from the height of ' + height2 + ' with initial downward velocity of ' + initialVelocity2 + ' is approximately ' + freefallplanet2 + ' seconds');

}

