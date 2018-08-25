# unit-4-game
A card-combat game that would be a licensing nightmare!

# Play this game on github pages!

[https://alexszeliga.github.io/unit-4-game/](https://alexszeliga.github.io/unit-4-game/)

# Game design notes:
I don't dislike StarWars, but I don't love it, so I'm making a superficial change to the game. It will be Final Fantasy IV based.

# Basic Gameplay:
Attack Power (AP) increases by the base AP every time you attack, so attack power will start very low and will end very high.

Click on a character card to select your hero.
Afterwards, your enemies will move down and change color to signify how evil they've become.

Next, select your enemy, but select wisely. Strategy is largely insignificant, but all players can win.

Once you've selected an enemy, click fight repeatedly until one of the div's is .empty()!

After each fight, you must select a new enemy.

## Characters:

Because this is not an exercise in balancing characters in a card game, I'm going to swipe the values from the example to save time, but I will need to do some gameplay testing to ensure balance because not all of the necessary values are available in the demo.

### Cecil

HP 120
AP 8
CP 15

### Rydia

HP 100
AP 15
CP 5

### Tellah

HP 150
AP 8
CP 20

### Edge

HP 180
AP 8
CP 25
