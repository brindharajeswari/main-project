// variables for players (x and 0)
// event listener - player clicks on cells
// func - to check status (win or lose or draw)
// loop - flow of the game
// functionalities - restart game, to display winner, to track score


const cells = document.querySelectorAll(".cell");
const statusCheck = document.querySelector("#status");
const restart = document.querySelector("#restartButton");

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


let options = ["","","","","","","","",""];


// initializing the Game
// clicking cells[0-8]
// updating cell[0-8]
// changing players (x,0) - take turns
// check winner (won/lost/draw)
// restart - play again

