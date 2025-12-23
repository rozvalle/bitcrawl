import { createMap } from "./game/map";
import { createPlayer } from "./game/player";
import { setupInput } from "./game/input";
import { render } from "./game/render";
import { computeFOV } from "./game/fov";

export const TILE_SIZE = 16;
export const WIDTH = 60;
export const HEIGHT = 25;

const canvas = document.getElementById("game");
canvas.width = WIDTH * TILE_SIZE;
canvas.height = HEIGHT * TILE_SIZE;

export const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

export const map = createMap(WIDTH, HEIGHT);
export const player = createPlayer(map);

export let visible = new Set();
export let explored = new Set();

function gameLoop() {
  visible = computeFOV(player, map);
  render(map, player, visible, explored);
}

setupInput(player, map, gameLoop);
gameLoop();
