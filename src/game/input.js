import { stepSound, bumpSound } from "../audio/sounds";

const DIRS = {
    ArrowUp: [0, -1],
    ArrowDown: [0, 1],
    ArrowLeft: [-1, 0],
    ArrowRight: [1, 0],
    w: [0, -1],
    s: [0, 1],
    a: [-1, 0],
    d: [1, 0],
};

export function setupInput(player, map, redraw) {
    window.addEventListener("keydown", (e) => {
        const dir = DIRS[e.key];
        if (!dir) return;

        const nx = player.x + dir[0];
        const ny = player.y + dir[1];
        const tile = map.get(`${nx},${ny}`);

        if (tile?.walkable) {
            player.x = nx;
            player.y = ny;
            redraw();
            stepSound();
        } else {
            bumpSound();
        }
    });
}
