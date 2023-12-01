import { loadArtists } from "./loadArtist.js";
import apikey from "../apikey.js";
const genreArea = document.querySelector(".genre-area");
const highArea = document.querySelector(".highlight");
const prevArea = document.querySelector(".preview");
const searchArea = document.querySelector(".search-area");

async function loadGenre(genres) {
	const headingGenre = document.createElement("div");
	const genreCardArea = document.createElement("div");
	
	genreArea.innerHTML = "";
	headingGenre.classList.add("spacer-heading");
	headingGenre.innerHTML = `
			<div class="headWithBack">
				<h2>Browse all Genres</h2>
			</div>
			<hr>
		`;
	genreCardArea.classList.add("genre-card-area");
	genreArea.appendChild(headingGenre);
	genreArea.appendChild(genreCardArea);
	genres.forEach(async (genre) => {
    let response = await fetch(
		`https://deezerdevs-deezer.p.rapidapi.com/genre/${genre.genreId}`,
		{
			method: "GET",
			headers: {
			"X-RapidAPI-Key": apikey,
			"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
			},
		}
    );
    let data = await response.json();
    // console.log(data);
	const randomColor = getRandomRGBColor();
    const genreCard = document.createElement("div");
    genreCard.classList.add("genre-card");
    genreCard.innerHTML = `
			<img src="${data.picture}" alt="">
			<p>${data.name}</p>
		`;

	genreCard.style.backgroundColor = randomColor;

    genreCard.addEventListener("click", () => {
		console.log(`Clicked on Genre: ${data.name}`);
		prevArea.style.display = 'none';
		highArea.style.display = 'none';
		searchArea.style.display = 'none';
		loadArtists(`${data.name}`);
    });
    genreCardArea.appendChild(genreCard);
	});
}

function getRandomRGBColor() {
	const red = Math.floor(Math.random() * 256);
	const green = Math.floor(Math.random() * 256);
	const blue = Math.floor(Math.random() * 256);
	return `rgb(${red}, ${green}, ${blue})`;
}

export { loadGenre };
