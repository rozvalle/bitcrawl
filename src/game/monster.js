import { map } from "../main"; // optional, depends on how you structure
import { sprites } from "./sprites";

export let monsters = []; // global monster list

// Monster constructor
export function createMonster(type, map) {
    const { x, y } = map.getRandomFloorTile();
    return {
        type,       // e.g., "goblin", "slime"
        x,
        y,
        hp: 10,
        alive: true
    };
}

// Generate monsters for the dungeon
export function generateMonsters(map, count = 5) {
    monsters = []; // clear old monsters
    const types = ["goblin", "slime", "bat"]; // must have matching sprites
    for (let i = 0; i < count; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        monsters.push(createMonster(type, map));
    }
}
