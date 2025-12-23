import { createMap } from "./game/map";
import { createPlayer } from "./game/player";
import { setupInput } from "./game/input";
import { render } from "./game/render";
import { computeFOV } from "./game/fov";
import { setupUI, addMessage } from "./ui";
import { zzfx } from "./audio/zzfxMicro"; // for sound effects
import "./style.css";

export const TILE_SIZE = 16;
export const WIDTH = 60;
export const HEIGHT = 25;

const canvas = document.getElementById("game");
canvas.width = WIDTH * TILE_SIZE;
canvas.height = HEIGHT * TILE_SIZE;

export const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = false;

// -------------------
// Game state
// -------------------
export let map = createMap(WIDTH, HEIGHT);
export const player = createPlayer(map);

export let visible = new Set();
export let explored = new Set();

let showFOV = true;
let muted = false;

// -------------------
// Helpers
// -------------------
function gameLoop() {
  visible = showFOV ? computeFOV(player, map) : new Set();
  render(map, player, visible, explored);
}

function playClick() {
  if (!muted) zzfx(0.2, 0.5, 400); // simple click sound
}

// -------------------
// Setup UI buttons
// -------------------
setupUI({
  regenCallback: () => {
    playClick();
    map = createMap(WIDTH, HEIGHT); // regenerate the dungeon
    explored.clear();
    visible.clear();
    addMessage("Dungeon regenerated!");
    gameLoop();
  },
  toggleFOVCallback: () => {
    playClick();
    showFOV = !showFOV;
    addMessage(showFOV ? "FOV enabled" : "FOV disabled");
    gameLoop();
  },
  muteCallback: () => {
    muted = !muted;
    playClick();
    addMessage(muted ? "Muted" : "Unmuted");
  },
});

// -------------------
// Setup input for player movement
// -------------------
setupInput(player, map, gameLoop);

// initial render
gameLoop();
