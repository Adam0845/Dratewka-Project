class Item
{
    constructor(id, fname, flag, name)
    {
        this.id = id;
        this.fname = fname;
        this.flag = flag;
        this.name = name;
    }

    getID() {
        return  this.id;
    }

    getfname() {
        return this.fname;
    }
    getFlag() {
        return this.flag;
    }
}
const allItems = [
    new Item(10, "a KEY", true, "KEY"),
    new Item(11, "an AXE", true, "AXE"),
    new Item(12, "STICKS", true, "STICKS"),
    new Item(13, "sheeplegs", false, "sheeplegs"),
    new Item(14, "MUSHROOMS", true, "MUSHROOMS"),
    new Item(15, "MONEY", true, "MONEY"),
    new Item(16, "a BARREL", true, "BARREL"),
    new Item(17, "a sheeptrunk", false, "sheeptrunk"),
    new Item(18, "BERRIES", true, "BERRIES"),
    new Item(19, "WOOL", true, "WOOL"),
    new Item(20, "a sheepskin", false, "sheepskin"),
    new Item(21, "a BAG", true, "BAG"),
    new Item(22, "a RAG", true, "RAG"),
    new Item(23, "a sheephead", false, "sheephead"),
    new Item(24, "a SPADE", true, "SPADE"),
    new Item(25, "SULPHUR", true, "SULPHUR"),
    new Item(26, "a solid poison", false, "solid poison"),
    new Item(27, "a BUCKET", true, "BUCKET"),
    new Item(28, "TAR", true, "TAR"),
    new Item(29, "a liquid poison", false, "liquid poison"),
    new Item(30, "a dead dragon", false, "dead dragon"),
    new Item(31, "a STONE", true, "STONE"),
    new Item(32, "a FISH", true, "FISH"),
    new Item(33, "a KNIFE", true, "KNIFE"),
    new Item(34, "a DRAGONSKIN", true, "DRAGONSKIN"),
    new Item(35, "a dragonskin SHOES", true, "SHOES"),
    new Item(36, "a PRIZE", true, "PRIZE"),
    new Item(37, "a SHEEP", true, "SHEEP")
]
function finditem(index){
    for(let i = 0; i < allItems.length; i++)
    {
      if(index === allItems[i].id) {
        return allItems[i];
      }  
    }
}
//console.log(allItems)