
let locx = 4;
let locy = 7;
console.log(allLocations[locx][locy].getColor())
console.log(allLocations[locx][locy].getText())
const inputElement = document.getElementById('ginput');
const vocalbulary = ["NORTH or N, SOUTH or S","WEST or W, EAST or E", "TAKE (object) or T (object)", "DROP (object) or D (object)", "USE (object) or U (object)"
, "GOSSIPS or G, VOCABULARY or V"]
const gossips = ["The  woodcutter lost  his home key...", "The butcher likes fruit... The cooper", "is greedy... Dratewka plans to make a", "poisoned  bait for the dragon...  The", 
"tavern owner is buying food  from the", "pickers... Making a rag from a bag..."]


function handleInput(event) {
    let keyPressed = event.key;
    console.log(keyPressed);
    switch(keyPressed) {
        case "Enter":
            console.log(inputElement.innerHTML)
            nextLocation(inputElement.innerHTML );
            inputElement.innerHTML = "";
            break;
        case "Backspace":
            inputElement.innerHTML = inputElement.innerHTML.slice(0, -1);
            break;
        case " ":
            if(inputElement.innerHTML.length > 0)
            { inputElement.innerHTML += " ";  }
            break;
        default:
            if(keyPressed.toUpperCase() !== keyPressed.toLowerCase() && keyPressed.length === 1)
            {
                inputElement.innerHTML += keyPressed.toUpperCase();
            }
            else {
                break;
            }
            
    }
}

function czoloweczka() {
    document.getElementById('source').src = './gfx/czolowka.jpg';
    var audio = new Audio('./data/audio/intro.mp3');
    audio.play();
    let click_keydown = [];
    
    window.addEventListener('keydown', function(e) {
        if(e) {
            click_keydown.push(e.key);
            console.log(click_keydown);
            if(click_keydown.length === 1) {
                document.getElementById('source').src = './gfx/opis_A.jpg';
            }
            if(click_keydown.length === 2) {
                document.getElementById('source').src = './gfx/opis_B.jpg';
            }
            if(click_keydown.length > 2) {
                audio.pause()
                document.getElementById('czolowka').style.display = 'none';
                document.getElementById('game').style.display = 'inherit';
                window.removeEventListener('keydown', arguments.callee); 
                document.getElementById('locationimg').style.background = allLocations[locx][locy].getColor();
                document.getElementById('text').innerHTML = allLocations[locx][locy].getText();
                document.getElementById('locationimg').src = `./gfx/${locx}${locy}.gif`;
                window.addEventListener('keydown', handleInput);
            }
        }
    });
     window.removeEventListener('click', czoloweczka);
     window.removeEventListener('keydown', czoloweczka)
}
document.getElementById('source').src = './gfx/czolowka.jpg';
window.addEventListener('click', czoloweczka);
window.addEventListener('keydown', czoloweczka);
const badway = "You can't go that way...";
const wrongcmd = "Try another command or use V...";


function nextLocation(direction) {
   
    if (direction === "NORTH" || direction === "N") {
        let options = allLocations[locx][locy].getDirections();
        console.log(options)
        if (options.includes("NORTH")) {
            locx--;
            goinsomewhere("north")
            setTimeout(() => {
                console.log(allLocations[locx][locy].itemid)
                if(allLocations[locx][locy].itemid!==undefined) {
                    let item = finditem(allLocations[locx][locy].itemid)
                    console.log(item)
                    addItem(item.getfname())
                    updateUI(locx, locy)
                }
                else {
                updateUI(locx, locy) }
                }, 1000);
        }
        else {
            wrongCommand(badway)
        }
    }
    else if (direction === "SOUTH" || direction === "S") {
        let options = allLocations[locx][locy].getDirections();
        console.log(options)
        if (options.includes("SOUTH")) {
            locx++;
            goinsomewhere("south")
            setTimeout(() => {
                console.log(allLocations[locx][locy].itemid)
                if(allLocations[locx][locy].itemid!==undefined) {
                    let item = finditem(allLocations[locx][locy].itemid)
                    console.log(item)
                    addItem(item.getfname())
                    updateUI(locx, locy)
                }
                else {
                updateUI(locx, locy) }
                }, 1000);
        }
        else
        {
            wrongCommand(badway);
        }
    }
    else if (direction === "WEST" || direction === "W") {
        let options = allLocations[locx][locy].getDirections();
        console.log(options)
        if (options.includes("WEST")) {
            locy--;
            goinsomewhere("west")
            setTimeout(() => {
                console.log(allLocations[locx][locy].itemid)
                if(allLocations[locx][locy].itemid!==undefined) {
                    let item = finditem(allLocations[locx][locy].itemid)
                    console.log(item)
                    addItem(item.getfname())
                    updateUI(locx, locy)
                }
                else {
                updateUI(locx, locy) }
                }, 1000);
        }
        else {
            wrongCommand(badway)
        }
    }
    else if (direction === "EAST" || direction === "E") {
        let options = allLocations[locx][locy].getDirections();
        console.log(options)
        if (options.includes("EAST")) {
            locy++;
            goinsomewhere("east")
            setTimeout(() => {
                console.log(allLocations[locx][locy].itemid)
                if(allLocations[locx][locy].itemid!==undefined) {
                    let item = finditem(allLocations[locx][locy].itemid)
                    addItem(item.getfname())
                    updateUI(locx, locy)
                }
                else {
                updateUI(locx, locy) }
                }, 1000);
        }
        else {
            wrongCommand(badway)
        }
    }
    else if (direction === "V" || direction === "VOCABULARY")
    {
        showvocorgoss(vocalbulary); //fix css
    }
    else if (direction === "G" || direction === "GOSSIPS")
    {
        showvocorgoss(gossips); //fix css
    }
    else {
        wrongCommand(wrongcmd);
    }
}
