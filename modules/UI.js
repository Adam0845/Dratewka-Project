function updateUI(row, index) {
    document.getElementById('whatnow').style.display = 'inherit';
    window.addEventListener('keydown', handleInput)
    document.getElementById('nothatway').innerHTML = "";
    if((row === 2 && index === 6) || (row === 6 && index===5) )
    {
        document.getElementById('locationimg').src = './gfx/26 i 65.gif';
    }
    else if((row === 2 && index === 7) || (row === 6 && index === 7))
    {
        document.getElementById('locationimg').src = './gfx/27 i 67.gif';
    }
    else {
        document.getElementById('locationimg').src = `./gfx/${row}${index}.gif`;
    }
    document.getElementById('directions').innerHTML = "You can go "; 
    document.getElementById('locationimg').style.background = allLocations[row][index].getColor()
    directions = allLocations[row][index].getDirections();
    document.getElementById('directions').innerHTML += directions.join(", ");
    document.getElementById('text').innerHTML = allLocations[row][index].getText();
    document.getElementById('nothatway').innerHTML = "";
}

function wrongCommand(message)
{

    document.getElementById('whatnow').style.display = 'none';
    window.removeEventListener('keydown', handleInput)
    document.getElementById('nothatway').innerHTML = message;
    setTimeout(() => {
        document.getElementById('whatnow').style.display = 'inherit';
        window.addEventListener('keydown', handleInput);
        document.getElementById('nothatway').innerHTML = "";
      }, "2000");
}
function goinsomewhere(direction)
{
    document.getElementById('whatnow').style.display = 'none';
    window.removeEventListener('keydown', handleInput)
    document.getElementById('nothatway').innerHTML = "You are going " + direction + "..."
    
    
}