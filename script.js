//your JS code here. If required.
const start = document.getElementById("start");
const firstPage = document.getElementById("firstPage");
const gamePage = document.getElementById("gamePage");
gamePage.style.display="none";
let firstUser = true;
	
function startGame(){
	const first_player = document.getElementById("player1").value;
	const sec_player = document.getElementById("player2").value;
	if(first_player!=="" && sec_player !==''){
		firstPage.style.display="none";
		gamePage.style.display="block";
		const message_container = document.createElement('div');
		message_container.classList.add('message')
		message_container.textContent=`${first_player}, you're up`;		
		gamePage.appendChild(p)
		const game_container = document.createElement('div');
		
		
	}
}
start.addEventListener("click", startGame)