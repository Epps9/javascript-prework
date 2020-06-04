function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}



let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove = 'papier';
} else if (randomNumber == 3) {
	computerMove = 'nożyce';
}
*/

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(randomNumber);

let getMoveName = randomNumber;

if(getMoveName == 2) {
	getMoveName = 'papier'; 
} else if (getMoveName == 3) {
	getMoveName = 'nożyce';
}

/*
if(playerInput == '1'){
  playerMove = 'kamień';
} else if (randomNumber == 2) {
	computerMove = 'papier';
} else if (randomNumber == 3) {
	computerMove = 'nożyce';
}
*/

printMessage('Twój ruch to: ' + playerMove);



function getMoveName(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	} else {
	  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	  return 'nieznany ruch';
	}
  }

function displayResult(argComputerMove, argPlayerMove) {
	if (argComputerMove == 'kamień'&& argPlayerMove == 'papier') {
		printMessage('Ty wygrywasz!')
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
		printMessage('Ups, tym razem komputer wygrywa!')
	} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
		printMessage('Remis!')
	} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
		printMessage('Ups, tym razem komputer wygrywa!')
	} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
		printMessage('Ty wygrywasz!')
	} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
		printMessage('Remis!')
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
		printMessage('Ups, tym razem komputer wygrywa!')
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
		printMessage('Ty wygrywasz!')
	} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
		printMessage('Remis!')
	} else (argPlayerMove == 'nieznany ruch') {
		printMessage(Możesz wpisać jednynie liczny 1, 2 lub 3);
}
displayResult (argComputerMove, argComputerMove);