// Player starting positions
let player1Position = { x: 0, y: 5 };
let player2Position = { x: 2, y: 0 };

// Default hit points (HP) until NetPkmn is chosen
var player1HP = 1000000;
var player2HP = 1000000;

// Selected NetPkmn to move as constants
const player1Select = document.getElementById('NetPkmnPlayer1');
const player2Select = document.getElementById('NetPkmnPlayer2');

// Function to update player image sources based on select values (deprecated, kept only for evolution() function)
function updatePlayerImages() {
    player1ImageSrc = 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/' + player1Select.value + '.gif';
    player2ImageSrc = 'https://img.pokemondb.net/sprites/black-white/anim/normal/' + player2Select.value + '.gif';
    updatePlayerPosition();
}

// Update the images initially to set the default state
updatePlayerImages();

function startGame() {
    setTimeout(updatePlayerInfo, 3000);
}

function updatePlayerInfo() {
    player1HP = pokemonStats[player1Select.value].hp;
    player2HP = pokemonStats[player2Select.value].hp;
    document.getElementById("HP1").value = player1HP;
    document.getElementById("HP2").value = player2HP;
    player1Select.disabled = true;
    player2Select.disabled = true;
    player1ImageSrc = 'https://img.pokemondb.net/sprites/black-white/anim/back-normal/' + player1Select.value + '.gif';
    player2ImageSrc = 'https://img.pokemondb.net/sprites/black-white/anim/normal/' + player2Select.value + '.gif';
    player1Position = { x: 0, y: 5 };
    player2Position = { x: 2, y: 0 };
    updatePlayerPosition();
    document.getElementById("start-button").style.display="none";
}

// Function to update the player's position on the grid
function updatePlayerPosition() {
    // Clear previous positions
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerHTML = '';
    });

    // Set new positions with images
    const player1Cell = document.getElementById(`cell-${player1Position.y}-${player1Position.x}`);
    const player2Cell = document.getElementById(`cell-${player2Position.y}-${player2Position.x}`);

    var player1Img = document.createElement('img');
    player1Img.src = player1ImageSrc;
    player1Img.classList.add('player-image');

    var player2Img = document.createElement('img');
    player2Img.src = player2ImageSrc;
    player2Img.classList.add('player-image');

    player1Cell.appendChild(player1Img);
    player2Cell.appendChild(player2Img);
}

// Initial setup
updatePlayerPosition();

// Functions to handle player movement
function movePlayer1(direction) {
    switch (direction) {
        case 'up':
            if (player1Position.y > 3) player1Position.y -= 1;
                break;
        case 'down':
            if (player1Position.y < 5) player1Position.y += 1;
                break;
        case 'left':
            if (player1Position.x > 0) player1Position.x -= 1;
                break;
        case 'right':
            if (player1Position.x < 2) player1Position.x += 1;
                break;
    }
    updatePlayerPosition();
}

function movePlayer2(direction) {
    switch (direction) {
        case 'up':
            if (player2Position.y > 0) player2Position.y -= 1;
                break;
        case 'down':
            if (player2Position.y < 2) player2Position.y += 1;
                break;
        case 'left':
            if (player2Position.x > 0) player2Position.x -= 1;
                break;
        case 'right':
            if (player2Position.x < 2) player2Position.x += 1;
                break;
    }
    updatePlayerPosition();
}

// Event listeners for keyboard controls
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            movePlayer1('up');
            break;
        case 'a':
            movePlayer1('left');
            break;
        case 's':
            movePlayer1('down');
            break;
        case 'd':
            movePlayer1('right');
            break;
        case 'f':
            var image = document.getElementById('attack1Player1');
            if (!image.src.endsWith('gray.webp')) {
                P1Shotgun();
            }
            break;
        case 'c':
            var image = document.getElementById('attack2Player1');
            if (!image.src.endsWith('gray.webp')) {
                P1Sword();
            }
            break;
        case '/':
            var image = document.getElementById('attack1Player2');
            if (!image.src.endsWith('gray.webp')) {
                P2Shotgun();
            }
            break;
        case '.':
            var image = document.getElementById('attack2Player2');
            if (!image.src.endsWith('gray.webp')) {
                P2Sword();
            }
            break;
        case 'ArrowUp':
            movePlayer2('up');
            break;
        case 'ArrowLeft':
            movePlayer2('left');
            break;
        case 'ArrowDown':
            movePlayer2('down');
            break;
        case 'ArrowRight':
            movePlayer2('right');
            break;
    }
});

// Play audio when hit  and check HP
function PlayAudioPlayer1() {
    var AudioPlayer1 = document.getElementById('audioPlayer1');
    audioPlayer1.getElementsByTagName('source')[0].src = "audio/" +document.getElementById('NetPkmnPlayer1').value + ".mp3";
    audioPlayer1.load();
    AudioPlayer1.play();
    if (player1HP === 0) {
        alert("Player 2 already won! :-) \n Reload page to play again!")
    }
}

function PlayAudioPlayer2() {
    var AudioPlayer2 = document.getElementById('audioPlayer2');
    audioPlayer2.getElementsByTagName('source')[0].src = "audio/" +document.getElementById('NetPkmnPlayer2').value + ".mp3";
    audioPlayer2.load();
    AudioPlayer2.play();
    if (player2HP === 0) {
        alert("Player 1 already won! :-) \n Reload page to play again!")
    }
}