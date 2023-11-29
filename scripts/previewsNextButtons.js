// import getSongArray from "./SongArry.js";
// import { playAudio } from "./playButton.js";

// let songs = getSongArray();
// const originalSongArry = songs;
// localStorage.setItem("originalSongArry", JSON.stringify(originalSongArry));

// let currentSongIndex = 0;

// const audioPlayer = document.getElementById("PlayerAudioSrc");
// const shuffleInput = document.getElementById("shuffle"); // Assuming you have an input element with id "shuffle"

// function playCurrentSong() {
//   const currentSong = songs[currentSongIndex];
//   audioPlayer.src = currentSong.preview;
//   return currentSong;
// }

// function playPreviousSong() {
//   currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
//   playCurrentSong();
//   console.log(currentSongIndex);
// }

// function playNextSong() {
//   currentSongIndex = (currentSongIndex + 1) % songs.length;
//   playCurrentSong();
//   console.log(currentSongIndex);
// }

// function playSong() {
//   const playInput = document.getElementById("play");

//   if (playInput.checked) {
//     // Toggle-Button für das Abspielen ist aktiviert
//     if (shuffleInput.checked) {
//       // Toggle-Button für das Mischen ist ebenfalls aktiviert
//       shuffleSongs();
//     } else if (!shuffleInput.checked) {
//       const OriginArry = JSON.parse(localStorage.getItem("originalSongArry"));
//       songs = OriginArry;
//       console.log(songs);
//     }
//     playAudio();
//   } else {
//     // Toggle-Button für das Abspielen ist deaktiviert
//     playCurrentSong();
//   }
// }

// function shuffleSongs() {
//   for (let i = songs.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [songs[i], songs[j]] = [songs[j], songs[i]];
//   }
// }

// // Initialen Song abspielen
// playCurrentSong();

// // Event Listener für den shuffle-Button hinzufügen
// shuffleInput.addEventListener("change", () => {
//   if (shuffleInput.checked) {
//     shuffleSongs();
//     console.log(songs);
//   } else {
//     songs = JSON.parse(localStorage.getItem("originalSongArry"));
//   }
// });

// export { playPreviousSong, playCurrentSong, playNextSong, playSong };
