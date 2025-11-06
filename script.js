//your JS code here. If required.
const submit = document.getElementById("submit");
const firstPage = document.getElementById("firstPage");
const gamePage = document.getElementById("gamePage");
gamePage.style.display="none";
let firstUser = true;
	
function startGame(){
	const first_player = document.getElementById("player1").value.trim();
	const sec_player = document.getElementById("player2").value.trim();
	if(first_player!=="" && sec_player !==''){
		// Hide first page and show game page
		firstPage.style.display="none";
		gamePage.style.display="block";

		// Clear old content if game restarts
	    gamePage.innerHTML = "";
	
	    // Create message container		
		const message_container = document.createElement('div');
		message_container.classList.add('message')
		message_container.textContent=firstUser==true?`${first_player}, you're up` : `${sec_player}, you're up`;		
		gamePage.appendChild(message_container);
		
		const game_container = document.createElement('div');
		game_container.id="game-container";
		const row=3;
		const col = 3;
		game_container.style.gridTemplateColumns = `repeat(${col},1fr)`;
		game_container.style.gridTemplateRows = `repeat(${row},100px)`;

		 // Create and append grid items
	    for (let i = 0; i < row * col; i++) {
			const gridItem = document.createElement('div');
			gridItem.className = 'grid_item';
			gridItem.id = i+1;
			gridItem.style.alignItems = "center";
			gridItem.style.fontSize = "40px";
			gridItem.style.cursor = "pointer";
			game_container.appendChild(gridItem);
	    }
		gamePage.appendChild(game_container);

		const grid_item = document.querySelectorAll('.grid_item')
		grid_item.forEach((item)=>{
			console.log('item,', item)
			item.addEventListener('click',function(){
				if(item.innerText!=='') return
				if(firstUser){
					item.innerText='X';
					item.style.color="black";
					firstUser=false;
					message_container.textContent=`${sec_player}, you're up`
				}else{
					item.innerText='0';
					item.style.color="black";
					firstUser=true;
					message_container.textContent=`${first_player}, you're up`
				}
			})
		})
		
	}
}
submit.addEventListener("click", startGame)