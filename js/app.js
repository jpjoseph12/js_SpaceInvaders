var INADERS_ROWS = 3;
var INVADERS_COLUMNS = 6;
var X_AXIS = 0;
var Y_AXIS = 0;
var SPEED = 500;
var BEAM_Y = null;
var PLAYER_X = 347.5;
var MOVE_TO_RIGHT = true;
var INVADERS_INTERVAL = null;
var BEAM_INTERVAL = null;

var invadersSpawn = document.getElementById('invadersSpawn');
var invader = document.createElement('img');
invader.src = './img/invader.png';
invader.className = 'invader';

var playersSpawn = document.getElementById('playersSpawn');
var player = document.createElement('img');
player.src = './img/ship.png';
player.id = 'player';

var beam = document.createElement('img');
beam.src = './img/beam.png';
beam.id = 'beam';

// console.log(invadersSpawn.getBoundingClientRect())

var reset = function() {
    X_AXIS = 0;
    Y_AXIS = 0;
    MOVE_TO_RIGHT = true;
    invadersSpawn.style.marginLeft = 0;
    invadersSpawn.style.marginTop = 0;
    window.clearInterval(INVADERS_INTERVAL);
    moveInvaders();
    console.log('Restart');
}

var spawnInvaders = function () {

    for (var i = 0; i < INADERS_ROWS; i++) {
        if (i > 0) invadersSpawn.appendChild(document.createElement("br").cloneNode(true));

        for (var j = 0; j < INVADERS_COLUMNS; j++) {
            invader.id = "row" + i + "col" + j;
            invadersSpawn.appendChild(invader.cloneNode(true));
        }
    }

    moveInvaders();
}

var moveInvaders = function () {
    INVADERS_INTERVAL = setInterval(function () {
        if (MOVE_TO_RIGHT == true) {
            X_AXIS = X_AXIS + 10;
            invadersSpawn.style.marginLeft = X_AXIS;
            if (invadersSpawn.style.marginLeft === '380px') {
                MOVE_TO_RIGHT = false;
                Y_AXIS = Y_AXIS + 50;
                invadersSpawn.style.marginTop = Y_AXIS;
            } 
            else if (invadersSpawn.style.marginTop === '600px') {
                reset()
            }

        } else if (MOVE_TO_RIGHT == false) {
            X_AXIS = X_AXIS - 10;
            invadersSpawn.style.marginLeft = X_AXIS;

            if (invadersSpawn.style.marginLeft === '0px') {
                MOVE_TO_RIGHT = true;
                Y_AXIS = Y_AXIS + 50;
                invadersSpawn.style.marginTop = Y_AXIS;
            } 
            else if (invadersSpawn.style.marginTop === '600px') {
                reset();
            }
        }

    }, SPEED)
}

var spawnPlayer = function () {
    playersSpawn.appendChild(player);

    movePlayer();
};

var movePlayer = function () {
    player = document.getElementById('player');
    window.addEventListener('keydown', function(event){
        switch(event.code) {
            case "ArrowLeft":
                PLAYER_X = PLAYER_X - 10;
                player.style.left = PLAYER_X;
                console.log(PLAYER_X);
                if (PLAYER_X < 10) PLAYER_X = 10;
                break;
            case "ArrowRight":
                PLAYER_X = PLAYER_X + 10;
                player.style.left = PLAYER_X;
                console.log(PLAYER_X);
                if (PLAYER_X > 680) PLAYER_X = 680;
                break;
            case "Space":
                playerShoot();
                break;
        }
    })
};

var playerShoot = function() {
    playersSpawn.appendChild(beam);
    beam = document.getElementById('beam');
    BEAM_Y = beam.getBoundingClientRect().top;
    BEAM_INTERVAL = setInterval( function (){
        console.log(BEAM_Y);
        document.getElementById('beam').style.top = BEAM_Y - 187;
        BEAM_Y -= 30;
        if (BEAM_Y === 138.25) {
            window.clearInterval(BEAM_INTERVAL);
            var BEAM_INTERVAL = null;
            document.getElementById('beam').style.top = 0;
            BEAM_Y = null;
            playersSpawn.removeChild(beam);
        } 

    }, 250);    
};

    
window.onload = function () {
    // Spawning all invaders
    spawnInvaders();
    spawnPlayer();
    

}
