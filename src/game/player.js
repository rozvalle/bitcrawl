export function createPlayer(map) {
    for (const [key, tile] of map) {
        if (tile.walkable) {
            const [x, y] = key.split(",").map(Number);
            return { x, y };
        }
    }
}
