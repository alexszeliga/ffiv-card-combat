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
var chars = {
    cecil: {
        name: "Cecil",
        hp: 120,
        ap: 8,
        cp: undefined,
        img: "assets/images/cecil.jpg",
        usrChar: false,
        isAlive: true,
    },

    rydia: {
        name: "Rydia",
        hp: 100,
        ap: undefined,
        cp: 5,
        img: "assets/images/rydia.jpg",
        usrChar: false,
        isAlive: true,
    },

    tellah: {
        name: "Tellah",
        hp: 150,
        ap: 8,
        cp: 20,
        img: "assets/images/tellah.jpg",
        usrChar: false,
        isAlive: true,
    },

    edge: {
        name: "Edge",
        hp: 190,
        ap: undefined,
        cp: 25,
        img: "assets/images/edge.jpg",
        usrChar: false,
        isAlive: true,
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
    var card = $("<div class='char-card' id='" + charObj.name +"'>");
    var nameLabel = $("<h5 class='char-card-label'>" + charObj.name + "</h5>");
    var image = $("<img src="+charObj.img+" class='char-card-img'/>");
    var hp = $("<h5 class='char-card-hp'>HP: "+charObj.hp+"</h5>")
    card.append(image);
    card.append(nameLabel);
    card.append(hp);
    return card;
}

// these are going to be global variables for the characters game cards



pageElements.charBox.prepend(fighterCard(chars.edge));
pageElements.charBox.prepend(fighterCard(chars.cecil));
pageElements.charBox.prepend(fighterCard(chars.rydia));
pageElements.charBox.prepend(fighterCard(chars.tellah));

$(".char-card").on("click", function () {
switch ($(this).attr("id")) {
    case "Edge":
    // edge's case
    console.log("You clicked Edge");
    break
    case "Rydia":
    // rydia's case
    console.log("You clicked Rydia");
    break
    case "Tellah":
    // tellah's case
    console.log("You clicked Tellah");
    break
    case "Cecil":
    // cecil's case
    console.log("You clicked Cecil");
    break
}
});