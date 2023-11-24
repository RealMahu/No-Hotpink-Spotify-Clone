import { playCurrentSong } from "./previewsNextButtons.js";

async function updateTitle() {
  const song = await playCurrentSong();
  console.log(song);

  function getTitle() {
    const Title = document.getElementById("title");
    const infotitle = document.getElementById("infoTitle");
    Title.innerText = song.title;
    infotitle.title = Title.innerText;
  }

  getTitle();
}

// Optional: Rufe die Funktion auch sofort auf, um den Titel beim Start zu setzen
updateTitle();

export { updateTitle };
