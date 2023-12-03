import { playCurrentSong } from "./fetch.js";

const libSection = document.querySelector(".library-songs");
const trash = document.getElementById("trash");

function loadLibrary() {
	const savedSongsString = localStorage.getItem("savedsongs");
	if (savedSongsString) {
		const savedSongs = JSON.parse(savedSongsString);
		libSection.innerHTML = '';
		if (savedSongs.length >= 1){
			savedSongs.forEach(song => {
				const cover = song.album.cover_small;
				const artist = song.artist.name;
				const title = song.title_short;
				const albumTitle = song.album.title;
				const trackId = song.id;
				const position = savedSongs.indexOf(song);
				const songBox = document.createElement("div");
				songBox.classList.add("song-box");
				songBox.innerHTML = `
					<img src="${cover}" alt="">
					<div class="song-box-info">
						<p>${title}</p>
						<small>${artist} <span>•</span> <i>${albumTitle}</i></small>
					</div>
				`;
				libSection.appendChild(songBox);
				songBox.addEventListener("click", () => {
					// console.log(`Clicked on ${title} by ${artist} in the library`);
					// console.log("SavedSongs:", savedSongs)
					// console.log(`TrackID: ${trackId}, Index: ${position}`)
					playLibrary(savedSongs, trackId)
				});
			});
		} else {
			emptyLib();
		}
		
	} else if (!savedSongsString) {
		emptyLib();
	}
}

function emptyLib() {
	libSection.innerHTML = '';
	const songBox = document.createElement("div");
	songBox.classList.add("empty-box")
	songBox.innerHTML = `
		<div class="empty">
			<i class="bi bi-box2-heart-fill"></i>
			<p>Your library is empty</p>
		</div>
	`
	libSection.appendChild(songBox);
}

trash.addEventListener("click", () => {
	console.log("trashbtn clicked")
	localStorage.removeItem("savedsongs");
	setTimeout(loadLibrary, 500)
})

function playLibrary(obj, trackId){
	const hearticons = document.getElementById("hearticon");
	const Picture = document.getElementById("pic");
	const foundTrack = obj.find((track) => track.id === trackId)

	// const cover = foundTrack.album.cover_small;
	const cover = "img/Heart.webp";
	hearticons.innerHTML = `<i id="heart1" class="bi bi-heart-fill"></i>`;
	const heart = document.getElementById("heart1");
	heart.style.color = "#fff";
	const trackList = obj;
	let songs = trackList; 
	Picture.src = cover;

	if (foundTrack) {
		if (trackList.indexOf(foundTrack) !== -1) {
			let currentSongIndex = trackList.indexOf(foundTrack);
			const prevBtn = document.getElementById("prev");
			prevBtn.addEventListener("click", (e) => {
				e.preventDefault();
				currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
				playCurrentSong(songs, currentSongIndex);
			});
			const nextBtn = document.getElementById("next");
			nextBtn.addEventListener("click", (e) => {
				e.preventDefault();
				currentSongIndex = (currentSongIndex + 1) % songs.length;
				playCurrentSong(songs, currentSongIndex);
			});
			playCurrentSong(songs, currentSongIndex);
		}
	}
}

export {
	loadLibrary,
}