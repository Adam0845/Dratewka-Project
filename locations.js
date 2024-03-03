class Location 
{ 
  constructor(text, color, directions) {
    this.text = text;
    this.color = color;
    this.directions = directions 
}
}
const allLocations = [
    [],
    [
        new Location("You are inside a brimstone mine", "rgb(235,211,64)", ["EAST"]),
        new Location("You are at the entrance to the mine", "rgb(89,93,87)", ["EAST"]),
        new Location("A hill", "rgb(117,237,243)", ["SOUTH", "EAST"]),
        new Location("Some bushes", "rgb(202,230,51)", ["EAST"]),
        new Location("An old deserted hut", "rgb(220,204,61)", ["EAST"]),
        new Location("The edge of a forest", "rgb(167,245,63)", ["EAST"] ),
        new Location("A dark forest", "rgb(140,253,99)", ["SOUTH"])
    ],
    [
        new Location("A man nearby making tar", "rgb(255,190,99)",["SOUTH", "EAST"]),
        new Location("A timber yard", "rgb(255,190,99)",["SOUTH", "EAST", "WEST"]),
        new Location("You are by a roadside shrine", "rgb(167,245,63)", ["SOUTH", "NORTH", "EAST", "WEST"]),
        new Location("You are by a small chapel", "rgb(212,229,36)", ["EAST", "WEST"]),
        new Location("You are on a road leading to a wood", "rgb(167,245,63)", ["SOUTH", "EAST", "WEST"]),
        new Location("You are in a forest", "rgb(167,245,63)", ["EAST", "WEST"]),
        new Location("You are in a deep forest", "rgb(140,253,99)", ["NORTH", "WEST"])
    ],
    [
        new Location("You are by the Vistula River", "rgb(122,232,252)",["NORTH","EAST"]),
        new Location("You are by the Vistula River", "rgb(140,214,255)",["NORTH", "WEST"]),
        new Location("You are on a bridge over river", "rgb(108,181,242)", ["NORTH", "SOUTH"]),
        new Location("You are by the old tavern", "rgb(255,189,117)", ["EAST"]),
        new Location("You are at the town's end", "rgb(255,190,99)", ["NORTH", "SOUTH", "WEST"]),
        new Location("You are in a butcher's shop", "rgb(255,188,102)", ["SOUTH"]),
        new Location("You are in a cooper's house", "rgb(255,188,102)", ["SOUTH"])
    ],
    [
        new Location("You are in the Wawel Castle", "rgb(255,176,141)", ["EAST"]),
        new Location("You are inside a dragon's cave", "rgb(198,205,193)", ["EAST", "WEST"]),
        new Location("A perfect place to set a trap", "rgb(255,176,141)", ["NORTH", "WEST"]),
        new Location("You are by the water mill", "rgb(255,190,99)", ["EAST"]),
        new Location("You are at a main crossroad", "rgb(255,190,99)", ["NORTH", "SOUTH", "EAST", "WEST"]),
        new Location("You are on a town street", "rgb(255,190,99)", ["NORTH", "EAST", "WEST"]),
        new Location("You are in a frontyard of your house", "rgb(255,190,99)", ["NORTH", "SOUTH", "WEST"])
    ],
    [
        new Location("You are by a swift stream", "rgb(108,181,242)",["EAST"]),
        new Location("You are on a street leading forest", "rgb(255,190,99)",["NORTH","SOUTH","WEST"]),
        new Location("You are in a woodcutter's backyard", "rgb(255,190,99)", ["SOUTH"]),
        new Location("You are in a shoemaker's house", "rgb(254,194,97)",["NORTH"])
    ],
    [
        new Location("You are in a bleak funeral house", "rgb(254,194,97)", ["EAST"]),
        new Location("You are on a path leading to the wood", "rgb(167,245,63)", ["NORTH", "EAST", "WEST"]),
        new Location("You are at the edge of a forest", "rgb(167,245,63)", ["NORTH", "EAST", "WEST"]),
        new Location("You are in a deep forest", "rgb(140,253,99)", ["WEST"])
    ]
];
allLocations[5] = Array(4).fill(undefined).concat(allLocations[5]);
allLocations[6] = Array(4).fill(undefined).concat(allLocations[6]);
// console.log(allLocations[5][4])
// console.log(allLocations)