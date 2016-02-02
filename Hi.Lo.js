// Creates a random number.
var rand = Math.floor((Math.random() * 2) + 1);
var name;

// Function that runs when the user presses "start"
function start() {
// Prompts the user for his name
  name = prompt("Hello, what is your name?");
  var userName = document.getElementById("heading")
  userName.innerHTML = "Hello " + name + ", Welcome to Hi/Lo!";
};

// The function which initiates the game and compares our guess to the random number generated.
function processGuess() {
  var guess = document.getElementById("inputText").value;
  var hint = document.getElementById("hintMessage");
  hint.innerHTML = guess;
  var recent = document.getElementById("inputText").value;
  recentGuess.innerHTML = guess;
  // If the userGuess is lower than the random number the h2 will tell the user their guess is too low.
    if (guess < rand) {
    hint.innerHTML = "Hint: Your guess is too low, please try again."
  };
  // If the userGuess is higher than the random number the h2 will tell the user their guess is too high.
    if (guess > rand) {
    hint.innerHTML= "Hint: Your guess is too high, please try again."
  };
  // If the user guess is equal to the random number the user wins!
    if (guess == rand) {
      hint.innerHTML= "Congrats, victory is yours!"
  };
    guess = document.getElementById("inputText").value = "";
};
