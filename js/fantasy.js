// PLAN
/**
 * Game needs:
 * Player
 * 3 different enemies
 * Battle with prompts
 * Stats
 * Weapons
 * Items
 * Story Prompts and alerts
 * 
 * */

//Storyline - Sister gets lost in the forest at dark and you need to find her
    //Very little supplies available and to choose from

    //Most supplies chosen will help with certain conditions.

/** PLayer States
 * Health
 * Level
 * Strength
 * Intellegence
 * Diplomacy
 */

// Monsters
/**
 * Zombie
 * Goblin
 * Wolves
 */

/** Items:
 * Torch
 * Rope
 * Axe
 * Money
 */
/**
 * Object stats: Damage, +durability, handling, tag "Tags are a stat that activates its abilities"
 * 
 * 
 */
var enemy;
var weaponchoice = "fists";
var gameoutcome = "not yet";
var check = 0;
var bonusdamage = 0;
//DEFAULT PLAYER STATS
var player = {
    health: 5,
    level: 1,
    strength: 1,
    intellegence: 1,
    diplomacy: 1,
    inventory: []

}
//MONSTER STATS
var zombie = {
    health: 4,
    level: 1,
    dmg: 1,
    weakness: "fire"
}

var goblin = {
    health: 3,
    level: 1,
    dmg: 2,
    weakness: "valuable"
}

var wolf = {
    health: 3,
    level: 1,
    dmg: 2,
    weakness: ["fire", "loud"]
}

// ITEM STATS

var torch = {
    attribute: ["fire", "light"]
}
var rope = {}
var axe = {}
var pots = {}
var money = {
    attribute: ["valuable"]
}

//BATTLE SYSTEM

var battleCheck = function(enemy) {
    console.log("battleCheck is activated")
    if (enemy == "zombie") {
        console.log(enemy + "is being checked");
        tagFire(false);
        if (check == true) {
            bonusdamage += 1;
        }
        console.log("The zombie is being checked");   
    }

    if (enemy == "goblin") {
       console.log(enemy + "is being checked");
       tagValuable(false);
       if (check == true) {
           gameoutcome = "win";
       }
    }
    if (enemy == "wolf") {
        console.log(enemy + "is being checked");
        tagFire(false);
        if (check == true) {
            bonusdamage += 1;
        }
        tagLoud(false);
        if (check == true) {
            gameoutcome = "win";
        }
    }
    battle(bonusdamage, gameoutcome);
}

var battle = function(bonusdamage, gameoutcome) {
   totaldamage = player.strength + bonusdamage;
        console.log("Calculated " + totaldamage);
    alert("You do " + totaldamage + " damage to the "  + enemy);
    enemy.health -= totaldamage;
        // Enemy attacks
            alert("The " + enemy + "attacks you with rage.");
            player.health -= enemy.dmg;
            alert("You have " + player.health + " left.")
        //Checks who is alive
            if (player.health < 1) {
                gameoutcome = "lose";
            }
            if (enemy.health < 1) {
                gameoutcome = "win"
            }
        if (player.health > 0 & enemy.health > 0)
        {
            battle();
        }
        if (gameoutcome = "win") {
            alert("you won the battle");
        
        }

    
}

//TAG functions
var tagFire = function(check) {
    console.log("tag fire is being checked");
    for (i=0; i < player.inventory.length; i++) {
        if (player.inventory[i] == "torch" & weaponchoice == "torch") {
            check = true;
        } else { check = false; }
    }
    return check;
}
var tagLoud = function(check) {
    for (i=0; i < player.inventory.length; i++) {
        if (player.inventory[i] == "pots" ) {
            check = true;
        } else {check = false; }
    }
    return check;
}
var tagValuable = function(check) {
    console.log("tag valuable is being checked");
    for (i=0; i < player.inventory.length; i++) {
        if (player.inventory[i] == "money" ) {
            check = true;
        } else {check = false;}
    }
    return check;
}

//STORY BOARD
player.inventory[player.inventory.length + 1] = prompt("You have no time to lose, which item will you bring with you?", "Torch, Rope, Axe, or Money?");
alert("You chose the " + player.inventory);
    //World Scenario
        alert("The forest is covered with a moist black velvet. It is extremely dark.");
        for (i=0; i < player.inventory.length; i++) {
            if (player.inventory[i] == "torch") {
                alert("Luckily you brought a torch with you");
            }
        }
        alert("As you trump through heavily dense swamp you stumble upon a hungry zombie!");
        var choice = prompt("What should you do? Attack or run?");
        
        if (choice == "attack") {
            enemy = "zombie";
            weaponchoice = prompt("Choose a weapon that you have. If you have nothing, use fists.")
            if (weaponchoice == "fists") {battle();} else {battleCheck("zombie");
        } }
            
    //Battle Scenario
    
        
    //STORY BOARD
