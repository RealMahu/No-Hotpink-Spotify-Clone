// import { loadSongs } from "./loadSongs.js";
import { loadArtists } from "./loadArtist.js";
import { state } from "../index.js";
const mainArea = document.querySelector(".style-main");

const genreUrlList = [
  {
    genre: "Jazz",
    genreId: "129",
  },
  {
    genre: "Rap/Hip Hop",
    genreId: "116",
  },
  {
    genre: "Heavy Metal",
    genreId: "464",
  },
  {
    genre: "Pop",
    genreId: "132",
  },
  {
    genre: "Rock",
    genreId: "152",
  },
  {
    genre: "Dance",
    genreId: "113",
  },
  {
    genre: "Electro",
    genreId: "106",
  },
  {
    genre: "Reggae",
    genreId: "144",
  },
];

async function loadGenre(genres) {
  mainArea.innerHTML = "";
  const headingGenre = document.createElement("div");
  const genreCardArea = document.createElement("div");

  headingGenre.classList.add("spacer-heading");
  headingGenre.innerHTML = `
		<div class="headWithBack">
			<h2>Browse all</h2>
		</div>
		<hr>
	`;
  genreCardArea.classList.add("genre-card-area");
  mainArea.appendChild(headingGenre);
  mainArea.appendChild(genreCardArea);
  genres.forEach(async (genre) => {
    let response = await fetch(
      `https://deezerdevs-deezer.p.rapidapi.com/genre/${genre.genreId}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "810bbcad64msh20c194b589a92f1p12bdb0jsn6f4ab7b4077a",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      }
    );
    let data = await response.json();
    // console.log(data);

    const genreCard = document.createElement("div");
    genreCard.classList.add("genre-card");
    genreCard.innerHTML = `
			<img src="${data.picture}" alt="">
			<p>${data.name}</p>
		`;

    genreCard.addEventListener("click", () => {
      console.log(`Clicked on Genre: ${data.name}`);
      loadArtists(`${data.name}`);
    });
    genreCardArea.appendChild(genreCard);
  });
}

export { loadGenre, genreUrlList };