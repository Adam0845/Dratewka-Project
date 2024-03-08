let locx = 4;
let locy = 7;
console.log(allLocations[locx][locy].getColor())
console.log(allLocations[locx][locy].getText())
const inputElement = document.getElementById('ginput');
const vocalbulary = ["NORTH or N, SOUTH or S","WEST or W, EAST or E", "TAKE (object) or T (object)", "DROP (object) or D (object)", "USE (object) or U (object)"
, "GOSSIPS or G, VOCABULARY or V"]
const gossips = ["The  woodcutter lost  his home key...", "The butcher likes fruit... The cooper", "is greedy... Dratewka plans to make a", "poisoned  bait for the dragon...  The", 
"tavern owner is buying food  from the", "pickers... Making a rag from a bag..."]
//content 
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
const badway = "You can't go that way...";
const wrongcmd = "Try another command or use V...";
window.addEventListener('keydown', handleInput);
document.getElementById('locationimg').style.background = allLocations[locx][locy].getColor()
document.getElementById('text').innerHTML = allLocations[locx][locy].getText();
document.getElementById('locationimg').src = `./gfx/${locx}${locy}.gif`;
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
            updateUI(locx, locy)
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
                updateUI(locx, locy)
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
                updateUI(locx, locy)
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
