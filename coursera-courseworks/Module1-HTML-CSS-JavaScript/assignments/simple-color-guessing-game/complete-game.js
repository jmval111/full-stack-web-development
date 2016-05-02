var colors = ['Aqua', 'Blue', 'Indigo', 'LightSeaGreen', 'Navy', 'Red', 'Teal'];
var answer = Math.floor(Math.random() * (colors.length));
var guess = "";
var success = false;
var no_of_guess = 0;
var last_time = Date.now();
colors.sort();
colors = colors.map(function(c) {
  return c.toLowerCase();
})

var gameOn = function () {
  alert("The answer is " + colors[answer] + '.');
  
  while (!success) {

    // check if the user disable the dialog box
    if ((Date.now() - last_time) < 200) {
      success = false;
      break;
    }
    last_time = Date.now();

    no_of_guess++;
    console.log('# of guesses: ' + no_of_guess);
    guess = prompt("I am thinking of one of there colors: \n\n" + 
      colors.join(', ') + "\n\n" +
      "What color am I thinking of?");

    //check the guessing
    success = checkGuess(guess)

  }

  if (success) {
    var myBody = document.getElementsByTagName("body")[0];
    myBody.style.background = guess;
    alert("You are right!!!! You took " + no_of_guess + " guesses!");
  } else {
    document.write('<h1 style="text-align: center;">You disable the dialog box, close the tag and try again.</h1>')
  }
}
// passing a string of color as a guess
var checkGuess = function(g_str) {
  if (colors.indexOf(g_str) < 0) {
    // unregonized guess..
    alert("Sorry, I don't regonize your guessing.. \n\n" + 
      "Please try again.")
    return false;
  } else if (colors.indexOf(g_str) == answer) {
    // correct guessing
    return true;
  } else {
    if (g_str > colors[answer]) {
      alert("Sorry, your guess is not correct! \n\n" + 
        "Hint: your color is alphabetically higher than mine.\n\n" + 
        "Please try again.")
    } else {
      alert("Sorry, your guess is not correct! \n\n" + 
        "Hint: your color is alphabetically lower than mine.\n\n" + 
        "Please try again.")
    }
  }
}