import getData from "./fetch.js";

const result = await getData();

function getTitle() {
  const Title = document.getElementById("title");
  Title.innerText = result.title;
}

export { getTitle };
