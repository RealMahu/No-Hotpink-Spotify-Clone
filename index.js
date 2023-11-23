import { getTrackSrc, playAudio } from "./scripts/playButton.js";
import { pauseAudio } from "./scripts/pauseButton.js";
import { getPic } from "./scripts/ArtistPic.js";
import { getTitle } from "./scripts/Title.js";
import { getArtistName } from "./scripts/ArtistName.js";

getTrackSrc();
getPic();
getTitle();
getArtistName();
document.getElementById("play").addEventListener("click", playAudio);
