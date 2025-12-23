import { zzfx } from "./zzfxMicro.js";

// Squeaky footstep
export const stepSound = () => {
    zzfx(0.2, 0.2, 1000);  // volume, decay, frequency
};

// Wall bump
export const bumpSound = () => {
    zzfx(1, 0.6, 150);
};

// UI click
export const uiSound = () => {
    zzfx(0.2, 0.9, 300);
};
