function play(userChoice) {
    var computerChoice = Math.random() < 0.5 ? "rock" : Math.random() < 0.5 ? "paper" : "scissors";
    var result = "";
    
    if (userChoice === computerChoice) {
      result = "Tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      result = "You win!";
    } else {
      result = "Computer wins!";
    }
    
    document.getElementById("result").innerText = "You chose " + userChoice + ", computer chose " + computerChoice + ". " + result;
  }