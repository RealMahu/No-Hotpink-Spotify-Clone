import apikey from "../data/apikey.js";
import { file } from "../data/data2Fetch.js";
import { getData } from "./fetch.js";
import { loadLogin, logging } from "./loadForm.js";
import { getGreeting, loadMain } from "./loadMain.js";

const toggle = document.getElementById("switch");
const favIco = document.getElementById("favicon")
const pageTitle = document.querySelector("title");
const tabBox = document.querySelector(".tab-box");

const chartBtn = document.querySelector(".charts");
const creatorBtn = document.querySelector(".creators");
const loginBtn = document.querySelector(".login");
const accBtn = document.querySelector(".acc");

const chartList = file.chartList;
const artist = chartList.artist;

const options = {
	method: "GET",
	headers: {
		"X-RapidAPI-Key": apikey,
		"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
	},
};
const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

async function loadTab() {
	tabBox.innerHTML = ``;
	if (chartBtn.classList.contains("active")) {
		try {
			chartList.forEach(async (song) => {
				const resp = await fetch(`${url}${song.artist}`, options);
				if (!resp.ok) {
					throw new Error("Response not ok");
				}
				const data = await resp.json();
				const matchingSong = data.data.find((item) => item.title === song.title);
				if (matchingSong) {
					const cover = matchingSong.album.cover_small;
					const albumTitle = matchingSong.album.title;
					const title = matchingSong.title_short;
					const artist = matchingSong.artist.name;
					const albumId = matchingSong.album.id;
					const trackId = matchingSong.id;
					const chartBox = document.createElement("div")
					chartBox.classList.add("chart-box");
					chartBox.innerHTML = `
						<img src="${cover}" alt="">
						<div class="song-box-info">
							<p>${title}</p>
							<small>${artist} <span>•</span> <i>${albumTitle}</i></small>
						</div>
					`;
					tabBox.appendChild(chartBox);
					chartBox.addEventListener("click", (e) => {
						e.preventDefault();
						getData(albumId, trackId);
					});
				} else {
					console.log(`Daten für ${song.artist} nicht gefunden.`);
				}
			});
		} catch (error) {
			console.error(error);
		}
	}
}

function toggleAccentColor() {
	const r = document.querySelector(':root');
	if (toggle.checked) {
		r.style.setProperty('--accent-color', '#ff1389');
		favIco.href = "/img/icon.ico";
		pageTitle.innerText = 'Hotpink Spotify'
	} else {
		r.style.setProperty('--accent-color', '#2ecc71');
		favIco.href = "/img/icon2.ico";
		pageTitle.innerText = 'No Hotpink Spotify'
	}
}

toggle.addEventListener("change", (e) => {
	e.preventDefault();
	toggleAccentColor();
});

accBtn.addEventListener("click", (e) => {
	e.preventDefault();
	accBtn.classList.add("active");
	chartBtn.classList.remove("active");
	creatorBtn.classList.remove("active");
	loginBtn.classList.remove("active");
	setTimeout(logging, 200);
	setTimeout(getGreeting, 200);
})

loginBtn.addEventListener("click", (e) => {
	e.preventDefault();
	tabBox.innerHTML = '';
	chartBtn.classList.remove("active");
	creatorBtn.classList.remove("active");
	accBtn.classList.remove("active");
	loginBtn.classList.add("active");
	setTimeout(loadLogin, 200)
});

chartBtn.addEventListener("click", (e) => {
	e.preventDefault();
	chartBtn.classList.add("active");
	creatorBtn.classList.remove("active");
	accBtn.classList.remove("active");
	loginBtn.classList.remove("active");
	setTimeout(loadTab, 200)
});

creatorBtn.addEventListener("click", (e) => {
	e.preventDefault();
	creatorBtn.classList.add("active");
	chartBtn.classList.remove("active");
	accBtn.classList.remove("active");
	loginBtn.classList.remove("active");
	tabBox.innerHTML = '';
	setTimeout(createProfiles, 200)
});

function createProfiles(){
	tabBox.innerHTML = `
		<div class="michelle user">
			<img src="https://avatars.githubusercontent.com/u/139325457?v=4" alt="">
			<div class="user-info">
				<p>Michelle Sträßer</p>
				<div class="smalltags">
					<small>29 <span>•</span> Germany</small>
					<small>DCI Student</small>
				</div>
			</div>
		</div>
		<div class="david user">
			<img src="https://avatars.githubusercontent.com/u/117653004?v=4" alt="">
			<div class="user-info">
				<p>David Brandenburg</p>
				<div class="smalltags">
					<small>31 <span>•</span> Germany</small>
					<small>DCI Student</small>
				</div>
			</div>
		</div>
		<div class="danny user">
			<img src="https://avatars.githubusercontent.com/u/129070281?v=4" alt="Picture of Danny in black and white">
			<div class="user-info">
				<p>Danny Böhm</p>
				<div class="smalltags">
					<small>30 <span>•</span> Germany</small>
					<small>DCI Student</small>
				</div>
			</div>
		</div>
		<div class="ari user">
			<img src="https://avatars.githubusercontent.com/u/57349348?v=4" alt="">
			<div class="user-info">
				<p>Ari Razab</p>
				<div class="smalltags">
					<small>29 <span>•</span> Germany</small>
					<small>DCI Teacher</small>
				</div>
			</div>
		</div>
	`;

	const michelle = document.querySelector(".michelle"); 
	const danny = document.querySelector(".danny");
	const david = document.querySelector(".david");
	const ari = document.querySelector(".ari");

	ari.addEventListener("click", (e) => {
		e.preventDefault();
		const linkUrl = "https://github.com/AriiMe";
		window.open(linkUrl, '_blank');
	});

	michelle.addEventListener("click", (e) => {
		e.preventDefault();
		const linkUrl = "https://github.com/MichelleStraesser";
		window.open(linkUrl, '_blank');
	});

	danny.addEventListener("click", (e) => {
		e.preventDefault();
		const linkUrl = "https://github.com/RealMahu";
		window.open(linkUrl, '_blank');
	});

	david.addEventListener("click", (e) => {
		e.preventDefault();
		const linkUrl = "https://github.com/David-Brandenburg";
		window.open(linkUrl, '_blank');
	});
}



export { toggleAccentColor, loadTab };