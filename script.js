//your JS code here. If required.
const start = document.getElementById("start");
const firstPage = document.getElementById("firstPage");
const gamePage = document.getElementById("gamePage");
gamePage.style.display="none";
function startGame(){
	const first_player = document.getElementById("first_player").value;
	const sec_player = document.getElementById("sec_player").value;
	if(first_player!=="" && sec_player !==''){
		firstPage.style.display="none";
		gamePage.style.display="block";
		const messageDiv = document.createElement('div')
		messageDiv.classList.add('message')
		p.textContent=`${first_player}, you're up`;		
		gamePage.appendChild(p)
		
	}
}
start.addEventListener("click", startGame)