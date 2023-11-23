import getData from "./fetch.js";

const result = await getData();
console.log(result);

const TrackPlay = document.getElementById("PlayerAudioSrc");
const playIcon = document.getElementById("play");
const labelForIcon = document.getElementById("playicon");
labelForIcon.innerHTML = `<i class="bi bi-play-fill"></i>`;

function getTrackSrc() {
  TrackPlay.src = result.preview;
}

function playAudio() {
  if (playIcon.checked) {
    TrackPlay.play();
    labelForIcon.innerHTML = `<i class="bi bi-pause-fill"></i>`;
  } else {
    TrackPlay.pause();
    labelForIcon.innerHTML = `<i class="bi bi-play-fill"></i>`;
  }
}

export { playAudio, getTrackSrc };
