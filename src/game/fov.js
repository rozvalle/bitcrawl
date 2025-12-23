import * as ROT from "rot-js";

export function computeFOV(player, map) {
    const visible = new Set();

    const fov = new ROT.FOV.PreciseShadowcasting(
        (x, y) => map.get(`${x},${y}`)?.walkable
    );

    fov.compute(player.x, player.y, 8, (x, y) => {
        visible.add(`${x},${y}`);
    });

    return visible;
}
