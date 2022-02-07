
// RANDOM NUMBER GENERATOR
var arrayIndex = Math.floor(Math.random() * 220);

const words = [
    "ABHOR", "ABORT", "ABUSE", "ACRES", "ABOVE", "ACHES", "AGONY", "ALBUM", "AWOKE", "AUDIT",
    "BRUTE", "BLACK", "BOAST", "BADGE", "BASIC", "BACON", "BROWN", "BRAWLS", "BONED", "BLINK",
    "CAPED", "CAULK", "CHILD", "CHEWY", "CLEAR", "CLOTH", "COUPE", "CRANE", "CRUST", "CUSHY",
    "DAILY", "DEATH", "DECOY", "DEPTH", "DIVOT", "DOING", "DWARF", "DRONE", "DOZEN", "DANCE",
    "EARTH", "EBONY", "EDICT", "ENTRY", "EXTRA", "EMOTE", "ETHIC", "EXUDE", "EARLY", "ELBOW",
    "FACTS", "FAVOR", "FROST", "FILMY", "FLIRT", "FORUM", "FRONT", "FRYER", "FUNKY", "FELON",
    "GALOP", "GAVEL", "GECKO", "GIANT", "GLAZE", "GRANT", "GUILD", "GROWL", "GRIND", "GRAVY",
    "HABIT", "HAWKS", "HEIST", "HERTZ", "HUMAN", "HUSKY", "HOWDY", "HOTEL", "HORSE", "HIKER",
    "IDEAL", "ICONS", "INDEX", "INFER", "INKED", "IVORY", "IRATE", "INSET", "IMAGE", "IMPLY",
    "JOCKY", "JUICE", "JUMBO", "JOKER", "JOUST", "QUIET", "QUEST", "QUAIL", "QUILT", "QUICK",
    "KNIFE", "UNFIT", "ULCER", "URINE", "USHER", "USING", "UNZIP", "UPSET", "ULTRA", "KIOSK",
    "LACES", "LAUGH", "LEASH", "LEMON", "LIMBO", "LIVER", "LOSER", "LONGS", "LEGAL", "LAYER",
    "MAGIC", "MANGO", "MELON", "MOCHA", "MOVIE", "MULCH", "MUTED", "MINCE", "MARSH", "MANOR",
    "NASTY", "NEWLY", "NOTES", "NUDGE", "NYLON", "NOTCH", "NOMAD", "NOBLE", "NAKED", "NACHO",
    "OFTEN", "OCEAN", "ORBIT", "ORCAS", "OUGHT", "OWNED", "OVARY", "OUNCE", "ORATE", "ONSET",
    "PERKY", "PESTO", "PHONE", "PILOT", "PIGMY", "PIXEL", "PLATE", "POLKA", "PATCH", "POURS",
    "RADIO", "RANGE", "RAPID", "REPLY", "RESIN", "RHYME", "ROUTE", "RUGBY", "RIDGE", "RISKY",
    "SHARP", "SHELF", "SHINE", "SLICE", "SOLID", "SPACE", "STAND", "STONE", "SCOLD", "SPOUT",
    "TABLE", "TOWER", "THANK", "TINGE", "TOUGH", "TRACK", "TRULY", "TWICE", "TYPES", "TAXES",
    "VALUE", "VAULT", "VIGOR", "VOCAL", "VOICE", "VOWEL", "VIXEN", "VINYL", "VIDEO", "VENOM",
    "WAIST", "WEDGE", "WHITE", "WHISK", "WOMEN", "WORLD", "WRONG", "WRECK", "WIMPY", "WIDTH",
    "YAWNS", "YOUNG", "YACHT", "YEARN", "ZEBRA", "ZESTY", "EXACT", "AVERT", "CHEAT", "REACT",
]




// ENTER key triggers the GUESS button
// var input = document.getElementById("inputText");
// input.addEventListener("keyup", function(event) {
//   if (event.key === 'Enter') {
//     event.preventDefault();
//     document.getElementById("guessBtn").click();
//   }
// });


var letterRow = 1;
var letterCol = 0;
function keyboard(letter) {

    if (letter === 'xxx') {
        if(letterCol != 0)
        {
            letterCol--;
            let rowID = `r${letterRow}c${letterCol}`;
            document.getElementById(rowID).innerHTML = "";
        } 
    }
    else {
        if (letterCol < 5) {
            let rowID = `r${letterRow}c${letterCol}`;
            document.getElementById(rowID).innerHTML = letter;
            letterCol++;
        }
    }
}

function nextLine() { 
    letterCol = 0;
    letterRow++;
}

var guesses = 1;
function submitGuess() {
    var word = words[arrayIndex];
    var correctCount = 0;
    if (guesses < 7) {
        for (let col = 0; col < 5; col++) {
            
            let rowID = `r${guesses}c${col}`;
            let letterSq = document.getElementById(rowID).innerHTML;
            let keyboardBtnID = `btn${letterSq}`;
            if (letterSq === word[col]) {
                
                document.getElementById(keyboardBtnID).style.animation = "rightSpotKeyboard 1s forwards"
                document.getElementById(rowID).style.animation = "rightSpot 1s forwards"
                correctCount++;

                if (correctCount == 5) {
                    $(document).ready(function()
                    {
                        setTimeout(function()
                        {
                            alert("You WIN!");
                        }, 
                        1400);
                    });   
                }
            }
            else if (word.includes(letterSq)) {
                document.getElementById(keyboardBtnID).style.animation = "rightLetterKeyboard 1s forwards"
                document.getElementById(rowID).style.animation = "rightLetter 1s forwards"
                correctCount = 0;
            }
            else {
                document.getElementById(keyboardBtnID).style.animation = "wrongLetterKeyboard 1s forwards"
                document.getElementById(rowID).style.animation = "wrongLetter 1s forwards"
                correctCount = 0;
            }
        }
        guesses++;
        if (guesses == 7 && correctCount < 5) {
            $(document).ready(function()
            {
                setTimeout(function()
                {
                    alert("You LOSE.");
                }, 
                400);
            });    
        }
    }
}


