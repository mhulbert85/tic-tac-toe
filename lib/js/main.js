//****************************** Player Objects ******************************//

const playerOne = {
  icon: 'X',
}

const playerTwo = {
  icon: 'O',
}

const players = [playerOne, playerTwo];

//****************************** Query Last Move *****************************//
// Change the class of the selected cell (disable pointer)
// Run query on the last move, check conditions e.g. win, draw or continue .
// After query switch players.

const queryGame = function (input) {

  changeClass(input)

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
    let str = cell[0].text() + cell[1].text() + cell[2].text()
    if (str.includes('XXX')) return scoreBoard('.p1-score');
    if (str.includes('OOO')) return scoreBoard('.p2-score');
  }
  draw(); //check for tied game  
  players.reverse(); // switch player after query completed
}

//******************************** Draw Game *********************************//
// Every time a player takes their turn, 1 is added to totalClicks.
// When totalClicks has a value of 9 the game is Tied

let totalClicks = 1;

const draw = function () {
  const clickCounter = totalClicks++;
  if (clickCounter === 9 && $('.grid').hasClass('check-for-draw')) alert('its a draw');
}

//****************************** CSS Properties ******************************//
// Change marker color and stop further pointer events

const changeClass = function (cell) {
  const $cell = $(cell)
  $cell.text(players[0].icon); // set current player icon
  if ($cell.text().includes('X')) $cell.addClass('player-1');
  if ($cell.text().includes('O')) $cell.addClass('player-2');
}

//******************************* Score Board ********************************//
// Get current score and increase by 1

const scoreBoard = function (score) {
  let currentScore = Number($(score).text());
  currentScore++;
  currentScore += $(score).text(currentScore);
  $('.grid').removeClass('check-for-draw').addClass('game-over');
  players.reverse();
}

//********************************* New Game *********************************//
// Remove classes and empty grid
// Reset draw game click counter
// Winner starts the next game

const newGame = function () {
  $('.grid').addClass('check-for-draw')
  $('.grid').removeClass('game-over')
  $('.square').children().removeClass("player-1 player-2").empty();
  totalClicks = 1;
  players.reverse();
}

//*********************************** END ************************************//