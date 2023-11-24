import { getTrackSrc, playAudio } from "./scripts/playButton.js";
import { getPic } from "./scripts/ArtistPic.js";
import { updateTitle } from "./scripts/Title.js";
import { formatTime, pad } from "./scripts/Song__Time.js";
import progressBar from "./scripts/Progress__Bar.js";

import { audioModule } from "./scripts/VolumeSlider.js";
import {
  playPreviousSong,
  playNextSong,
  playSong,
} from "./scripts/previewsNextButtons.js";
import { updateArtistName } from "./scripts/ArtistName.js";

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
progressBar();
formatTime;
pad;

audioModule;
document
  .getElementById("mute")
  .addEventListener("click", audioModule.muteAudio);
