// Game file:
// What it needs:
// Procedural generation of cards
// Game procedure:
// -make character selection cards
// -on character selection, make enemy cards
// -on enemy selection, create defender card
// -on button click, process fighting


// each character is a an object ref'd as charObj in functions
// which they will be passed to.
var game = {
    // game state will control where we are in the logic
    state: 0,
    cecil: {
        name: "Cecil",
        hp: 120,
        apBase: 8,
        ap: 8,
        cp: 15,
        img: "assets/images/cecil.jpg",

    },

    rydia: {
        name: "Rydia",
        hp: 100,
        apBase: 8,
        ap: 8,
        cp: 5,
        img: "assets/images/rydia.jpg",

    },

    tellah: {
        name: "Tellah",
        hp: 150,
        apBase: 8,
        ap: 8,
        cp: 20,
        img: "assets/images/tellah.jpg",

    },

    edge: {
        name: "Edge",
        hp: 190,
        apBase: 8,
        ap: 8,
        cp: 25,
        img: "assets/images/edge.jpg",

    },

}

// relevant classes going into an object as jQuery elements for organizational 
// and code-readability reasons

var pageElements = {
    gameCol: $(".game-col"),
    charBox: $(".your-char-box"),
    enemyBox: $(".enemy-char-box"),
    defenderBox: $(".dfndr-char-box"),
    restartBox: $(".restart-box"),
}

function testOutput() {
    // for basic functionality testing, I want a console that shows the User Char, 
    // the Enemy Chars and their HP.
}

function fighterCard(charObj) {
    // creates a game card that has a pic, name, and hp display
    // styled and layed out in class "char-card"\
    // todo: add pic, add HP
    var card = $("<div class='char-card' id='" + charObj.name + "'>");
    var nameLabel = $("<h5 class='char-card-label'>" + charObj.name + "</h5>");
    var image = $("<img src=" + charObj.img + " class='char-card-img'/>");
    var hp = $("<h5 class='char-card-hp'>HP: " + charObj.hp + "</h5>")
    card.append(image);
    card.append(nameLabel);
    card.append(hp);
    return card;
}

// these are going to be global variables for the characters game cards

var cecilCard = fighterCard(game.cecil)
var edgeCard = fighterCard(game.edge)
var rydiaCard = fighterCard(game.rydia)
var tellahCard = fighterCard(game.tellah)

// global variables for the user's character (heroChar) and currentDefender

var heroChar;
var currentDefender;

// generate game cards;

pageElements.charBox.prepend(cecilCard);
pageElements.charBox.prepend(edgeCard);
pageElements.charBox.prepend(rydiaCard);
pageElements.charBox.prepend(tellahCard);



$(".char-card").on("click", function () {
    console.log("game.state = " + game.state)
    // TODO use state flag: character selected? defender selected? fighters remain?
    switch (game.state) {
        // nothing has happened yet: 0 is default state
        case 0:
            // change usrChar flag for clicked char
            switch ($(this).attr("id")) {
                case "Edge":
                    // edge's case
                    console.log("You clicked Edge");
                    game.edge.usrChar = true;
                    heroChar = game.edge;
                    pageElements.enemyBox.append(cecilCard);
                    cecilCard.addClass("enemy-card");
                    pageElements.enemyBox.append(rydiaCard);
                    rydiaCard.addClass("enemy-card");
                    pageElements.enemyBox.append(tellahCard);
                    tellahCard.addClass("enemy-card");
                    break
                case "Rydia":
                    // rydia's case
                    console.log("You clicked Rydia");
                    heroChar = game.rydia;
                    pageElements.enemyBox.append(cecilCard);
                    cecilCard.addClass("enemy-card");
                    pageElements.enemyBox.append(edgeCard);
                    edgeCard.addClass("enemy-card");
                    pageElements.enemyBox.append(tellahCard);
                    tellahCard.addClass("enemy-card");
                    break
                case "Tellah":
                    // tellah's case
                    console.log("You clicked Tellah");
                    heroChar = game.tellah;
                    pageElements.enemyBox.append(cecilCard);
                    cecilCard.addClass("enemy-card");
                    pageElements.enemyBox.append(edgeCard);
                    edgeCard.addClass("enemy-card");
                    pageElements.enemyBox.append(rydiaCard);
                    rydiaCard.addClass("enemy-card");
                    break
                case "Cecil":
                    // cecil's case
                    console.log("You clicked Cecil");
                    heroChar = game.cecil;
                    pageElements.enemyBox.append(edgeCard);
                    edgeCard.addClass("enemy-card");
                    pageElements.enemyBox.append(rydiaCard);
                    rydiaCard.addClass("enemy-card");
                    pageElements.enemyBox.append(tellahCard);
                    tellahCard.addClass("enemy-card");
                    break
            }
            game.state = 1;
            // TODO: move char chards to appror
            break
        // userChar flag is set
        case 1:
            // are there any enemies left?
            if (pageElements.enemyBox.find(".enemy-card").length = 0) {
                console.log("game over you win!");
                // TODO: reset button
                // TODO: reset variables
            } else {
                // isolate enemy clicks
                if ($(this).hasClass("enemy-card")) {
                    // set clicked enemy as defender:
                    $(this).addClass("defender-card");
                    pageElements.defenderBox.append($(this));
                    var clickedCardID = $(this).attr("id").toLowerCase();
                    currentDefender = game[clickedCardID];
                    game.state = 2;
                } else {
                    console.log("Please click an enemy card");
                }
            }
            break
        case 2:
            // clicking on a character card here should do nothing,
            // this is where the fighting happens, so look in the 
            // fight button click handler
            break
    }
    console.log("game.state = " + game.state)
});

// fight button click handler
$("#fight-button").on("click", function () {
    // if there is a defender and a hero 
    if (game.state = 2) {
        // subtract hero ap from defender hp
        currentDefender.hp = currentDefender.hp - heroChar.ap;
        // TODO: increase hero ap by apBase
        heroChar.ap = heroChar.ap + heroChar.apBase;
        // TODO: confirm defender is alive
        if (currentDefender.hp > 0) {
            // TODO: subtract defender cp from hero hp
            console.log(heroChar.name + " HP: " + heroChar.hp);
            console.log("Hero AP: " + heroChar.ap);
            console.log(currentDefender.name + " HP: " + currentDefender.hp);

            heroChar.hp = heroChar.hp - currentDefender.cp;

        } else {
            // Kill defender
            pageElements.defenderBox.empty();
            console.log("defender died")
            console.log(pageElements.enemyBox.find(".enemy-card"));
            game.state = 1;
        }
    } else {
        return;
    }
});