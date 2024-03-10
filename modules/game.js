
let locx = 4;
let locy = 7;
console.log(allLocations[locx][locy].getColor())
console.log(allLocations[locx][locy].getText())
const inputElement = document.getElementById('ginput');
const vocalbulary = ["NORTH or N, SOUTH or S","WEST or W, EAST or E", "TAKE (object) or T (object)", "DROP (object) or D (object)", "USE (object) or U (object)"
, "GOSSIPS or G, VOCABULARY or V"]
const gossips = ["The  woodcutter lost  his home key...", "The butcher likes fruit... The cooper", "is greedy... Dratewka plans to make a", "poisoned  bait for the dragon...  The", 
"tavern owner is buying food  from the", "pickers... Making a rag from a bag..."]

let lowercase = false;
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
        case "CapsLock":
        case "Shift":
            lowercase = !lowercase;
            break;
        case "Tab": 
            event.preventDefault();
            break;  
        default:
            if(keyPressed.toUpperCase() !== keyPressed.toLowerCase() && keyPressed.length === 1)
            {
                if(lowercase===true) {
                    inputElement.innerHTML +=  keyPressed.toLowerCase();
                }
                else {
                inputElement.innerHTML += keyPressed.toUpperCase();
                }
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
                document.getElementById('south').style.display = 'block';
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

let inventory = [];
function updateItems() {
    let text = '';
    console.log(allLocations[locx][locy].items)
    for(let i = 0; i < allLocations[locx][locy].items.length; ++i) {
        if(i == allLocations[locx][locy].items.length - 1) {
            text += finditem(allLocations[locx][locy].items[i]).getfname() + '.';
        }
        else {
        text += finditem(allLocations[locx][locy].items[i]).getfname() + ", ";
        }
    }
    if(text!=="") {
        document.getElementById('whatusee').innerHTML = "You see " + text;
    }
    else { 
        document.getElementById('whatusee').innerHTML = "You see nothing.";
    }

}
function updateInventory() {
    if(inventory[0] === undefined) {
        document.getElementById('whatucarry').innerHTML = "You are carrying nothing.";
    }
    else {
        document.getElementById('whatucarry').innerHTML = "You are carrying  " + inventory[0].fname;
    }
}
function nextLocation(direction) {
    direction = direction.toUpperCase()
    if (direction === "NORTH" || direction === "N") {
        let options = allLocations[locx][locy].getDirections();
        console.log(options)
        if (options.includes("NORTH")) {
            locx--;
            goinsomewhere("north")
            setTimeout(() => {
                updateItems()
                console.log(allLocations[locx][locy].items)
                    updateUI(locx, locy)
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
                updateItems()
                console.log(allLocations[locx][locy].items)
                updateUI(locx, locy) }
                , 1000);
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
                updateItems()
                console.log(allLocations[locx][locy].items)
                updateUI(locx, locy) }
                , 1000);
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
                updateItems()
                updateUI(locx, locy)
                    }
                , 1000);
        }
        else {
            wrongCommand(badway)
        }
    }
    else if (direction === "DROP" || direction === "D" || direction === "TAKE" || direction === "T") {
        wrongCommand('Specify item...!');
    }
    else if(direction.startsWith("DROP ") || direction.startsWith("D ")) {
        let parts = direction.split(" ")
        let itemtodrop = parts[1]
        if(inventory[0] === undefined) {
            wrongCommand("You are not carrying anything");
        }
        if(itemtodrop === inventory[0].name) {
            if(allLocations[locx][locy].items.length >= 3) {
                wrongCommand("You can't store any more here");
            }
            else { 
                allLocations[locx][locy].items.push(inventory[0].id);
                inventory[0] = undefined;
                console.log(allLocations[locx][locy].items)
                updateInventory()
                updateItems()
                wrongCommand("You are about to drop " + itemtodrop)
            }
        }
        else {
            wrongCommand("You are not carrying it");
        }
    }
    else if(direction.startsWith("USE ") || direction.startsWith("U ")) {
        let loc = String(locx) + String(locy);
        let parts = direction.split(" ")
        let itemtouse = parts[1]
        if(inventory[0] === undefined || itemtouse !== inventory[0].name) {
            wrongCommand("Yoyu aren't caryying anything like that")
        }
        for(let i = 0; i < Crafts.length; ++i) {
            if(inventory[0].id == Crafts[i].usedItem) {
                console.log(inventory[0])
                if(loc == Crafts[i].location)  {
                    inventory.splice(0,1)
                    wrongCommand(Crafts[i].message)
                    let newitem = parseInt(Crafts[i].getItem)
                    if(finditem(newitem).flag == 1) {
                        inventory[0] = finditem(newitem);
                    }
                    if(finditem(newitem).flag == 0) {
                        inventory[0] = undefined;
                        allLocations[locx][locy].items.push(finditem(newitem).id);
                    }
                    updateInventory()
                    updateItems()
                    console.log(inventory[0])
                }
            }
        }
    }
    else if(direction.startsWith("TAKE ") || direction.startsWith("T ")) {
        let parts = direction.split(" ")
        let textitem = parts[1]
        
        if(inventory[0] !== undefined) {
            wrongCommand("You are carrying something");
        }
        if(allLocations[locx][locy].items.length === 0) {
            wrongCommand("There isn't anything like that here");
        }
        
        for(let i = 0; i < allLocations[locx][locy].items.length; ++i) {
           if(textitem === finditem(allLocations[locx][locy].items[i]).name) {
               if(finditem(allLocations[locx][locy].items[i]).flag !== 0) {
            console.log(finditem(allLocations[locx][locy].items[i]).name)
                    
                   inventory[0] = finditem(allLocations[locx][locy].items[i]);
                   console.log(inventory)     
                   wrongCommand('You are taking ' + inventory[0].fname)  
                   allLocations[locx][locy].items.splice(i, 1);
                   updateInventory()
                   updateItems()     
               }
           }
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