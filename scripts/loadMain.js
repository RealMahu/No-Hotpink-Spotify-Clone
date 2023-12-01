import { loadGenre } from "./loadGenre.js";
import { loadSearchSongs } from "./loadSearchSongs.js";
import { file } from "../data/data2Fetch.js";

const newList = file.genreUrlList;
const highArea = document.querySelector(".highlight");
const prevArea = document.querySelector(".preview");
const searchArea = document.querySelector(".search-area");
const dynGreet = document.querySelector(".dynamic-greeting");
const searchSubBtn = document.getElementById("searchSubBtn");
const searchBtn = document.getElementById("searchBtn");
const homeBtn = document.getElementById("homeBtn");
const searchValue = document.getElementById("searchbar");

function loadMain() {
	let currentTime = new Date();
	let currentHour = (currentTime.getHours());
	let greeting = getGreeting(currentHour);
	dynGreet.innerText = greeting;
	// searchArea.style.display = 'none';
	loadGenre(newList);
};

homeBtn.addEventListener("click", (e) => {
	e.preventDefault();
	prevArea.style.display = 'flex';
	loadMain();
})

searchBtn.addEventListener("click", () => {
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

function getGreeting(hour) {
	let greeting = '';
	if (hour >= 6 && hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 16) {
        greeting = 'Good afternoon';
    } else if (hour >= 16 && hour < 20) {
        greeting = 'Good evening';
    } else if (hour >= 20 && hour < 24) {
        greeting = 'Good night vibes';
    } else {
        greeting = 'Night time special';
    }
    return greeting;
}


export { loadMain };