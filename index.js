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
  playRepeat,
  saveSong,
} from "./scripts/fetch.js";

import { updateProgressBar } from "./scripts/Progress__Bar.js";
import { audioModule } from "./scripts/VolumeSlider.js";

import {
  heartMouseOver,
  heartMouseOut,
  shuffleMouseOver,
  shuffleMouseOut,
  muteMouseOver,
  muteMouseOut,
} from "./scripts/hoverOnIcons.js";

loadMain();


document.getElementById("play").addEventListener("click", playAudio);

if (document.getElementById("heart0")) {
  document
    .getElementById("heart")
    .addEventListener("mouseover", heartMouseOver);
  document.getElementById("heart").addEventListener("mouseout", heartMouseOut);
} else if (document.getElementById("heart1")) {
  document
    .getElementById("heart1")
    .addEventListener("mouseover", heartMouseOver);
  document.getElementById("heart1").addEventListener("mouseout", heartMouseOut);
}

document.getElementById("heart").addEventListener("click", saveSong);

if (document.getElementById("muteX")) {
  document.getElementById("muteX").addEventListener("mouseover", muteMouseOver);
  document.getElementById("muteX").addEventListener("mouseout", muteMouseOut);
} else if (document.getElementById("mute1")) {
  document.getElementById("mute1").addEventListener("mouseover", muteMouseOver);
  document.getElementById("mute1").addEventListener("mouseout", muteMouseOut);
} else if (document.getElementById("mute2")) {
  document.getElementById("mute2").addEventListener("mouseover", muteMouseOver);
  document.getElementById("mute2").addEventListener("mouseout", muteMouseOut);
} else if (document.getElementById("mute3")) {
  document.getElementById("mute3").addEventListener("mouseover", muteMouseOver);
  document.getElementById("mute3").addEventListener("mouseout", muteMouseOut);
}

document
  .getElementById("shuffle1")
  .addEventListener("mouseover", shuffleMouseOver);
document.getElementById("shuffle").addEventListener("click", playshuffle);

document
  .getElementById("shuffle1")
  .addEventListener("mouseout", shuffleMouseOut);
document
  .getElementById("shuffle1")
  .addEventListener("mouseout", shuffleMouseOut);

document.getElementById("repeat").addEventListener("click", playRepeat);

audioModule;
document
  .getElementById("mute")
  .addEventListener("click", audioModule.muteAudio);

// Danny
let currentPage;

export const state = {
  currentPage,
};
