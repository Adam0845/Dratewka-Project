function updateUI(row, index) {
    document.getElementById('directions').innerHTML = "You can go ";
    document.getElementById('locationimg').src = `./gfx/${row}${index}.gif`;
    document.getElementById('locationimg').style.background = allLocations[row][index].getColor()
    directions = allLocations[row][index].getDirections();
    document.getElementById('directions').innerHTML += directions.join(", ");
    document.getElementById('text').innerHTML = allLocations[row][index].getText();
    document.getElementById('nothatway').innerHTML = "";
}