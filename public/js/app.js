console.log('app.js');

$(".wrapper").click(function(event) {
  queryGame(event.target);
});

$('.new-game-btn').on('click', function (){
    newGame();
});
