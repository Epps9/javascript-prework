{
clearMessages ();
const playGame = function (playerInput) {

	const randomNumber = Math.floor(Math.random() * 3 + 1);
	
	const computerMove = getMoveName(randomNumber);

	printMessage('Mój ruch to: ' + computerMove);
	

	const playerMove = getMoveName(playerInput);

	printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove, playerMove) ;
	

	function getMoveName(argMoveId){
		if(argMoveId == 1){
		return 'kamień';
		} else if(argMoveId == 2) {
			return 'papier';
		} else if(argMoveId == 3) {
			return 'nożyce';
		}
	
		printMessage('Nie znam ruchu o id ' + argMoveId + '.');
		return 'nieznany ruch';
	}
	function displayResult(computerMove, playerMove) {
		if (computerMove == 'kamień' && playerMove == 'papier'){
			printMessage('Ty wygrywasz!');
		} else if (computerMove === 'kamień' && playerMove === 'nożyce') {
			printMessage('Przegrywasz!');
		} else if (computerMove === 'kamień' && playerMove === 'kamień') {
			printMessage('Remis!');
		} else if (computerMove === 'papier' && playerMove === 'nożyce') {
			printMessage('Ty wygrywasz!');
		} else if (computerMove === 'papier' && playerMove === 'kamień') {
			printMessage('Przegrywasz!');
		} else if (computerMove === 'papier' && playerMove === 'papier') {
			printMessage('Remis!');
		} else if (computerMove === 'nożyce' && playerMove === 'kamień') {
			printMessage('Ty wygrywasz!');
		} else if (computerMove === 'nożyce' && playerMove === 'papier') {
			printMessage('Przegrywasz!');
		} else if (computerMove === 'nożyce' && playerMove === 'nożyce') {
			printMessage('Remis!');
		}
	}

}
  
  const rockBtn = document.getElementById('play-rock');
  rockBtn.addEventListener('click', function() {
	playGame(1);
  });
  
  const paperBtn = document.getElementById('play-paper');
  paperBtn.addEventListener('click', function() {
	  playGame(2);
  });
  
  const scissorsBtn = document.getElementById('play-scissors');
  scissorsBtn.addEventListener('click', function() {
	  playGame(3);
  });
}
