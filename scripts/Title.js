import { playCurrentSong } from "./previewsNextButtons.js";

async function updateTitle() {
  const song = await playCurrentSong();
  console.log(song);

  function getTitle() {
    const Title = document.getElementById("title");
    Title.innerText = song.title;
  }

  getTitle();
}

// Optional: Rufe die Funktion auch sofort auf, um den Titel beim Start zu setzen
updateTitle();

export { updateTitle };
