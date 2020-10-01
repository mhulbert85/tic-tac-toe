
//***************************** Player Objects *******************************//

const player1 = {
  name: 'Player 1',
  icon: 'X',
//  score: 0,
  img: ''
}

const player2 = {
  name: 'Player 2',
  icon: 'O',
//  score: 0,
  img: ''
}

const players = [ player1 , player2 ];

const switchPlayer = function () {
      players.reverse();
}

//******************************* Query Last Move ****************************//
// Change the class of the selected cell to disabled (pointer)
// Run query on the last move, check conditions e.g. win, draw or continue .
// After query switch players.

const queryGame = function (cell) {

  changeClass(cell);

  if ($('.one').text().includes('X') &&
      $('.two').text().includes('X') &&
      $('.three').text().includes('X')) {
        winner('.one', '.two', '.three');
        scoreBoard('.p1-score');
    }
    else if ($('.one').text().includes('O') &&
             $('.two').text().includes('O') &&
             $('.three').text().includes('O')) {
               winner('.one', '.two', '.three');
               scoreBoard('.p2-score');
    }
    else if ($('.four').text().includes('X') &&
             $('.five').text().includes('X') &&
             $('.six').text().includes('X')) {
               winner('.four', '.five', '.six');
               scoreBoard('.p1-score');
    }
    else if ($('.four').text().includes('O') &&
             $('.five').text().includes('O') &&
             $('.six').text().includes('O')) {
               winner('.four', '.five', '.six');
               scoreBoard('.p2-score');
    }
    else if ($('.seven').text().includes('X') &&
             $('.eight').text().includes('X') &&
             $('.nine').text().includes('X')) {
               winner('.seven', '.eight', '.nine');
               scoreBoard('.p1-score');
    }
    else if ($('.seven').text().includes('O') &&
             $('.eight').text().includes('O') &&
             $('.nine').text().includes('O')) {
               winner('.seven', '.eight', '.nine');
               scoreBoard('.p2-score');
    }
    else if ($('.one').text().includes('X') &&
             $('.four').text().includes('X') &&
             $('.seven').text().includes('X')) {
               winner('.one', '.four', '.seven');
               scoreBoard('.p1-score');
    }
    else if ($('.one').text().includes('O') &&
             $('.four').text().includes('O') &&
             $('.seven').text().includes('O')) {
               winner('.one', '.four', '.seven');
               scoreBoard('.p2-score');
    }
    else if ($('.two').text().includes('X') &&
             $('.five').text().includes('X') &&
             $('.eight').text().includes('X')) {
               winner('.two', '.five', '.eight');
               scoreBoard('.p1-score');
    }
    else if ($('.two').text().includes('O') &&
             $('.five').text().includes('O') &&
             $('.eight').text().includes('O')) {
               winner('.two', '.five', '.eight');
               scoreBoard('.p2-score');
    }
    else if ($('.three').text().includes('X') &&
             $('.six').text().includes('X') &&
             $('.nine').text().includes('X')) {
               winner('.three', '.six', '.nine');
               scoreBoard('.p1-score');
    }
    else if ($('.three').text().includes('O') &&
             $('.six').text().includes('O') &&
             $('.nine').text().includes('O')) {
               winner('.three', '.six', '.nine');
               scoreBoard('.p2-score');
    }
    else if ($('.one').text().includes('X') &&
             $('.five').text().includes('X') &&
             $('.nine').text().includes('X')) {
               winner('.one', '.five', '.nine');
               scoreBoard('.p1-score');
    }
    else if ($('.one').text().includes('O') &&
             $('.five').text().includes('O') &&
             $('.nine').text().includes('O')) {
               winner('.one', '.five', '.nine');
               scoreBoard('.p2-score');
    }
    else if ($('.three').text().includes('X') &&
             $('.five').text().includes('X') &&
             $('.seven').text().includes('X')) {
               winner('.three', '.five', '.seven');
               scoreBoard('.p1-score');
    }
    else if ($('.three').text().includes('O') &&
             $('.five').text().includes('O') &&
             $('.seven').text().includes('O')) {
               winner('.three', '.five', '.seven');
               scoreBoard('.p2-score');
    }
    else {
          draw(); // check for draw
    }
    switchPlayer(); // switch player after query completed
  }

//******************************* Draw Game **********************************//
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

  $(cell).text(players[0].icon);// set current player icon

  if ($(cell).text().includes('X')) {
      $(cell).addClass('playerColor1');
    } else if ($(cell).text().includes('O')){
               $(cell).addClass('playerColor2');
    }
 }

const winner = function (cell1, cell2, cell3) {

  $(cell1).addClass('winner');
  $(cell2).addClass('winner');
  $(cell3).addClass('winner');
  $('.wrapper').addClass('game-over');

  if ($(cell1).text().includes('X')){
      $('.modal').addClass('player-1-wins');
    }
  if ($(cell1).text().includes('O')){
      $('.modal').addClass('player-2-wins');
    }
}

//******************************* Score Board ********************************//
// Get current score and increase by 1

const scoreBoard = function (score) {
  let currentScore = Number($(score).text());
      currentScore ++;
      // localStorage.setItem('saveScore', currentScore);
      // currentScore = localStorage.getItem('saveScore');
      currentScore += $(score).text(currentScore);
  }

//********************************* New Game *********************************//
// get children text elements, remove previous marks set appropriate classes
// reset draw game click counter
// winner starts the next game

const newGame = function () {
  $('.wrapper').children().removeClass('winner').empty();
  $('.wrapper').children().removeClass('playerColor1');
  $('.wrapper').children().removeClass('playerColor2');
  $('.wrapper').removeClass('game-over');
  $('.modal').removeClass('player-1-wins');
  $('.modal').removeClass('player-2-wins');
  totalClicks = 1;
  switchPlayer();
}











//
