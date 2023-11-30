import apikey from "../apikey.js";

const defaultId = "491462925";

const url = `https://deezerdevs-deezer.p.rapidapi.com/album/`;
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": apikey,
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

async function getData(albumId, trackId) {
  const idToUse = albumId || defaultId;

  const response = await fetch(`${url}${idToUse}`, options);
  const result = await response.json();

  const Tracklist = result.tracks.data;

  let songs = Tracklist;
  const originalSongArry = songs;
  localStorage.setItem("originalSongArry", JSON.stringify(originalSongArry));
  const Picture = document.getElementById("pic");
  Picture.src = result.cover_small;
  const foundTrack = result.tracks.data.find((track) => track.id === trackId);

  if (foundTrack) {
    if (Tracklist.indexOf(foundTrack) !== -1) {
      let currentSongIndex = Tracklist.indexOf(foundTrack);

      const prevBtn = document.getElementById("prev");
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        playCurrentSong(songs, currentSongIndex);
      });
      const nextBtn = document.getElementById("next");
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        playCurrentSong(songs, currentSongIndex);
      });
      const shuffleInput = document.getElementById("shuffle");

      shuffleInput.addEventListener("change", (e) => {
        if (shuffleInput.checked) {
          for (let i = songs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [songs[i], songs[j]] = [songs[j], songs[i]];
          }
        } else if (!shuffleInput.checked) {
          const OriginArry = JSON.parse(
            localStorage.getItem("originalSongArry")
          );
          songs = OriginArry;
        }
      });

      playCurrentSong(songs, currentSongIndex);
      return currentSongIndex;
    } else {
      console.log("nope");
    }
  }

  return { songs, originalSongArry, result, currentSongIndex };
}

const audioPlayer = document.getElementById("PlayerAudioSrc");
const shuffleInput = document.getElementById("shuffle"); // Assuming you have an input element with id "shuffle"

async function playCurrentSong(songs1, csi) {
  const currentSong = await songs1[csi];
  updateTitle(currentSong);
  updateArtistName(currentSong);
  audioPlayer.src = currentSong.preview;
  playAudio();
  return currentSong;
}

//----------------------------------------------------------

const suffleIcon = document.getElementById("shuffle");
const labelForIcon2 = document.getElementById("shuffleicon");
labelForIcon2.innerHTML = `<i id="shuffle1" class="bi bi-shuffle"></i>`;

function playshuffle() {
  if (suffleIcon.checked) {
    labelForIcon2.innerHTML = `<i id="shuffle1" class="bi bi-shuffle"></i>`;
    labelForIcon2.style.color = "white";
  } else {
    labelForIcon2.innerHTML = `<i id="shuffle1" class="bi bi-shuffle"></i>`;
    labelForIcon2.style.color = "gray";
  }
}

async function updateTitle(cs) {
  const song = cs;
  function getTitle() {
    const Title = document.getElementById("title");
    const infotitle = document.getElementById("infoTitle");
    Title.innerText = song.title;
    infotitle.title = Title.innerText;
  }

  getTitle();
}

async function updateArtistName(an) {
  const song = an;

  function getArtist() {
    const Artist = document.getElementById("artist");
    const infoArtist = document.getElementById("infoArtist");
    Artist.innerText = `${song.artist.name}`;
    infoArtist.title = song.title;
  }

  getArtist();
}

const TrackPlay = document.getElementById("PlayerAudioSrc");
const playIcon = document.getElementById("play");
const labelForIcon = document.getElementById("playicon");
labelForIcon.innerHTML = `<i class="bi bi-play-circle-fill"></i>`;

function getTrackSrc(c) {
  const currentSong = c;
  TrackPlay.src = currentSong.preview;
}

TrackPlay.preload = "auto";

TrackPlay.addEventListener("loadedmetadata", () => {
  TrackPlay.play();
});

async function playAudio() {
  if (TrackPlay.paused) {
    await TrackPlay.play();
    labelForIcon.innerHTML = `<i class="bi bi-pause-circle-fill"></i>`;
  } else {
    TrackPlay.pause();
    labelForIcon.innerHTML = `<i class="bi bi-play-circle-fill"></i>`;
  }
}

const audioElement = document.getElementById("PlayerAudioSrc");
const timer = document.getElementById("Song_Time");
const timeFull = document.getElementById("TimeFull");

audioElement.addEventListener("loadedmetadata", function () {
  const duration = audioElement.duration;
  timer.innerText = formatTime(0); // Startzeit auf 00:00 setzen
  timeFull.innerText = formatTime(duration);
});

audioElement.addEventListener("timeupdate", function () {
  const currentTime = audioElement.currentTime;
  const remainingTime = audioElement.duration - currentTime;
  timer.innerText = formatTime(currentTime); // Anzeige der vergangenen Zeit aufsteigend
});

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return pad(minutes) + ":" + pad(seconds);
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}

function checkTime() {
  if (Math.abs(audioElement.currentTime - audioElement.duration) < 0.1) {
    console.log("Condition met. Playing song...");
    const nextBtn = document.getElementById("next");
    nextBtn.click();
  }
}

// Call checkTime every 1000 milliseconds (1 second)
setInterval(checkTime, 1000);

export {
  getData,
  playCurrentSong,
  getTrackSrc,
  playAudio,
  updateTitle,
  updateArtistName,
  playshuffle,
};
