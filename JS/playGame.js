function playGame(userChoice) {
    const options = ["rock", "paper", "scissors"];
    const cpuChoice = options[Math.floor(Math.random() * options.length)];
  
    console.log("You have selected:", userChoice);
    console.log("CPU has selected::", cpuChoice);
  
    if (userChoice === cpuChoice) {
      console.log("It's a tie!");
    } else if (
      (userChoice === "rock" && cpuChoice === "scissors") ||
      (userChoice === "paper" && cpuChoice === "rock") ||
      (userChoice === "scissors" && cpuChoice === "paper")
    ) {
      console.log("You win!");
    } else {
      console.log("CPU wins!");
    }
  }
  
  // Example usage
  const userInput = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
  playGame(userInput);
 