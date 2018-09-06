var INADERS_ROWS = 3;
var INVADERS_COLUMNS = 6;
var X_AXIS = 0;
var Y_AXIS = 0;
var MOVE_TO_RIGHT = true;

var canvas = document.getElementById('invadersSpawn');
var invader = document.createElement("img");

invader.src = './img/invader.png';
invader.className = 'invader';

console.log(canvas.getBoundingClientRect())

var reset = function() {
    X_AXIS = 0;
    Y_AXIS = 0;
    MOVE_TO_RIGHT = true;
    canvas.style.marginLeft = 0;
    canvas.style.marginTop = 0;
    window.clearInterval(invaders);
    moveInvaders();
    console.log('Restart');
}

var spawnInvaders = function () {

    for (var i = 0; i < INADERS_ROWS; i++) {
        if (i > 0) canvas.appendChild(document.createElement("br").cloneNode(true));

        for (var j = 0; j < INVADERS_COLUMNS; j++) {
            invader.id = "row" + i + "col" + j;
            canvas.appendChild(invader.cloneNode(true));
        }
    }
}

var invaders = setInterval(function () {
        if (MOVE_TO_RIGHT == true) {
            X_AXIS = X_AXIS + 10;
            canvas.style.marginLeft = X_AXIS;
            if (canvas.style.marginLeft === '380px') {
                MOVE_TO_RIGHT = false;
                Y_AXIS = Y_AXIS + 50;
                canvas.style.marginTop = Y_AXIS;
            } 
            else if (canvas.style.marginTop === '600px') {
                reset()
            }

        } else if (MOVE_TO_RIGHT == false) {
            X_AXIS = X_AXIS - 10;
            canvas.style.marginLeft = X_AXIS;

            if (canvas.style.marginLeft === '0px') {
                MOVE_TO_RIGHT = true;
                Y_AXIS = Y_AXIS + 50;
                canvas.style.marginTop = Y_AXIS;
            } 
            else if (canvas.style.marginTop === '600px') {
                reset();
            }
        }

    }, 500);

var moveInvaders = function () {
    invaders;
};


window.onload = function () {
    spawnInvaders();
    moveInvaders();
}
