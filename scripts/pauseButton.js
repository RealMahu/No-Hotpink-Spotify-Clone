import getData from "./fetch.js";

const result = await getData();
console.log(result);

const TrackPlay = document.getElementById("PlayerAudioSrc");

function getTrackSrc() {
  TrackPlay.src = result.preview;
}

function pauseAudio() {
  TrackPlay.pause();
}

export { pauseAudio, getTrackSrc };
