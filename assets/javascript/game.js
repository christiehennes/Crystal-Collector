

//Declare game object with all functions except crystal click function

let game = {

    wins: 0,
    losses: 0,
    currentCount: 0,
    numberToGuess: 0,

    crystalImages:
    [
        "./assets/images/crystal1.png",
        "./assets/images/crystal2.png",
        "./assets/images/crystal3.png",
        "./assets/images/crystal4.png",

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

    //Generate the number the user needs to get to 
    generateTargetNumber: function() {

        this.numberToGuess = Math.floor(Math.random() * 102) + 19;
        console.log("Number to guess: " + this.numberToGuess);
        $("#number-to-guess").html(this.numberToGuess);
    
    },

    //Function to display the crystal images dynamically 
    displayCrystalImages: function(){
        //Set variable to crystals div
        let crystals = $("#crystals");

        //Generate img for each crystal
        for (let i = 0; i < this.crystalImages.length; i++){
            let image = $("<img>");
            image.addClass("crystal-image");

            //Each imageCrystal will be given a src link to the crystal image
            image.attr("src", this.crystalImages[i]);

            //This data attribute will be set equal to the array value
            image.attr("data-crystalvalue", this.crystalValues[i]);

            //Lastly, each crystal image (with all it classes and attributes) will get added to the page
            crystals.append(image);
        }
    },

    //Generate the values assigned to each crystal and assign them
    generateCrystalValues: function(){

        //Clear out previous random crystal values
        this.crystalValues = [];

        //Generate random values for crystals
        for (let i=0; i < this.crystalImages.length; i++){
            let value = Math.floor(Math.random() * 12 + 1);
            this.crystalValues.push(value);
            console.log("Value of cyrstal: " + this.crystalValues[i]);
        }
    },

    //Update the scores on the page
    updateScores: function(){

        $("#wins").html(this.wins);
        $("#losses").html(this.losses);
        $("#current-score").html(this.currentCount);

    },

    // Perform the addition of crystal values to get the current score 
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


    //Check to see if the user won the game
    wonGame: function(){

        this.wins++;
        this.currentCount = 0;
        this.updateScores();
        this.generateCrystalValues();
        this.generateTargetNumber();

    },

    //Check to see if the user lost the game 
    lostGame: function(){

        this.losses++;
        this.currentCount = 0;
        this.updateScores();
        this.generateCrystalValues();
        this.generateTargetNumber();

    }

}


//Originally initalize the game with all original values
game.initalizeGame();


//Handle the button click by passing the crystal value to the function to process it 
$("#crystals").on("click", ".crystal-image", function(){

    console.log("Clicked a stone");

    //Grab the value of the clicked image 
    let crystalValue = ($(this).attr("data-crystalvalue"));
    console.log("Value of clicked crystal: " + crystalValue);

    game.addCrystalValue(crystalValue);

});



