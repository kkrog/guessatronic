Project: Guessing Game
You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune). Choose a senario to organize your project. Consider creating all the working JS before moving on to the UI Design. 

Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').
Write a function called guessLetter that willl
Take one argument, the guessed letter.
Iterate through the word letters and see if the guessed letter is in there.
If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works

Wheel of Fortune

Start with a reward amount of $0
Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
When they guess the word, log their final reward amount.
Hangman 

Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log


Bonus: Creating the UI 
      Design an interface to display your game using HTML / CSS. Then after completing your DOM Manipulation exercises, link the JS appropriately to your HTML.
---------------------------
Project: Guessing Game Pt 2
Now that you have created the JavaScript for your Guessing Game lets expand it. Create a UI interface to play your game. 

Then make the game work by adding in JS (this will require some refactoring). 

Additional Functionality: 

1. Your game should keep score OR provide rewards.
    ie: For every correct guess the user will earn points or lose points
    The Score should always be visible to the user. 
2. If a user runs out of guess - the game should end and give the answer (Similar to losing lives in a video game) **Optional**

Note: Creating this game may require some things you aren't familiar with yet. That's okay! Part of being a dev is being able to research and solve problems. So don't be afraid to do some extra research BUT put a time limit on it && don't let it keep you from moving forward! There is always a multitude of ways to solve these problems. 

Happy Coding!
------------------
Game Design Notes:
The GUESSATRONIC robot is on your screen, threatening a randomly displayed imaginary creature. The only way to save the creature is to guess the word and defeat Guessatronic. A correct letter stops the robot from moving, but an incorrect guess moves it closer. If it captures the creature, the game ends.
Easy Level: all words 4 letters or less, no timer, wrong guesses same as twice letters in word;
Medium Level: words up to 6 letters, no timer, wrong guesses same as letters in word;
Hard Level: words 4 to 6 letters, 1 minute timer; wrong guesses 3/4 of word length;
Extreme Level: words 6-8 letters, 30 second timer; wrong guesses half of word length

