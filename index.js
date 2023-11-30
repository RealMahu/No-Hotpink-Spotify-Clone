import { loadMain } from "./scripts/loadMain.js";
import {
  getData,
  playCurrentSong,
  // playSong,
  getTrackSrc,
  playAudio,
  updateTitle,
  updateArtistName,
  playshuffle,
} from "./scripts/fetch.js";

import { updateProgressBar } from "./scripts/Progress__Bar.js";
import { audioModule } from "./scripts/VolumeSlider.js";

import {
  heartMouseOver,
  heartMouseOut,
  shuffleMouseOver,
  shuffleMouseOut,
} from "./scripts/hoverOnIcons.js";

loadMain();


document.getElementById("play").addEventListener("click", playAudio);

document.getElementById("heart").addEventListener("mouseover", heartMouseOver);
document.getElementById("heart").addEventListener("mouseout", heartMouseOut);
document
  .getElementById("shuffle1")
  .addEventListener("mouseover", shuffleMouseOver);
document.getElementById("shuffle").addEventListener("click", playshuffle);
document
  .getElementById("shuffle1")
  .addEventListener("mouseout", shuffleMouseOut);

audioModule;
document
  .getElementById("mute")
  .addEventListener("click", audioModule.muteAudio);

// Danny
let currentPage;

export const state = {
  currentPage,
};
