//****************************** Player Objects ******************************//

const playerOne = {
  icon: 'X',
  color: "#24DBA4",
}

const playerTwo = {
  icon: 'O',
  color: "#DB245B",
}

const players = [playerOne, playerTwo];

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
          scoreBoard('.player-1-score');
          players.reverse();
          return;
        } else if (cell[0].text().includes('O') &&
                   cell[1].text().includes('O') &&
                   cell[2].text().includes('O')) {
                   winner(cell[0], cell[1], cell[2]);
                   scoreBoard('.player-2-score');
                   players.reverse();
                   return;
                  }
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
  if ($('.game-one').hasClass('game-over')) {
    alert('winner!');
  } else if (clickCounter === 9 && $('.game-one').hasClass('check-for-draw')) {
    alert('its a draw');
  }
}

//****************************** CSS Properties ******************************//
// Change marker color and stop further pointer events

const changeClass = function (cell) {

  $(cell).text(players[0].icon); // set current player icon

  if ($(cell).text().includes('X')) {
      $(cell).css({"color": playerOne.color}).addClass('player-1');
    } else if ($(cell).text().includes('O')) {
               $(cell).css({"color": playerTwo.color}).addClass('player-2');
              }
}

const winner = function (cell1, cell2, cell3) {

  $(cell1).css({"background-color":"#42b3f5"});
  $(cell2).css({"background-color":"#42b3f5"});
  $(cell3).css({"background-color":"#42b3f5"});
  $('.game-one').removeClass('check-for-draw').addClass('game-over');

  if ($(cell1).text().includes('X')) {
      $('.player-1-wins').css({"display": "flex"});
  }
  if ($(cell1).text().includes('O')) {
      $('.player-2-wins').css({"display": "flex"});
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
// Remove classes and empty game-one
// Reset draw game click counter
// Winner starts the next game

const newGame = function () {
  $('.game-one').addClass('check-for-draw').children().removeClass("player-1 player-2").empty();
  $('.game-one').removeClass('game-over').children().css({"background-color":"white"});
  $('.player-1-wins').css({"display":"none"});
  $('.player-2-wins').css({"display":"none"});
  totalClicks = 1;
  players.reverse();
}

//*********************************** END ************************************//