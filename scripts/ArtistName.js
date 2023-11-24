import { playCurrentSong } from "./previewsNextButtons.js";

async function updateArtistName() {
  const song = await playCurrentSong();

  function getArtist() {
    const Artist = document.getElementById("artist");
    const infoArtist = document.getElementById("infoArtist");
    Artist.innerText = `${song.artist.name}`;
    infoArtist.title = song.title;
  }

  getArtist();
}

updateArtistName();

export { updateArtistName };
