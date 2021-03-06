var view = {
    // this method takes a string message and displays it
    // in the message display area

    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },
    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
};


view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("Tap tap, is this thing on?");


var model = {
    boardSize: 7, //the size of the grid used for the board
    numShips: 3, // the number of ships in the game
    shipLength: 3, // the number of locations in each ship
    shipsSunk: 0, // keeps the current number of ships that have been sunk by the player

    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
            { locations: ["24", "34", "44"], hits: ["", "", ""] },
            { locations: ["10", "11", "12"], hits: ["", "", ""] }],
    
    fire: function (guess) {
        
        for (var i = 0; i < this.numShips; i++){
            var ship = this.ships[i];
            locations = ship.locations;
            var index = locations.indexOf(guess);
            if (index >= 0) {
                // We have a hit!
            }
        }
    }

};