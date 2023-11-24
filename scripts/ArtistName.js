import { playCurrentSong } from "./previewsNextButtons.js";

async function updateArtistName() {
  const song = await playCurrentSong();

  function getArtist() {
    const Artist = document.getElementById("artist");
    Artist.innerText = `${song.artist.name}`;
  }

  getArtist();
}

updateArtistName();

export { updateArtistName };
