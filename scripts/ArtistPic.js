import getData from "./fetch.js";

const result = await getData();

function getPic() {
  const Picture = document.getElementById("pic");
  Picture.src = result.artist.picture_small;
}

export { getPic };
