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
  console.log(albumId);
  const response = await fetch(`${url}${idToUse}`, options);
  const result = await response.json();
  console.log(result);
  const Tracklist = result.tracks.data;
  console.log(Tracklist);
  let songs = Tracklist;
  const originalSongArry = songs;
  localStorage.setItem("originalSongArry", JSON.stringify(originalSongArry));
  const Picture = document.getElementById("pic");
  Picture.src = result.cover_small;
  const foundTrack = result.tracks.data.find((track) => track.id === trackId);
  console.log(foundTrack);
  if (foundTrack) {
    if (Tracklist.indexOf(foundTrack) !== -1) {
      console.log("ist da");
      let currentSongIndex = Tracklist.indexOf(foundTrack);
      console.log(currentSongIndex);
      playCurrentSong(songs, currentSongIndex);
      return currentSongIndex;
    } else {
      console.log("nope");
    }
  }

  //----------------------------------------------------------

  //--------------------------------------------------------

  //--------------------------------------------------------

  return { songs, originalSongArry, result, currentSongIndex };
}

const audioPlayer = document.getElementById("PlayerAudioSrc");
const shuffleInput = document.getElementById("shuffle"); // Assuming you have an input element with id "shuffle"

async function playCurrentSong(songs1, csi) {
  const currentSong = await songs1[csi];
  console.log("hallo", currentSong);
  updateTitle(currentSong);
  updateArtistName(currentSong);
  audioPlayer.src = currentSong.preview;
  return currentSong;
}

async function playPreviousSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  playCurrentSong(songs, currentSongIndex);
  console.log(currentSongIndex);
}

function playNextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playCurrentSong(songs, currentSongIndex);
  console.log(currentSongIndex);
}

function playSong() {
  const playInput = document.getElementById("play");

  if (playInput.checked) {
    // Toggle-Button für das Abspielen ist aktiviert
    if (shuffleInput.checked) {
      // Toggle-Button für das Mischen ist ebenfalls aktiviert
      shuffleSongs();
    } else if (!shuffleInput.checked) {
      const OriginArry = JSON.parse(localStorage.getItem("originalSongArry"));
      songs = OriginArry;
      console.log(songs);
    }
    playAudio();
  } else {
    // Toggle-Button für das Abspielen ist deaktiviert
    playCurrentSong(songs, currentSongIndex);
  }
}

function shuffleSongs() {
  for (let i = songs.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [songs[i], songs[j]] = [songs[j], songs[i]];
  }
}

// Event Listener für den shuffle-Button hinzufügen
shuffleInput.addEventListener("change", () => {
  if (shuffleInput.checked) {
    shuffleSongs();
    console.log(songs);
  } else {
    songs = JSON.parse(localStorage.getItem("originalSongArry"));
  }
});

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

export {
  getData,
  playCurrentSong,
  playPreviousSong,
  playNextSong,
  playSong,
  getTrackSrc,
  playAudio,
  updateTitle,
  updateArtistName,
};
