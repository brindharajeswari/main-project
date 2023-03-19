
game plan
*********

3*3 grid
start game (player1 nd 2)
take turns(x and o)
win condition - 3 (rows/columns/diagonal) - for loop
declare result (win/lost/draw)
game over

-----------------------------------------------------------

HTML
*****

link - java script and style.css
h1 - game name (Tic tac toe)
create 3*3 grid
 -div class grid container
 -create 9 cells with cellid
check status of game
 -X's or O's turn
 -player1 or player2 wins!
 -game draw
Restart button
 -restart the game 

-------------------------------------------------------------

Java script
***********

1) variables for players (x and 0) - let  current player is x
2) add event listener - player clicks on each square(for each),statuscheck
3) function()  //to check status (win or lose or draw)
   *initializing game
   *clicking cell
   *updating cell
   *changing player
   *checking winner
   *retarting game
4) loop {} - flow of the game
   *for loop - for wincondition
functionalities - restart game, to display winner, to track score

-----------------------------------------------------------------

CSS
****

cell - 9 cells
 -display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
grid container
 -position: relative;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(3, auto);
  justify-content: center;  
body
h1
button
 -border radius:25px
statusCheck
 - display:flex;
   justify-content: center;
   top : 15px;
   left :160px;

   -webkit-text-stroke: #ff4757; 
    animation: blinker 2s step-start infinite     //blink effect

@keyframes blinker {
    50%{
        opacity: 0;
    }   

-----------------------------------------------------------

initializing the Game - init()
clicking cells[0-8]
updating cell[0-8]
change players (x,o) - take turns
check winner (won/lost/draw)
restart - play again


git repo link : https://github.com/brindharajeswari/main-project
link to the game : https://brindharajeswari.github.io/main-project/