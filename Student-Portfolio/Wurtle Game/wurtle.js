
// RANDOM NUMBER GENERATOR
var arrayIndex = Math.floor(Math.random() * 370);

const words = [
    "ABHOR", "ABORT", "ABUSE", "ACRES", "ABOVE", "ACHES", "AGONY", "ALBUM", "AWOKE", "AUDIT",
    "ABACK", "AZURE", "AXLES", "AWFUL", "AWARD", "AVERT", "ATONE", "AUDIO", "ASKED", "ARROW",
    "BACKS", "BADLY", "BANJO", "BAYOU", "BEING", "BEFIT", "BELOW", "BIRCH", "BLIND", "BLITZ",
    "BRUTE", "BLACK", "BOAST", "BADGE", "BASIC", "BACON", "BROWN", "BRAWL", "BONED", "BLINK",
    "CAPED", "CAULK", "CHILD", "CHEWY", "CLEAR", "CLOTH", "COUPE", "CRANE", "CRUST", "CUSHY",
    "CAMEL", "CYCLE", "CANOE", "CARGO", "CHAMP", "CLAMP", "CLOUD", "COMBS", "CORAL", "CROWD",
    "DAILY", "DEATH", "DECOY", "DEPTH", "DIVOT", "DOING", "DWARF", "DRONE", "DOZEN", "DANCE",
    "DECAF", "DEPOT", "DIMES", "DIRTY", "DODGE", "DOOZY", "DRAFT", "DRYER", "DRUGS", "DAIRY",
    "EARTH", "EBONY", "EDICT", "ENTRY", "EXTRA", "EMOTE", "ETHIC", "EXUDE", "EARLY", "ELBOW",
    "EAGLE", "EIGHT", "EMAIL", "EMBER", "ENEMY", "EXIST", "EYING", "EXILE", "EQUIP", "ENVOY",
    "FACTS", "FAVOR", "FROST", "FILMY", "FLIRT", "FORUM", "FRONT", "FRYER", "FUNKY", "FELON",
    "FABLE", "FAULT", "FERAL", "FIELD", "FIFTY", "FIXES", "FLASK", "FLUKE", "FOULS", "FUELS",
    "GALOP", "GAVEL", "GECKO", "GIANT", "GLAZE", "GRANT", "GUILD", "GROWL", "GRIND", "GRAVY",
    "GAWKS", "GLARE", "GREED", "GLOVE", "GROOM", "GOLFS", "GRAPH", "GRUNT", "GUEST", "GROUP",
    "HABIT", "HAWKS", "HEIST", "HERTZ", "HUMAN", "HUSKY", "HOWDY", "HOTEL", "HORSE", "HIKER",
    "HALOS", "HAUNT", "HEARD", "HEAVY", "HIKED", "HOBBY", "HONOR", "ALBUM", "HUMID", "HYENA",
    "IDEAL", "ICONS", "INDEX", "INFER", "INKED", "IVORY", "IRATE", "INSET", "IMAGE", "IMPLY",
    "JOCKY", "JUICE", "JUMBO", "JOKER", "JOUST", "QUIET", "QUEST", "QUAIL", "QUILT", "QUICK",
    "KNIFE", "UNFIT", "ULCER", "URINE", "USHER", "USING", "UNZIP", "UPSET", "ULTRA", "KIOSK",
    "LACES", "LAUGH", "LEASH", "LEMON", "LIMBO", "LIVER", "LOSER", "LONGS", "LEGAL", "LAYER",
    "LABOR", "LANKY", "LAYUP", "LIKEN", "LITER", "LUCID", "LUNGS", "LYING", "LURCH", "LIMBS",
    "MAGIC", "MANGO", "MELON", "MOCHA", "MOVIE", "MULCH", "MUTED", "MINCE", "MARSH", "MANOR",
    "MADLY", "MANLY", "MERCY", "MILKY", "MINOR", "MOGUL", "MONEY", "MOURN", "MUCUS", "MORON",
    "NASTY", "NEWLY", "NOTES", "NUDGE", "NYLON", "NOTCH", "NOMAD", "NOBLE", "NAKED", "NACHO",
    "NOISE", "NOVEL", "NAVEL", "NEIGH", "NOTED", "NUTTY", "NERDS", "NAMED", "NEWTS", "NINJA",
    "OFTEN", "OCEAN", "ORBIT", "ORCAS", "OUGHT", "OWNED", "OVARY", "OUNCE", "ORATE", "ONSET",
    "PERKY", "PESTO", "PHONE", "PILOT", "PIGMY", "PIXEL", "PLATE", "POLKA", "PATCH", "POURS",
    "PARTY", "PAWNS", "PERIL", "PHONE", "PIGMY", "PILAF", "PINTO", "PLANT", "PLUMB", "POOCH",
    "RADIO", "RANGE", "RAPID", "REPLY", "RESIN", "RHYME", "ROUTE", "RUGBY", "RIDGE", "RISKY",
    "RABID", "RANKS", "RECAP", "REIGN", "REUSE", "RISEN", "ROUGE", "RURAL", "RIGOR", "RHINO",
    "SHARP", "SHELF", "SHINE", "SLICE", "SOLID", "SPACE", "STAND", "STONE", "SCOLD", "SPOUT",
    "SALAD", "SAUCY", "SCALD", "SCARF", "SCARE", "SCOPE", "SEIZE", "SHACK", "SHAFT", "SIXTY",
    "TABLE", "TOWER", "THANK", "TINGE", "TOUGH", "TRACK", "TRULY", "TWICE", "TYPES", "TAXES",
    "TAUNT", "TEETH", "TENOR", "THEIF", "THICK", "TIPSY", "TORSO", "TOWER", "TRIAL", "TURBO",
    "VALUE", "VAULT", "VIGOR", "VOCAL", "VOICE", "VOWEL", "VIXEN", "VINYL", "VIDEO", "VENOM",
    "WAIST", "WEDGE", "WHITE", "WHISK", "WOMEN", "WORLD", "WRONG", "WRECK", "WIMPY", "WIDTH",
    "YAWNS", "YOUNG", "YACHT", "YEARN", "ZEBRA", "ZESTY", "EXACT", "ANGRY", "CHEAT", "REACT",
]




