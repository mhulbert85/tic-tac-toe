
const player1 = {
  name: 'Player 1',
  label: 'X',
  img: ''
}

const player2 = {
  name: 'Player 2',
  label: 'O',
  img: ''
}

const players = [ player1 , player2 ];

const switchPlayer = function () {
  players.reverse();
}

//******************************* Query Last Move ****************************//
// Run query on the last move, if statement true the current player wins.

const queryGame = function () {
  if ($('.one').text().includes('X') &&
      $('.two').text().includes('X') &&
      $('.three').text().includes('X')) {
      console.log(`${'Player 1'} wins!`);
    }
    else if ($('.one').text().includes('O') &&
             $('.two').text().includes('O') &&
             $('.three').text().includes('O')) {
             console.log(`${'Player 2'} wins!`);
    }
    else if ($('.four').text().includes('X') &&
             $('.five').text().includes('X') &&
             $('.six').text().includes('X')) {
             console.log(`${'Player 1'} wins!`);
    }
    else if ($('.four').text().includes('O') &&
             $('.five').text().includes('O') &&
             $('.six').text().includes('O')) {
             console.log(`${'Player 2'} wins!`);
    }
    else if ($('.seven').text().includes('X') &&
             $('.eight').text().includes('X') &&
             $('.nine').text().includes('X')) {
             console.log(`${'Player 1'} wins!`);
    }
    else if ($('.seven').text().includes('O') &&
             $('.eight').text().includes('O') &&
             $('.nine').text().includes('O')) {
             console.log(`${'Player 2'} wins!`);
    }
    else if ($('.one').text().includes('X') &&
             $('.four').text().includes('X') &&
             $('.seven').text().includes('X')) {
             console.log(`${'Player 1'} wins!`);
    }
    else if ($('.one').text().includes('O') &&
             $('.four').text().includes('O') &&
             $('.seven').text().includes('O')) {
             console.log(`${'Player 2'} wins!`);
    }
    else if ($('.two').text().includes('X') &&
             $('.five').text().includes('X') &&
             $('.eight').text().includes('X')) {
             console.log(`${'Player 1'} wins!`);
    }
    else if ($('.two').text().includes('O') &&
             $('.five').text().includes('O') &&
             $('.eight').text().includes('O')) {
             console.log(`${'Player 2'} wins!`);
    }
    else if ($('.three').text().includes('X') &&
             $('.six').text().includes('X') &&
             $('.nine').text().includes('X')) {
             console.log(`${'Player 1'} wins!`);
    }
    else if ($('.three').text().includes('O') &&
             $('.six').text().includes('O') &&
             $('.nine').text().includes('O')) {
             console.log(`${'Player 2'} wins!`);
    }
    else if ($('.one').text().includes('X') &&
             $('.five').text().includes('X') &&
             $('.nine').text().includes('X')) {
             console.log(`${'Player 1'} wins!`);
    }
    else if ($('.one').text().includes('O') &&
             $('.five').text().includes('O') &&
             $('.nine').text().includes('O')) {
             console.log(`${'Player 2'} wins!`);
    }
    else if ($('.three').text().includes('X') &&
             $('.five').text().includes('X') &&
             $('.seven').text().includes('X')) {
             console.log(`${'Player 1'} wins!`);
    }
    else if ($('.three').text().includes('O') &&
             $('.five').text().includes('O') &&
             $('.seven').text().includes('O')) {
             console.log(`${'Player 2'} wins!`);
    }
    else {
          draw();
    }
  }

//******************************* Tied Game **********************************//
// Every time a player takes their turn, 1 is added to the game total.
// When the game total has a value of 9 the game is Tied

let total = 1;

const draw = function () {
  const res = total++;
  if (res === 9) {
    alert('Its a draw!');
  }
}

//****************************** CSS Properties ******************************//
// Change marker color and stop further pointer events

const changeClass = function (cell) {

  if ($(cell).text().includes('X')) {
      $(cell).addClass('playerColor1');
      $(cell).removeClass('playerColor2');
    } else if ($(cell).text().includes('O')){
      $(cell).addClass('playerColor2');
      $(cell).removeClass('playerColor1');
    }
 }
















//
