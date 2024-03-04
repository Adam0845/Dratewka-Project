let locx = 4;
let locy = 7;
console.log(allLocations[locx][locy].getColor())
console.log(allLocations[locx][locy].getText())
const inputElement = document.getElementById('ginput');

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
            updateUI(locx, locy)
        }
    }
    if (direction === "SOUTH" || direction === "S") {
        let options = allLocations[locx][locy].getDirections();
        console.log(options)
        if (options.includes("SOUTH")) {
            locx++;
            updateUI(locx, locy)
        }
        else
        {
            document.getElementById('nothatway').innerHTML = "You can't go that way";
        }
    }
    if (direction === "WEST" || direction === "W") {
        let options = allLocations[locx][locy].getDirections();
        console.log(options)
        if (options.includes("WEST")) {
            locy--;
            updateUI(locx, locy)
        }
        else
        {
            document.getElementById('nothatway').innerHTML = "You can't go that way";
        }
    }
    if (direction === "EAST" || direction === "E") {
        let options = allLocations[locx][locy].getDirections();
        console.log(options)
        if (options.includes("EAST")) {
            locy++;
            updateUI(locx, locy)
        }
        else
        {
            document.getElementById('nothatway').innerHTML = "You can't go that way";
        }
    }
    
}