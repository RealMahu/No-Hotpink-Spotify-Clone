import { loadSongs } from "./loadSongs.js";
import { state } from "../index.js";
import { loadGenre } from "./loadGenre.js";
import apikey from "../apikey.js";
import { file } from "../data/data2Fetch.js";

const genreArea = document.querySelector(".genre-area");
const highArea = document.querySelector(".highlight");
const prevArea = document.querySelector(".preview");

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": apikey,
		"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
	},
};
const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

async function loadArtists(selectedGenre) {
	genreArea.innerHTML = '';
	const genre = file.genreArtists.find(
		(genre) => genre.genreName.toLowerCase() === selectedGenre.toLowerCase()
		);
		if (!genre) {
			console.error("Genre not found");
			return;
		}
	const genreHeading = document.createElement("div");
	const artistCardArea = document.createElement("div");
	genreHeading.classList.add("spacer-heading");
	genreHeading.innerHTML = `
			<div class="headWithBack">
				<h2>Best of ${genre.genreName}</h2>
				<p id="backBtn">Back</p>
			</div>
			<hr>
		`;
	genreArea.appendChild(genreHeading);
	artistCardArea.classList.add("artist-card-area");
	genreArea.appendChild(artistCardArea);
	const backBtn = document.getElementById("backBtn");
	backBtn.addEventListener("click", () => {
		prevArea.style.display = 'flex';
		highArea.style.display = 'flex';
		loadGenre(file.genreUrlList);
	});
	const displayedArtists = new Set();
	try {
		const artistPromises = genre.genreArtists.map(async (genreArtist) => {
		const response = await fetch(`${url}${genreArtist}`, options);
		const data = await response.json();
		if (data.data && Array.isArray(data.data)) {
			data.data.forEach((songData) => {
			const artistName = songData.artist.name;
			const artistImage = songData.artist.picture;
			if (
				isArtistInGenre(artistName.toLowerCase(), genre.genreArtists) &&
				!displayedArtists.has(artistName.toLowerCase())
			) {
				const artistCard = document.createElement("div");
				artistCard.classList.add("artist-card");
				artistCard.innerHTML = `
					<img src="${artistImage}" alt="">
					<div class="artist-name">
						<p>${artistName}</p>
					</div>
				`;
				artistCard.addEventListener("click", () => {
					console.log(`Clicked on Artist: ${artistName}`);
					loadSongs(`${artistName}`);
					state.currentPage = `${selectedGenre}`;
				});
				artistCardArea.appendChild(artistCard);
				displayedArtists.add(artistName.toLowerCase());
			}
			});
		}
    });
    await Promise.all(artistPromises);
	} catch (error) {
		console.error(error);
	}
}

function isArtistInGenre(artistName, genreArtists) {
	return genreArtists.some(
		(genreArtist) => genreArtist.toLowerCase() === artistName
	);
}

export { loadArtists };
