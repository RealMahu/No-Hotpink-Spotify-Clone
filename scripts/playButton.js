import getSongArry from "./SongArry.js";

const songs = getSongArry();
let currentSongIndex = 0;

const TrackPlay = document.getElementById("PlayerAudioSrc");
const playIcon = document.getElementById("play");
const labelForIcon = document.getElementById("playicon");
labelForIcon.innerHTML = `<i class="bi bi-play-circle-fill"></i>`;

function getTrackSrc() {
  const currentSong = songs[currentSongIndex];
  TrackPlay.src = currentSong.preview;
}

function playAudio() {
  if (playIcon.checked) {
    TrackPlay.play();
    labelForIcon.innerHTML = `<i class="bi bi-pause-circle-fill"></i>`;
  } else {
    TrackPlay.pause();
    labelForIcon.innerHTML = `<i class="bi bi-play-circle-fill"></i>`;
  }
}

export { playAudio, getTrackSrc };
