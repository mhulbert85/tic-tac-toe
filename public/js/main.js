//****************************** Player Objects ******************************//

const player1 = {
  icon: 'X',
}

const player2 = {
  icon: 'O',
}

const players = [player1, player2];

//****************************** Query Last Move *****************************//
// Change the class of the selected cell (disable pointer)
// Run query on the last move, check conditions e.g. win, draw or continue .
// After query switch players.

const queryGame = function (input) {

  changeClass(input);
  // All winning combinations
  const combo = [ 
    [$('.one'), $('.two'), $('.three')],
    [$('.four'), $('.five'), $('.six')],
    [$('.seven'), $('.eight'), $('.nine')],
    [$('.one'), $('.four'), $('.seven')],
    [$('.two'), $('.five'), $('.eight')],
    [$('.three'), $('.six'), $('.nine')],
    [$('.one'), $('.five'), $('.nine')],
    [$('.three'), $('.five'), $('.seven')]
  ];

  // Loop through cells and check combinations   
  for (let i = 0; i < combo.length; i++) { 

    let cell = combo[i];
    
    if (cell[0].text().includes('X') &&
        cell[1].text().includes('X') &&
        cell[2].text().includes('X')) {
          winner(cell[0], cell[1], cell[2]);
          scoreBoard('.p1-score');
    } else if (cell[0].text().includes('O') &&
               cell[1].text().includes('O') &&
               cell[2].text().includes('O')) {
                winner(cell[0], cell[1], cell[2]);
                scoreBoard('.p2-score');
    } 
  }   
  draw(); // check for draw
  players.reverse(); // switch player after query completed
}

//******************************** Draw Game *********************************//
// Every time a player takes their turn, 1 is added to the game total.
// When the game total has a value of 9 the game is Tied

let totalClicks = 1;

const draw = function () {
  const clickCounter = totalClicks++;
  if (clickCounter === 9) {
    alert('Its a draw!');
  }
}

//****************************** CSS Properties ******************************//
// Change marker color and stop further pointer events

const changeClass = function (cell) {

  $(cell).text(players[0].icon); // set current player icon

  if ($(cell).text().includes('X')) {
    $(cell).addClass('player-1');
  } else if ($(cell).text().includes('O')) {
    $(cell).addClass('player-2');
  }
}

const winner = function (cell1, cell2, cell3) {

  $(cell1).addClass('winner');
  $(cell2).addClass('winner');
  $(cell3).addClass('winner');
  $('.wrapper').addClass('game-over');

  if ($(cell1).text().includes('X')) {
    $('.modal').addClass('player-1-wins');
  }
  if ($(cell1).text().includes('O')) {
    $('.modal').addClass('player-2-wins');
  }
}

//******************************* Score Board ********************************//
// Get current score and increase by 1

const scoreBoard = function (score) {
  let currentScore = Number($(score).text());
  currentScore++;
  currentScore += $(score).text(currentScore);
}

//********************************* New Game *********************************//
// Remove classes and empty wrapper
// Reset draw game click counter
// Winner starts the next game

const newGame = function () {
  $('.wrapper').children().removeClass("winner player-1 player-2").empty();
  $('.wrapper').removeClass('game-over');
  $('.modal').removeClass("player-1-wins player-2-wins");
  totalClicks = 1;
  players.reverse();
}

//*********************************** END ************************************//