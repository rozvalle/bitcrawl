import * as ROT from "rot-js";

export function createMap(width, height) {
    const map = new Map();

    const digger = new ROT.Map.Digger(width, height);
    digger.create((x, y, value) => {
        map.set(`${x},${y}`, {
            walkable: value === 0,
            type: value === 0 ? "floor" : "wall"
        });
    });

    return map;
}
