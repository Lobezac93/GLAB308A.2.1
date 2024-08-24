

const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
    },
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Flank",
            type: "Flea",
            belongings: ["small hat", "sunglasses"]
        }
    }
};

// Access and log the first item in the inventory
console.log(adventurer.inventory[0]);

// Loop through each item in the inventory and log them individually
for (let item of adventurer.inventory) {
    console.log(item);
}

// Call the roll method
adventurer.roll();
