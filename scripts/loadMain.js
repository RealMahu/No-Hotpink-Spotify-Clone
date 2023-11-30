import { loadGenre, genreUrlList } from "./loadGenre.js";

const highArea = document.querySelector(".highlight");
const prevArea = document.querySelector(".preview");
const dynGreet = document.querySelector(".dynamic-greeting");

function loadMain() {
	let currentTime = new Date();
	let currentHour = (currentTime.getHours());
	let greeting = getGreeting(currentHour);
	dynGreet.innerText = greeting;

	loadGenre(genreUrlList);
}

function getGreeting(hour) {
	let greeting = '';

	if (hour >= 6 && hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 16) {
        greeting = 'Good afternoon';
    } else if (hour >= 16 && hour < 20) {
        greeting = 'Good evening mood';
    } else if (hour >= 20 && hour < 24) {
        greeting = 'Good night vibes';
    } else {
        greeting = 'Night time special';
    }
    return greeting;
}


export { loadMain };