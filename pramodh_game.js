// const ps = require("prompt-sync");

// const prompt = ps();

function computerPlay() {
  let computer;

  //Math.random() always returns a number lower than 1.//
  // Returns a random integer from 0 to 9 //

  var Random = Math.floor(Math.random() * 10);

  if (Random >= 8) {
    computer = "rock";
    return computer;
  } else if (Random < 8 && Random >= 5) {
    computer = "paper";
    return computer;
  } else {
    return (computer = "scissor");
  }
}

function playRound(playerSelection, computerSelection) {
  // computer wins//
  if (playerSelection === computerSelection) {
    return { result: "its a tie" };

    // computer wins//
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return { result: "you lost" };
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return { result: "you lost" };
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return { result: "you lost" };
  }
  // player wins//
  else if (playerSelection === "rock" && computerSelection === "scissor") {
    return { result: "you won" };
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return { result: "you won" };
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return { result: "you won" };
  }
}

function Game() {
  // first input message//
  var Input = prompt(
    "Welcome to Rock, Paper,Scissor !! please type play to play or exit to exit"
  );
  let playerSelection = Input.toLowerCase();

  //condition before entering the game//
  if (playerSelection === "play") {
    var computerScore = 0;
    var playerScore = 0;
    var exit_status;

    var count = 1;

    // game loop//
    while (count <= 5) {
      var input = prompt(
        "enter only either rock,paper or scissor or type exit to exit"
      );

      input = input.toLowerCase();

      if (input === "rock" || input === "paper" || input === "scissor") {
        var round = playRound(input, computerPlay());

        if (round.result === "its a tie") {
          console.log(`Round : ${count} ${round.result}`);
        } else if (round.result === "you won") {
          console.log(`Round : ${count} ${round.result}`);
          playerScore++;
        } else {
          console.log(`Round : ${count} ${round.result}`);
          computerScore++;
        }
        count++;
      } else if (input === "exit") {
        exit_status = true; //input status set to true incase player needs to exit//
        break;
      } else {
        console.log("please enter correct input");
      }
    }
    // final score evaluation based on the game loop//
    if (exit_status != true && computerScore == playerScore) {
      console.log(
        `Its a Tie well played both,Your score : ${playerScore}, Computer score :${computerScore}`
      );
    } else if (exit_status != true && computerScore < playerScore) {
      console.log(
        `You won the game , Well done !! ,Your score : ${playerScore}, Computer score :${computerScore}`
      );
    } else if (exit_status != true && computerScore > playerScore) {
      console.log(
        `You lost the game, better luck next time !! Your score : ${playerScore}, Computer score :${computerScore}`
      );
    }
  }
  console.log("See you later !!");
}

Game();
