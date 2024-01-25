let totalPlayers;
let players = [];

document.getElementById("startGameBtn").addEventListener("click", startGame);
document
  .getElementById("assignNumbersBtn")
  .addEventListener("click", assignNumbers);
document
  .getElementById("resetNumbersBtn")
  .addEventListener("click", resetNumbers);
//adding focus on the total players field in the starting
   document.getElementById("totalPlayers").focus();
   document.getElementById("aboutAppSection").style.display = "block";


function startGame() {
  const totalPlayersInput = document.getElementById("totalPlayers");
  totalPlayers = parseInt(totalPlayersInput.value);

  if (isNaN(totalPlayers) || totalPlayers <= 0) {
    alert("Please enter a valid number of players.");
    return;
  }

  // Display player input section
  document.getElementById("playerListContainer").style.display = "block";
  document.getElementById("resetNumbersBtn").style.display = "none";
   document.getElementById("inputSection").style.display = "none";

  // Create input fields for player names
  const playerList = document.getElementById("playerList");
  playerList.innerHTML = "";
  for (let i = 1; i <= totalPlayers; i++) {
    const li = document.createElement("li");
    li.innerHTML = `<label for="player${i}">Player ${i}:</label><input type="text" placeholder="Enter player name" id="player${i}" required>`;
    playerList.appendChild(li);
  }
       document.getElementById("aboutAppSection").style.display = "none";
  // Focus on the first input field
  document.getElementById("player1").focus();
  document.getElementById("assignNumbersBtn").style.display = "block";
}


function assignNumbers() {
  players = [];

  // Collect player names
  for (let i = 1; i <= totalPlayers; i++) {
    const playerName = document.getElementById(`player${i}`).value;
    players.push({ name: playerName, number: 0 });
  }

  // Generate an array of unique random numbers within the range of totalPlayers
  const uniqueRandomNumbers = [];
  for (let i = 1; i <= totalPlayers; i++) {
    let randomNum;
    do {
      randomNum = Math.floor(Math.random() * totalPlayers) + 1;
    } while (uniqueRandomNumbers.includes(randomNum));
    uniqueRandomNumbers.push(randomNum);
  }

  // Assign unique random numbers to players
  for (let i = 0; i < totalPlayers; i++) {
    players[i].number = uniqueRandomNumbers[i];
  }

  // Display the assigned numbers
  const playerList = document.getElementById("playerList");
  playerList.innerHTML = "";
  players.forEach((player, index) => {
    const li = document.createElement("li");
    li.textContent = `Player ${index + 1}: ${player.name} - Number: ${
      player.number
    }`;
    playerList.appendChild(li);
  });

  // Show the Reset button
  document.getElementById("resetNumbersBtn").style.display = "block";
  //hide assign button 
      document.getElementById("assignNumbersBtn").style.display = "none";

}

function resetNumbers() {
  // Reset the display
  document.getElementById("playerList").innerHTML = "";
  document.getElementById("resetNumbersBtn").style.display = "none";
    document.getElementById("assignNumbersBtn").style.display = "none";
    document.getElementById("playerListContainer").style.display = "none";

  document.getElementById("inputSection").style.display = "block";
  // Reset the total players input
  document.getElementById("totalPlayers").value = "";
   document.getElementById("totalPlayers").focus();
   document.getElementById("aboutAppSection").style.display = "block";

  // Hide the player input section
  document.getElementById("playerInputs").style.display = "none";

}
