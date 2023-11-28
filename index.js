import { loadSongs } from './scripts/loadSongs.js';
import { loadGenre, genreUrlList } from './scripts/loadGenre.js';

import { getTrackSrc, playAudio } from "./scripts/playButton.js";
import { getPic } from "./scripts/ArtistPic.js";
import { updateTitle } from "./scripts/Title.js";
import { checkTime, formatTime, pad } from "./scripts/Song__Time.js";
import { updateProgressBar } from "./scripts/Progress__Bar.js";
import { audioModule } from "./scripts/VolumeSlider.js";
import {
  playPreviousSong,
  playNextSong,
  playSong,
} from "./scripts/previewsNextButtons.js";
import { updateArtistName } from "./scripts/ArtistName.js";
import {
  heartMouseOver,
  heartMouseOut,
  shuffleMouseOver,
  shuffleMouseOut,
} from "./scripts/hoverOnIcons.js";
import { playshuffle } from "./scripts/shuffleButton.js";

getTrackSrc();
getPic();
updateTitle();
updateArtistName();
document.getElementById("play").addEventListener("click", playAudio);
document.getElementById("prev").addEventListener("click", playPreviousSong);
document.getElementById("prev").addEventListener("click", updateTitle);
document.getElementById("prev").addEventListener("click", updateArtistName);
document.getElementById("prev").addEventListener("click", playSong);
document.getElementById("next").addEventListener("click", playNextSong);
document.getElementById("next").addEventListener("click", updateTitle);
document.getElementById("next").addEventListener("click", updateArtistName);
document.getElementById("next").addEventListener("click", playSong);
updateProgressBar;
formatTime;
pad;
checkTime();
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

loadGenre(genreUrlList);

export const state = {
	currentPage,
};

