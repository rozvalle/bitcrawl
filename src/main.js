import { createMap } from "./game/map";
import { createPlayer } from "./game/player";
import { setupInput } from "./game/input";
import { render } from "./game/render";
import { computeFOV } from "./game/fov";
import { setupUI, addMessage } from "./ui";
import { generateMonsters, monsters } from "./game/monster";
import { loadSprites } from "./game/sprites";
import "./style.css";

export const TILE_SIZE = 16;
export const WIDTH = 60;
export const HEIGHT = 25;

const canvas = document.getElementById("game");
canvas.width = WIDTH * TILE_SIZE;
canvas.height = HEIGHT * TILE_SIZE;
export const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

let player, visible, explored;

loadSprites(() => {
  console.log("Sprites loaded");

  // create map and player
  window.map = createMap(WIDTH, HEIGHT);
  player = createPlayer(window.map);
  generateMonsters(window.map);
  visible = new Set();
  explored = new Set();

  const gameLoop = () => {
    visible = computeFOV(player, window.map);
    render(window.map, player, visible, explored);
  };

  setupInput(player, gameLoop);

  setupUI({
    regenCallback: () => {
      window.map = createMap(WIDTH, HEIGHT);
      const { x, y } = window.map.getRandomFloorTile();
      player.x = x;
      player.y = y;
      explored.clear();
      visible.clear();

      generateMonsters(window.map);
      addMessage("Dungeon regenerated!");
      gameLoop();
    },
    toggleFOVCallback: () => {
      // handle FOV toggle
    },
    muteCallback: () => {
      // handle mute
    }
  });

  // initial render
  gameLoop();
  addMessage("Welcome to Bitcrawl! Use arrow keys or WASD to move.");
});
