

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
        this.generateCrystalValues();
        this.displayCrystalImages();
        this.updateScores();


    },

    generateTargetNumber: function() {

        this.numberToGuess = Math.floor(Math.random() * 102) + 19;
        console.log("Number to guess: " + this.numberToGuess);
        $("#number-to-guess").html(this.numberToGuess);


    },

    displayCrystalImages: function(){
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

    generateCrystalValues: function(){

        //Clear out previous random crystal values
        this.crystalValues = [];

        //Generate random values for crystals
        for (let i=0; i < this.crystalImages.length; i++){
            let value = Math.floor(Math.random() * 13);
            this.crystalValues.push(value);
            console.log("Value of cyrstal: " + this.crystalValues[i]);
        }

        // //Set variable to crystals div
        // let crystals = $("#crystals");

        // //Generate img for each crystal
        // for (let i = 0; i < this.crystalImages.length; i++){
        //     let image = $("<img>");
        //     image.addClass("crystal-image");

        //     // Each imageCrystal will be given a src link to the crystal image
        //     image.attr("src", this.crystalImages[i]);

        //     // Each imageCrystal will be given a data attribute called data-crystalValue.
        //     // This data attribute will be set equal to the array value.
        //     image.attr("data-crystalvalue", this.crystalValues[i]);

        //     // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
        //     crystals.append(image);
        // }

    },

    updateScores: function(){

        $("#wins").html("Wins: " + this.wins);
        $("#losses").html("Losses: " + this.losses);
        $("#current-score").html(this.currentCount);

    },


    addCrystalValue: function(value){

        
        //Convert value to a number
        let numberValue = Number(value);

        //Add it to your count 
        this.currentCount = this.currentCount + numberValue;
        console.log("Current Count after click: " + this.currentCount);

        //Display your current score 
        $("#current-score").html(this.currentCount);

        //Check to see if you won/lost

        if (this.currentCount === this.numberToGuess){
            console.log("You win");
            this.wonGame();
        }
        else if (this.currentCount > this.numberToGuess){
            console.log("You lost");
            this.lostGame();
        }


    },



    wonGame: function(){

        this.wins++;
        this.currentCount = 0;
        this.updateScores();
        this.generateCrystalValues();
        this.generateTargetNumber();

    },

    lostGame: function(){

        this.losses++;
        this.currentCount = 0;
        this.updateScores();
        this.generateCrystalValues();
        this.generateTargetNumber();

    }

}


game.initalizeGame();



$("#crystals").on("click", ".crystal-image", function(){

    console.log("Clicked a stone");

    //Grab the value of the clicked image 
    let crystalValue = ($(this).attr("data-crystalvalue"));
    console.log("Value of clicked crystal: " + crystalValue);

    game.addCrystalValue(crystalValue);

});



