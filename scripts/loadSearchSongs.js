import { getData, playCurrentSong, playAudio } from "./fetch.js";
import apikey from "../data/apikey.js";

const genreArea = document.querySelector(".genre-area");

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": apikey,
		"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
	},
};
const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

async function loadSearchSongs(searchInput) {
	genreArea.innerHTML = '';
	const genreHeading = document.createElement("div");
	const musicCardArea = document.createElement("div");
	genreHeading.classList.add("spacer-heading");
	genreHeading.innerHTML = `
		<div class="headWithBack">
			<h2>All results of '${searchInput}'</h2>
		</div>
		<hr>
	`;
	genreArea.appendChild(genreHeading);
	musicCardArea.classList.add("music-card-area");
	genreArea.appendChild(musicCardArea);
	try {
		const response = await fetch(`${url}${searchInput}`, options);
		const data = await response.json();
		if (data.data && Array.isArray(data.data)) {
			data.data.forEach((songData) => {
				const albumId = songData.album.id;
				const trackId = songData.id;
				const trackIdLink = songData.link;
				const artistName = songData.artist.name;
				const musicCard = document.createElement("div");
				musicCard.classList.add("music-card");
				musicCard.setAttribute("id", albumId);
				let title = songData.title_short;
				const titleLength = title.split("");
				if (titleLength.length >= 30) {
					title = title.slice(0, 37) + "...";
				}
				musicCard.innerHTML = `
					<img src="${songData.album.cover}" alt="">
					<div class="card-btm">
						<p>${title}</p>
						<small>${artistName}</small>
					</div>
				`;
				musicCard.addEventListener("click", async () => {
					console.log(`Clicked on ${songData.title_short}, by ${artistName}`);
					console.log(`Album ID: ${albumId}\nTrack ID: ${trackId},\nTrack Link: ${trackIdLink}`);
					getData(albumId, trackId);
				});
				musicCardArea.appendChild(musicCard);
			});
		}
    console.log(data.data);
	} catch (error) {
		console.error(error);
	}
}


export { loadSearchSongs };
