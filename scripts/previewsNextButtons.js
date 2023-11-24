import getSongArray from "./SongArry.js";
import { playAudio } from "./playButton.js";

const songs = getSongArray();
let currentSongIndex = 0;

const audioPlayer = document.getElementById("PlayerAudioSrc");

function playCurrentSong() {
  const currentSong = songs[currentSongIndex];
  audioPlayer.src = currentSong.preview;
  return currentSong;
}

function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playCurrentSong();
  console.log(currentSongIndex);
}

function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playCurrentSong();
  console.log(currentSongIndex);
}

function playSong() {
  const input = document.getElementById("play");
  if (input.unchecked) {
    input.checked = true;
  } else {
    input.checked = true;
    playAudio();
  }
  console.log(input.checked);
}

// Initialen Song abspielen
playCurrentSong();

// Event Listener für den vorherigen Song-Button hinzufügen

export { playPreviousSong, playCurrentSong, playNextSong, playSong };
