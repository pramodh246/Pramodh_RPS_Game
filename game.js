const ps = require("prompt-sync");

const prompt = ps();

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

// object is passed to the function instead of variables as values of outer variables in javascript are not changed by functions
// they are only passed by values. infact, objects are passed by reference.
function playerPlay(final_score) {
  var count = 1;
  // game loop//
  while (count <= 5) {
    var input = prompt(
      "Enter only either rock,paper or scissor or type exit to exit"
    );

    if (input !== null) {
      input = input.toLowerCase().trim();
    }
    if (input === "rock" || input === "paper" || input === "scissor") {
      var round = playRound(input, computerPlay());

      if (round.result === "its a tie") {
        console.log(`Round : ${count} ${round.result}`);
      } else if (round.result === "you won") {
        console.log(`Round : ${count} ${round.result}`);
        final_score.playerScore++;
      } else {
        console.log(`Round : ${count} ${round.result}`);
        final_score.computerScore++;
      }
      count++;
    } else if (input === "exit") {
      //incase player needs to exit//
      return "exit";
    }
  }
}

function userInput() {
  var input;
  do {
    // this function will only return play or exit and will prompt in all other cases//
    input = prompt(
      "Welcome to Rock, Paper,Scissor !! please type play to play or exit to exit"
    );
    if (!input === null) {
      input = input.toLowerCase().trim();
    } else if (input === "exit") {
      input = "exit";
      return input;
    } else if (input === "play") {
      input = "play";
      return input;
    } else {
      input = prompt(
        "Welcome to Rock, Paper,Scissor !! please type play to play or exit to exit"
      );
    }
  } while (input !== "exit" || input === "play");
}

function Game() {
  // first input message validation//
  var playerSelection = userInput();
  var exit_status;

  //condition before entering the game//
  if (playerSelection === "play") {
    var final_score = {
      computerScore: 0,
      playerScore: 0,
    };

    // saperate fuction for player game play//

    exit_status = playerPlay(final_score);

    // final score evaluation based on the game loop//
    if (
      exit_status !== "exit" &&
      final_score.computerScore == final_score.playerScore
    ) {
      console.log(
        `Its a Tie well played both,Your score : ${final_score.playerScore}, Computer score :${final_score.computerScore}`
      );
    } else if (
      exit_status !== "exit" &&
      final_score.computerScore < final_score.playerScore
    ) {
      console.log(
        `You won the game , Well done !! ,Your score : ${final_score.playerScore}, Computer score :${final_score.computerScore}`
      );
    } else if (
      exit_status !== "exit" &&
      final_score.computerScore > final_score.playerScore
    ) {
      console.log(
        `You lost the game, better luck next time !! Your score : ${final_score.playerScore}, Computer score :${final_score.computerScore}`
      );
    } else {
      console.log("See you later !!");
    }
  } else {
    console.log("See you later !!");
  }
}

Game();
