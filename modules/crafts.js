class Craft {
    constructor(usedItem, location, getItem, message) {
        this.usedItem = usedItem;
        this.location = location;
        this.getItem = getItem;
        this.message = message
    }
};
const Crafts = [
    new Craft("10", "56", "11", "You opened a tool shed and took an axe"),
    new Craft("11", "67", "12", "You cut sticks for sheeplegs"),
    new Craft("12", "43", "13", "You prepared legs for your fake sheep"),
    new Craft("14", "34", "15", "The tavern owner paid you money"),
    new Craft("15", "37", "16", "The cooper sold you a new barrel"),
    new Craft("16", "43", "17", "You made a nice sheeptrunk, OK"),
    new Craft("18", "36", "19", "The butcher gave you wool"),
    new Craft("19", "43", "20", "You prepared skin for your fake sheep, OK"),
    new Craft("21", "57", "22", "You used your tools to make a rag"),
    new Craft("22", "43", "23", "You made a fake sheephead, OK"),
    new Craft("24", "11", "25", "You are digging... (timeout) and digging... (timeout) That's enough sulphur for you"),
    new Craft("25", "43", "26", "You prepared a solid poison, OK"),
    new Craft("27", "21", "28", "You got a bucket full of tar"),
    new Craft("28", "43", "29", "You prepared a liquid poison, OK"),
    //new Craft("37", "43", "37", "Your fake sheep is full of poison and ready to be eaten by the dragon"),
    //new Craft("37", "43", "30", "The dragon noticed your gift... (timeout) The dragon ate your sheep and died! - podmiana grafiki na lokacji (martwy smok)!"),
    // new Craft("33", "43 + zabity smok", "34", "You cut a piece of dragon's skin"),
    // new Craft("34", "57", "35", "You used your tools to make shoes"),
    // new Craft("35", "41", "36", "The King is impressed by your shoes")
];