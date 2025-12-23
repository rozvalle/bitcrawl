// game/monster.js
export function createMonster(type, x, y) {
    const stats = {
        goblin: { hp: 10, attack: 3 },
        orc: { hp: 20, attack: 5 },
        // add more types here
    };

    return {
        type,
        x,
        y,
        hp: stats[type].hp,
        attack: stats[type].attack,
        alive: true
    };
}

export let monsters = [];

export function spawnMonsters(map, count = 5) {
    const { createMonster } = require("./monster"); // or import if using ES6
    monsters = [];
    for (let i = 0; i < count; i++) {
        const { x, y } = map.getRandomFloorTile();
        monsters.push(createMonster("goblin", x, y));
    }
    return monsters;
}