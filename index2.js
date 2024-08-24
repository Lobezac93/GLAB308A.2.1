///========******* PART 2: CLASS FANTASY****=================

class Character {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.inventory = [];
        
    }
    static MAX_HEALTH = 100;
    static ROLEs = ["Fighter", "Healer", "Wizard"]

    roll(mod = 0){
        const result = Math.floor(Math.random()*20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}`)
    }
    // method to check if the character is at full health
    isMaxHealth(){
        return this.health >= Character.MAX_HEALTH;
    }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo")
// robin.companion.type = new Character("Cat");
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

//========*** PART 3 : CLASS FEATURES****===========

class Adventurer extends Character {
    constructor(name, role){
        super(name);
        this.role = role;
        this.inventory.push("bedroll", "50 gold coins");
        this.companion = []
    }

    scout(){
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    } 

    addCompanion(companion){
        this.companion.push(companion);
        console.log(`${companion.name} the ${companion.type} has joined ${this.name}.`);
    }

    duel(opponent) {
        console.log(`The duel begins between ${this.name} and ${opponent.name}!`);

        while (this.health > 50 && opponent.health > 50) {
            const thisRoll = this.roll();
            const opponentRoll = opponent.roll();

            if (thisRoll > opponentRoll) {
                opponent.health -= 1;
                console.log(`${this.name} wins this round! ${opponent.name}'s health is now ${opponent.health}.`);
            } else if (thisRoll < opponentRoll) {
                this.health -= 1;
                console.log(`${opponent.name} wins this round! ${this.name}'s health is now ${this.health}.`);
            } else {
                console.log("It's a tie! No damage dealt this round.");
            }
        }

        if (this.health > 50) {
            console.log(`${this.name} wins the duel!`);
        } else {
            console.log(`${opponent.name} wins the duel!`);
        }
    }

}


/// creating a class Companion 

class Companion {
    constructor(name, type, belongings = []){
        this.name = name;
        this.type = type;
        this.belongings = belongings;
    }
    addBelongings (item){
        this.belongings.push(item);
        console.log(`${this.name} now has a new item ${item}`)
    }

    showBelongings(){
        console.log(`${this.name} has the following items: ${this.belongings.join(', ')}`)
    }
}

// updating the declaration of Robin and companions to use new Adventurer and companion classes

// Creating companions
const leo = new Companion("Leo", "Cat", ["collar"]);
const frank = new Companion("Frank", "Flea", ["small hat", "sunglasses"]);

// Creating the adventurer and adding companions
const robin = new Adventurer("Robin", 10, ["sword", "potion", "artifact"], 8, 7, 6);
robin.addCompanion(leo);
leo.addBelongings("mouse toy");

robin.addCompanion(frank);
frank.addBelongings("tiny cape");

// Demonstrating the usage of the new methods
robin.roll();
frank.showBelongings();



//============********** PART 5: GATHER YOUR PARTY ********==========================

class AdventurerFactory {
    constructor(role) {
        this.role = role;
        this.adventurers = [];
    }

    // Generates a new adventurer and returns it
    generate(name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer; // Return the newly created adventurer
    }

    // Finds an adventurer by their index in the array
    findByIndex(index) {
        return this.adventurers[index];
    }

    // Finds an adventurer by their name
    findByName(name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

// Create a factory for "Healer" adventurers
const healers = new AdventurerFactory("Healer");

// Generate a new adventurer named "Robin" and store it in the `robin` variable
const robin2 = healers.generate("Robin");

console.log(robin2); // Outputs the "Robin" adventurer instance
