export const sprites = {
    wall: new Image(),
    floor: new Image(),
    player: new Image()
};

// set source paths
sprites.wall.src = "../assets/sprites/download.png";
sprites.floor.src = "../assets/sprites/download.png";
sprites.player.src = "../assets/sprites/download.png";

// optional: wait for all images to load before starting game
export function loadSprites(callback) {
    let loaded = 0;
    const total = Object.keys(sprites).length;
    Object.values(sprites).forEach(img => {
        img.onload = () => {
            loaded++;
            if (loaded === total) callback();
        };
    });
}
