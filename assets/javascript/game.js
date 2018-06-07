

//Declare game object with all functions except crystal click function

let game = {

    wins: 0,
    losses: 0,
    currentCount: 0,
    numberToGuess: 0,

    crystalImages:
    [
        "./assets/images/crystal1.jpeg",
        "./assets/images/crystal2.jpeg",
        "./assets/images/crystal3.jpeg",
        "./assets/images/crystal4.jpeg",

    ],

    crystalValues: [],


    
    //Functions

    //Initalize Game
    initalizeGame: function() {

        this.generateTargetNumber();
        this.generateCrystals();


    },

    generateTargetNumber: function() {

        this.numberToGuess = Math.floor(Math.random() * 102) + 19;
        console.log("Number to guess: " + this.numberToGuess);
        $("#number-to-guess").html(this.numberToGuess);


    },

    generateCrystals: function(){

        //Clear out previos crystal values
        this.crystalValues = [];

        //Generate random values for crystals

        for (let i=0; i < this.crystalImages.length; i++){
            let value = Math.floor(Math.random() * 13);
            this.crystalValues.push(value);
            console.log("Value of cyrstal: " + this.crystalValues[i]);
        }

        //Set variable to crystals div
        let crystals = $("#crystals");

        //Generate img for each crystal
        for (let i = 0; i < this.crystalImages.length; i++){
            let image = $("<img>");
            image.addClass("crystal-image");

            // Each imageCrystal will be given a src link to the crystal image
            image.attr("src", this.crystalImages[i]);

            // Each imageCrystal will be given a data attribute called data-crystalValue.
            // This data attribute will be set equal to the array value.
            image.attr("data-crystalvalue", this.crystalValues[i]);

            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            crystals.append(image);
        }

    },




    //Generate Number to Guess 

    //Generate value for crystal 

    //Add crystal value --> accepts the value of the button data attribute 

    //Check if won game 

    //
}


game.initalizeGame();