document.getElementById("guessBtn").disabled = true;
var letterRow = 1;
var letterCol = 0;
function keyboard(letter) {

    var letterString = `btn${letter}`;
    var letterButton = document.getElementById(letterString);
    

    if (letter === 'xxx') {
        if(letterCol != 0)
        {
            letterCol--;

            letterButton.animate({
                transform: 'translateX(-.5em) scaleX(1.1)',
            }, {
                //easing: "ease-out", 
                duration: 100,      
                iterationCount: 1,
            });

            let rowID = `r${letterRow}c${letterCol}`;
            var square = document.getElementById(rowID);
            square.innerHTML = "";
            document.getElementById("guessBtn").disabled = true;

            square.animate({
                transform: 'scale(0.96)',
            }, {
                delay: 0,          
                easing: "ease-in-out", 
                duration: 100,        
                iterationCount: 1,     
            });
        } 
    }
    else {
        if (letterCol < 5) {

            letterButton.animate({
                transform: 'translateY(-1em) scaleY(1.1) scaleX(1.1)',
            }, {
                //easing: "ease-out", 
                duration: 100,      
                iterationCount: 1,
            });

            let rowID = `r${letterRow}c${letterCol}`;
            var square = document.getElementById(rowID);
            square.innerHTML = letter;

            square.animate({
                borderBottomColor: ["white", "rgb(163, 163, 163)"],
                borderTopColor: ["white", "rgb(163, 163, 163)"],
                borderLeftColor: ["white", "rgb(163, 163, 163)"],
                borderRightColor: ["white", "rgb(163, 163, 163)"],
                backgroundColor: ["rgba(255, 255, 255, 0.24)", "rgba(163, 163, 163, 0)"]
            }, {
                delay: 0,            
                easing: "ease-in-out", 
                duration: 400,      
                iterationCount: 1,    
            });

            square.animate({
                transform: 'scale(1.05)',
            }, {
                easing: "ease-in-out", 
                duration: 200,      
                iterationCount: 1,
            });

            letterCol++;
        }
    }
    if (letterCol == 5) {
        document.getElementById("guessBtn").disabled = false;
    }
}

function nextLine() { 
    letterCol = 0;
    letterRow++;
    document.getElementById("guessBtn").disabled = true;
}


