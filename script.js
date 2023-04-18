// variables for players (x and 0)
// add event listener - player clicks on cells(for each cell), status)
// func - to check status (win or lose or draw)
// for loop - win condition [] - flow of the game 



const cells = document.querySelectorAll(".cell");
const statusCheck = document.querySelector("#statusCheck");
const restartButton = document.querySelector("#restartButton");
const X = "images/x.gif";
const O = "images/o.gif";
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;


// initializing the Game
// clicking cells[0-8]
// updating cell[0-8]
// changing players (x,0) - take turns
// check winner (won/lost/draw) 
// restart - play again

initGame();

function initGame() {
    cells.forEach(cell => cell.addEventListener('click', cellClicked))
    restartButton.addEventListener('click', restartGame)
    statusCheck.textContent = `${currentPlayer}'s turn`
    running = true;
}


function cellClicked() {
    const cellId = this.getAttribute("cellId")
    if (options[cellId] != "" || !running) {
        return;
    }

    updateCell(this, cellId);
    checkWinner();

}

function updateCell(cell, id) {
    options[id] = currentPlayer;
    const img = new Image(145, 145);      // width, height - css
    if (currentPlayer == 'X') {
        img.src = X + '?v=' + Date.now();   //time stamp- to load gif img in all cells
    } else {
        img.src = O + '?v=' + Date.now();
    }
    cell.appendChild(img);

}

function changePlayer() {

    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusCheck.textContent = `${currentPlayer}'s turn`;

}

function checkWinner() {

    let roundWon = false;

    for (let i = 0; i < winCondition.length; i++) {
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if (cellA == "" || cellB == "" || cellC == "") {
            continue;
        }

        if (cellA == cellB && cellB == cellC) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        let winningText = ' wins!!!'
        if (currentPlayer == 'X') {
            winningText = 'Player1' + winningText;
        } else {
            winningText = 'Player2' + winningText;
        }
        statusCheck.textContent = winningText;
        running = false;
    }

    else if (!options.includes("")) {
        statusCheck.textContent = `Game Draw`;
        running = false;
    }
    else {
        changePlayer();
    }
}

function restartGame() {

    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusCheck.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}

var trailElements = document.getElementsByClassName('trailElement');
var mouse = { 'x': 100, 'y': 100};
var drag = [0.35,0.3,0.25,0.2];

function updateMouseLocations(e){
  mouse['x'] = e.pageX;
  mouse['y'] = e.pageY;
}

function trailTheElements(){
  for(var x=0; x < trailElements.length; x++){
    trailElements[x] = loop(trailElements[x], x);
  }
  requestAnimationFrame(trailTheElements);
}

function loop(trailElement, i){
    x = parseFloat(trailElement.style.left) || 0;
    y = parseFloat(trailElement.style.top) || 0;


    if(typeof trailElements[i-1] != "undefined"){
      following_x = parseFloat(trailElements[i-1].style.left);
      following_y = parseFloat(trailElements[i-1].style.top);
    } else {
      following_x =  mouse['x'];
      following_y = mouse['y'];
    }


    x_diff = following_x - x;
    y_diff = following_y - y;

    distance_behind = (i == 0) ? 20 : 10

    x_diff = x_diff > 0 ? (x_diff - distance_behind) : (x_diff + distance_behind)
    y_diff = y_diff > 0 ? (y_diff - distance_behind) : (y_diff + distance_behind)

    x_move = x_diff * drag[i];
    y_move = y_diff * drag[i];

    x += x_move
    y += y_move

    trailElement.style.left = x + 'px';
    trailElement.style.top = y + 'px';

    return trailElement;
}

document.onmousemove = updateMouseLocations;
trailTheElements();


  