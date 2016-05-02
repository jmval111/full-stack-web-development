# Simple Color Guessing Game
**Created on:** May 2, 2016
**Last Update:** May 2, 2016

---
This is a javascript game that demonstrates the understanding of basic javascript's control flow, variable, arrays, loops, funcitons... 

###How to
open the html files in the browser.

###Part 1 Requirements.

Your part 1 work should be a simple ‘game’ which uses a loop. In the loop, the player is shown the list of colors and is asked for their guess. However, no feedback is given to the player based upon their input. In other words, the function check_guess() is not required in part 1. The loop finishes when the player enters the correct color.
A summary:

  - Include a list of colors in an array

  - In function do_game():
    - Randomly select one of those colors in the array as the target
    - Display the target (to help with debugging and marking) e.g. alert(target);
    - Go into a loop which
    - Shows the array of colors and asks the player for their guess
    - Stops if the player’s guess is the same as the target

###Part 2 Requirements.

Part 2 is the completed game, as described in the instructions and demonstrated in the accompanying video.
Here is a summary:

- Include a list of colors in an array
- In function do_game():
  - Randomly select one of those colors in the array as the target
  - Optionally: display the target (to help with debugging and marking) e.g. alert(target);
  - Go into a loop which
    - Shows the array of colors and asks the player for their guess
    - Using the function check_guess():
    - Displays a message such as ‘I don’t recognize that color!’ If the text entered by the player is not in the array of colors, OR:
    - Displays a message such as ‘Your input is alphabetically higher than mine!’ if that is true, OR:
    - Displays a message such as ‘Your input is alphabetically lower than mine!’ if that is true, OR:
    - If the player’s input is the same as the target: changes the web page background color to the target color and displays a message which includes the total number of guesses such as ‘You are right! You took 8 guesses!’ 
    - Stops if the player’s input is the same as the target