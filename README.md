# Crystal Collector Game

## Instructions
 
 * When beginning the game, a random number will be generated 
 * Each crystal has a different assigned number 
 * Try to reach the random target number by pressing the different crystals 
 * If you get the number, then you win
 * If you go over the number, you lose 
 * After winning/losing, your score will be updated and a new random number will be generated to keep playing


 ## Project Design

 * I used an object for my game and created various functions to support the different aspects of the game 
 * initalizeGame setups the start of a game by clearing out all previously generated numbers and resets the values of the crystals
 * There are a series of supporting functions that handle adding crystal values to the total count, checking if they won the game, etc. 