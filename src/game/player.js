export function createPlayer(map) {
    const { x, y } = map.getRandomFloorTile();
    return { x, y };
}
