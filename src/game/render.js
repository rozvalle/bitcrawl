import { ctx, TILE_SIZE, WIDTH, HEIGHT } from "../main";

export function render(map, player, visible, explored) {
    ctx.clearRect(0, 0, WIDTH * TILE_SIZE, HEIGHT * TILE_SIZE);

    for (let y = 0; y < HEIGHT; y++) {
        for (let x = 0; x < WIDTH; x++) {
            const key = `${x},${y}`;
            const tile = map.tiles.get(key);
            if (!tile) continue;

            if (visible.has(key)) {
                explored.add(key);
                ctx.fillStyle = tile.type === "wall" ? "#444" : "#999";
            } else if (explored.has(key)) {
                ctx.fillStyle = "#222";
            } else {
                continue;
            }

            ctx.fillRect(
                x * TILE_SIZE,
                y * TILE_SIZE,
                TILE_SIZE,
                TILE_SIZE
            );
        }
    }

    // draw player
    ctx.fillStyle = "#0f0";
    ctx.fillRect(
        player.x * TILE_SIZE,
        player.y * TILE_SIZE,
        TILE_SIZE,
        TILE_SIZE
    );
}
