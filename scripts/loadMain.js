import { loadGenre } from "./loadGenre.js";
import { loadSearchSongs } from "./loadSearchSongs.js";
import { file } from "../data/data2Fetch.js";
import { loadLibrary } from "./loadLibrary.js";
import { loadTab } from "./loadTab.js";

const newList = file.genreUrlList;
const highArea = document.querySelector(".highlight");
const prevArea = document.querySelector(".preview");
const searchArea = document.querySelector(".search-area");
const dynGreet = document.querySelector(".dynamic-greeting");
const searchSubBtn = document.getElementById("searchSubBtn");
const searchBtn = document.getElementById("searchBtn");
const homeBtn = document.getElementById("homeBtn");
const searchValue = document.getElementById("searchbar");
const musicCardArea = document.querySelector(".music-card-area");

function loadMain() {
	if (!localStorage.getItem("accounts")) {
		localStorage.setItem("accounts", JSON.stringify([]));
	};
	let accounts = JSON.parse(localStorage.getItem("accounts"));
	let currentTime = new Date();
	let currentHour = (currentTime.getHours());
	let greeting = getGreeting(currentHour);
	dynGreet.innerText = greeting;
	loadGenre(newList);
	loadLibrary();
};

homeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	prevArea.style.display = 'flex';
	loadMain();
})

searchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (searchArea.style.display === 'block'){
		console.log("Search Btn Clicked");
		searchArea.style.display = 'none';
	} else {
		searchArea.style.display = 'block';
	}
});

searchSubBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const search = searchValue.value;
	if (!search) {
		alert("input is empty")
	} else {
		searchValue.value = '';
		console.log(search);
		prevArea.style.display = 'none';
		loadSearchSongs(search)
	}
});

// searchValue.addEventListener("input", (e) => {
// 	e.preventDefault();
// 	const search = searchValue.value;
// 	if (search === 0) {
// 		musicCardArea.innerHTML = '';
// 	} else {
// 		console.log(search);
// 		prevArea.style.display = 'none';
// 		loadSearchSongs(search)
// 	}
// });

function getGreeting(hour) {
	let accounts = JSON.parse(localStorage.getItem("accounts"));
	let greeting = '';
	const loggedInUser = accounts.find(account => account.loggedIn === true);
	if (loggedInUser) {
		const userName = loggedInUser.username;
		if (hour >= 6 && hour < 12) {
			greeting = `Good morning, ${userName}`;
		} else if (hour >= 12 && hour < 16) {
			greeting = `Chill afternoon, ${userName}`;
		} else if (hour >= 16 && hour < 20) {
			greeting = `Good evening, ${userName}`;
		} else if (hour >= 20 && hour < 24) {
			greeting = `Night vibes for you, ${userName}`;
		} else {
			greeting = `Night time specials for you, ${userName}`;
		}
	} else {
		if (hour >= 6 && hour < 12) {
			greeting = 'Good morning';
		} else if (hour >= 12 && hour < 16) {
			greeting = 'Chill afternoon';
		} else if (hour >= 16 && hour < 20) {
			greeting = 'Good evening';
		} else if (hour >= 20 && hour < 24) {
			greeting = 'Night vibes for you';
		} else {
			greeting = 'Night time specials for you';
		}
	}
	return greeting;
}


export { loadMain, getGreeting };