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
    attribute: "fire"
}
var rope = {}
var axe = {}

//STORY BOARD
player.inventory[player.inventory.length + 1] = prompt("You have no time to lose, which item will you bring with you?", "Torch, Rope, Axe, or Money?");
alert("You chose the " + player.inventory);
    


//BATTLE SYSTEM
//Plan - Player gets fighting options
/**
 * Step 1 - Check all objects being used
 * Step 2 - Seek for tags
 * Step 3 - activate functions for each tag
 * Step 4 - tag functions will apply data to the battle function
 * Step 5 - Data is crunched
 * Step 6 - Data is displayed
 *  */


//TAG functions
var tagfire = function() {

}
var tagloud = function() {

}
