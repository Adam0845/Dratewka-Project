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
    document.getElementById("north").style.display = directions.includes("NORTH") ? "none" : "block";
    document.getElementById("south").style.display = directions.includes("SOUTH") ? "none" : "block";
    document.getElementById("west").style.display = directions.includes("WEST") ? "none" : "block";
    document.getElementById("east").style.display = directions.includes("EAST") ? "none" : "block";
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

function showvocorgoss(array) //fix css
{
    document.getElementById('gametext').style.display = 'none';
    window.removeEventListener('keydown', handleInput);
    document.getElementById('whatnow').innerHTML = "Press any key...";
    for(let i = 0; i < array.length; ++i) {
        let line = document.createElement('p');
        line.innerHTML = array[i]
        document.getElementById('newtext').append(line);
    }
    window.addEventListener('keydown',function(e) {
        if(e.key) {
            this.document.getElementById('newtext').innerHTML = '';
            this.document.getElementById('gametext').style.display = 'inherit';
            this.document.getElementById('whatnow').innerHTML = 'What now?'
            this.window.addEventListener('keydown', handleInput)
        }
    })
 }
function addItem(fname)
{
    document.getElementById('whatusee').innerHTML = "You see " + fname;
}