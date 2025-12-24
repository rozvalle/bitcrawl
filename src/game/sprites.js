// Import the images using Vite/Webpack
import floorImg from "../assets/sprites/floor1.png";
import wallImg from "../assets/sprites/wall1.png";
import playerImg from "../assets/sprites/player1.png";

export const sprites = {
    floor: new Image(),
    wall: new Image(),
    player: new Image(),
};

// Assign the imported URLs to the images
sprites.floor.src = floorImg;
sprites.wall.src = wallImg;
sprites.player.src = playerImg;

// Helper to wait for all images to load
export function loadSprites(onReady) {
    const images = Object.values(sprites);
    let loaded = 0;

    images.forEach(img => {
        img.onload = () => {
            loaded++;
            if (loaded === images.length) onReady();
        };
    });
}
