
// Shotgun
function P1Shotgun() {
    // Damage Area - based on attacker position
    const column = player1Position.x;
    const row1 = player1Position.y-2;
    const row2 = row1 - 1;
    const cell1 = document.getElementById(`cell-${row1}-${column}`);
    const cell2 = document.getElementById(`cell-${row2}-${column}`);
    cell1.classList.add('highlightPlayer1');
    cell2.classList.add('highlightPlayer1');   
    // Remove highlight, i.e. Attack Delay
    setTimeout(() => {
        cell1.classList.remove('highlightPlayer1');
        cell2.classList.remove('highlightPlayer1');
        // Damage
        if (player2Position.x === column && player2Position.y === row1 || player2Position.x === column && player2Position.y === row2) {
            PlayAudioPlayer2();
            player2HP -= 30;
            if (player2HP < 0) player2HP = 0;
            document.getElementById('HP2').value = player2HP;
        }
    }, 300);
    // Cooldown
    var image = document.getElementById('attack1Player1');
    image.src = "img/battlechips/Shotgun-gray.webp";
    image.style.pointerEvents = 'none';
    setTimeout(function() {
        image.src = "img/battlechips/Shotgun.webp"; 
        image.style.pointerEvents = 'auto';
    }, 1500);
};

function P2Shotgun() {
    // Damage Area - based on attacker position
    const column = player2Position.x;
    const row1 = player2Position.y+2;
    const row2 = row1 + 1;
    const cell1 = document.getElementById(`cell-${row1}-${column}`);
    const cell2 = document.getElementById(`cell-${row2}-${column}`);
    cell1.classList.add('highlightPlayer2');
    cell2.classList.add('highlightPlayer2');   
    // Remove highlight, i.e. Attack Delay
    setTimeout(() => {
        cell1.classList.remove('highlightPlayer2');
        cell2.classList.remove('highlightPlayer2');
        // Damage
        if (player1Position.x === column && player1Position.y === row1 || player1Position.x === column && player1Position.y === row2) {
            PlayAudioPlayer1();
            player1HP -= 30;
            if (player1HP < 0) player1HP = 0;
            document.getElementById('HP1').value = player1HP;
        }
    }, 300);
    // Cooldown
    var image = document.getElementById('attack1Player2');
    image.src = "img/battlechips/Shotgun-gray.webp";
    image.style.pointerEvents = 'none';
    setTimeout(function() {
        image.src = "img/battlechips/Shotgun.webp"; 
        image.style.pointerEvents = 'auto';
    }, 1500);
};

// Sword
function P1Sword() {
    // Damage Area - based on attacker position
    const column = player1Position.x;
    const row = player1Position.y-1;
    const cell = document.getElementById(`cell-${row}-${column}`);
    cell.classList.add('highlightPlayer1');
    // Remove highlight, i.e. Attack Delay
    setTimeout(() => {
        cell.classList.remove('highlightPlayer1');
        // Damage
        if (player2Position.x === column && player2Position.y === row) {
            PlayAudioPlayer2();
            player2HP -= 80;
            if (player2HP < 0) player2HP = 0;
            document.getElementById('HP2').value = player2HP;
        }
    }, 150);
    // Cooldown
    var image = document.getElementById('attack2Player1');
    image.src = "img/battlechips/Sword-gray.webp";
    image.style.pointerEvents = 'none';
    setTimeout(function() {
        image.src = "img/battlechips/Sword.webp"; 
        image.style.pointerEvents = 'auto';
    }, 4000);
};

function P2Sword() {
    // Damage Area - based on attacker position
    const column = player2Position.x;
    const row = player2Position.y+1;
    const cell = document.getElementById(`cell-${row}-${column}`);
    cell.classList.add('highlightPlayer2');
    // Remove highlight, i.e. Attack Delay
    setTimeout(() => {
        cell.classList.remove('highlightPlayer2');
        // Damage
        if (player1Position.x === column && player1Position.y === row) {
            PlayAudioPlayer1();
            player1HP -= 80;
            if (player1HP < 0) player1HP = 0;
            document.getElementById('HP1').value = player1HP;
        }
    }, 150);
    // Cooldown
    var image = document.getElementById('attack2Player2');
    image.src = "img/battlechips/Sword-gray.webp";
    image.style.pointerEvents = 'none';
    setTimeout(function() {
        image.src = "img/battlechips/Sword.webp"; 
        image.style.pointerEvents = 'auto';
    }, 4000);
};

// Evlv (Evolve)
function P1Evolve() {
    if (player1HP < pokemonStats[player1Select.value].treshold * pokemonStats[player1Select.value].hp) {
        player1Select.value = pokemonStats[player1Select.value].evolution;
        updatePlayerImages();
    }
}

function P2Evolve() {
    if (player2HP < pokemonStats[player2Select.value].treshold * pokemonStats[player2Select.value].hp) {
        player2Select.value = pokemonStats[player2Select.value].evolution;
        updatePlayerImages();
    }
}


/* Function snippet for future damage area */
function loopRows() {
    const column = player1Position.x;
    for (let row = 0; row < player1Position.y; row++) {
            const cell = document.getElementById(`cell-${row}-${column}`);
            cell.classList.add('highlightPlayer1');
        }
};