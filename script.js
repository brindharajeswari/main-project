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
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
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
    if(options[cellId]!= "" || !running) {
        return;
    }

    updateCell(this, cellId);          
    checkWinner();

}

function updateCell(cell, id) {
    options[id] = currentPlayer;
    const img = new Image(145, 145);      // width, height - css
    if(currentPlayer == 'X'){
        img.src = X + '?v=' + Date.now();   //time stamp- to load gif img in all cells
    } else {
        img.src = O + '?v=' + Date.now();
    }
    cell.appendChild(img);

}

function changePlayer(){

    currentPlayer = (currentPlayer =="X") ? "O": "X";
    statusCheck.textContent = `${currentPlayer}'s turn`;

}

function checkWinner() {

    let roundWon = false;

    for(let i=0; i<winCondition.length; i++){
        const condition = winCondition[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }

        if(cellA==cellB && cellB==cellC){
            roundWon = true;
            break;
        } 
    }

    if(roundWon){
        let winningText = ' wins!!'
        if(currentPlayer == 'X'){
            winningText = 'Player1' + winningText;
        } else {
            winningText = 'Player2' + winningText;
        }
        statusCheck.textContent = winningText;
        running = false;
    }

    else if(!options.includes("")) {
        statusCheck.textContent = `Game Draw`;
        running = false;
    }
    else {
        changePlayer();
    }
}

function restartGame(){

    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusCheck.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}