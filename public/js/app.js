console.log('is this on?');

$(".wrapper").click(function(event) {
  queryGame(event.target);
});

$('.new-game').on('click', function (){
    newGame();
});
