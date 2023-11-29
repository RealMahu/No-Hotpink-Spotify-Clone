// import { playCurrentSong } from "./previewsNextButtons.js";

// async function updateTitle() {
//   const song = await playCurrentSong();
//   console.log(song);

//   function getTitle() {
//     const Title = document.getElementById("title");
//     const infotitle = document.getElementById("infoTitle");
//     Title.innerText = song.title;
//     infotitle.title = Title.innerText;
//   }

//   getTitle();
// }

// // Optional: Rufe die Funktion auch sofort auf, um den Titel beim Start zu setzen
// updateTitle();

// export { updateTitle };

async function getData(albumId, trackId) {
  const idToUse = albumId || defaultId;
  try {
    const response = await fetch(`${url}${idToUse}`, options);
    const result = await response.json();
    console.log("Albumname", result.title);
    console.log("Album", result);
    // IIFE für die Song und Artist Anzeige im Player
    const Artist = document.getElementById("artist");
    const infoArtist = document.getElementById("title");
    const albumImg = document.getElementById("pic");
    const foundTrack = result.tracks.data.find((track) => track.id === trackId);
    (function () {
      if (foundTrack) {
        infoArtist.innerText = foundTrack.title_short;
        albumImg.src = result.cover_small;
      } else {
        throw new Error("Track not found in the album.");
      }
      Artist.innerText = result.artist.name;
    })();
  } catch (error) {
    console.error(error);
  }
}
