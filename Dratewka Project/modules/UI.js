let main = document.getElementById('game')
let input = document.createElement('input')
document.body.background = "grey";
main.append(input);
input.type = "text";
input.focus()
main.style.margin = "0 auto";
main.style.width = "500px";
main.style.border = "2px solid black";
main.style.height = "500px";
main.style.background = "black";
let compass = document.createElement('img');
main.append(compass);
compass.src = "./gfx/compass.bmp"