var guesses = 1;
//var word = "DEEDS";
var word = words[arrayIndex];
var wordCheck = word;
function submitGuess() {

    var correctCount = 0;

    // =========================================================
    /* This section of code checks to see if the word is valid, 
    but I can only check against my list of words. In order to 
    get it working correctly, I would need a massive, inclusive
    list of 5 letter words to check against */
    
    // let userWord = "";
    // for (let col = 0; col < 5; col++) {
    //     let rowID = `r${guesses}c${col}`;
    //     userWord += document.getElementById(rowID).innerHTML;
    // }

    // let validWord = false;
    // for (let ii = 0; ii < 220; ii++) {
    //     if (userWord == words[ii]) validWord = true;
    // }
    // if (validWord == false) alert("Invalid Word");
    // =========================================================

    if (guesses < 7) {
        // this for loop finds correct letters in correct spots, 
        // then replaces that letter in wordCheck with an underscore
        // in order to check against that in next for loop
        for (let col = 0; col < 5; col++) {
            let rowID = `r${guesses}c${col}`;
            let letterSq = document.getElementById(rowID).innerHTML;
            let keyboardBtnID = `btn${letterSq}`;
            if (letterSq === word[col]) {
                wordCheck = wordCheck.replace(letterSq, "_");
            }
        }

        // This for loop does the actual verification.
        for (let col = 0; col < 5; col++) {
            
            let rowID = `r${guesses}c${col}`;
            let letterSq = document.getElementById(rowID).innerHTML;
            let keyboardBtnID = `btn${letterSq}`;

            // Turn square green if the letters match in the square and word
            if (word[col] === letterSq) {
                document.getElementById(keyboardBtnID).style.animation = "rightSpotKeyboard 1s forwards";
                document.getElementById(rowID).style.animation = "rightSpot 1s forwards";
                correctCount++;

                if (correctCount == 5) {
                    $(document).ready(function()
                    {
                        setTimeout(function()
                        {
                            document.getElementById("gameOverMsg").innerHTML = "You WIN!";
                            document.getElementById("gameOver").style.display = "block";
                            document.getElementById("keyboard").style.display = "none";
                        }, 
                        1000);
                    });   
                }
            }

            // Make square yellow if wordCheck contains the letter.
            // This allows for words with more than one of the same letter.
            else if (wordCheck.includes(letterSq)) {
                correctCount = 0;
                document.getElementById(keyboardBtnID).style.animation = "rightLetterKeyboard 1s forwards";
                document.getElementById(rowID).style.animation = "rightLetter 1s forwards";
                wordCheck = wordCheck.replace(letterSq, "_");
            }

            // If the word does not contain the letter, then:
            // The square is gray and the keyboard button is disabled.
            // If the word DOES contain the letter, the next 'else if' is run.
            else if (word.includes(letterSq) == false) {
                correctCount = 0;
                document.getElementById(rowID).style.animation = "wrongLetter 1s forwards";
                document.getElementById(keyboardBtnID).style.animation = "wrongLetterKeyboard 1s forwards";
                document.getElementById(keyboardBtnID).onclick = null;
            }

            // If the word DOES contain the letter (and previous 'else if' is bypassed) BUT the wordCheck does NOT,
            // then the square is grayed out but the keyboard is unchanged.
            // This is because the word has more than one of the same letter.
            // This accounts for the user entering multiples of the same letter.
            else if (wordCheck.includes(letterSq) == false) {
                correctCount = 0;
                document.getElementById(rowID).style.animation = "wrongLetter 1s forwards";
            }  
        }

        wordCheck = word;

        guesses++;
        if (guesses == 7 && correctCount < 5) {
            $(document).ready(function()
            {
                setTimeout(function()
                {
                    document.getElementById("showWord").innerHTML = "The word was: " + word;
                    document.getElementById("gameOver").style.backgroundColor = "rgb(83, 83, 83)";
                    document.getElementById("gameOver").style.display = "block";
                    document.getElementById("keyboard").style.display = "none";
                }, 
                1000);
            });     
        }
    }
}


let directionCounter = 0;
function showDirections(clickCounter) {
    directionCounter += clickCounter;
    let directions = document.getElementById("directions");
    if (directionCounter % 2 != 0) {
        directions.style.display = "block";

        directions.animate({
            opacity: 1,
        }, {
            easing: "ease-in", 
            duration: 200,      
            iterationCount: 1,
            fill: "forwards",
        });
    }
    else {
        directions.animate({
            opacity: 0,
        }, {
            easing: "ease-in", 
            duration: 200,      
            iterationCount: 1,
            fill: "forwards",
        });
        $(document).ready(function()
            {
                setTimeout(function()
                {
                    hideDirections(); 
                }, 
                200);
            }); 
    }
}

function hideDirections() {
    document.getElementById("directions").style.display = "none";
    directionCounter = 0;
}
