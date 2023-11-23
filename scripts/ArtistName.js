import getData from "./fetch.js";

const result = await getData();

function getArtistName() {
  const Artist = document.getElementById("artist");
  Artist.innerText = `${result.artist.name}, ${result.contributors[1].name}`;
}

export { getArtistName };
