import { loadSongs } from "./loadSongs.js";
import { state } from "../index.js";
import { loadGenre, genreUrlList } from "./loadGenre.js";

const mainArea = document.querySelector(".style-main");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "810bbcad64msh20c194b589a92f1p12bdb0jsn6f4ab7b4077a",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};
const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=";

let genreArtists = [
  {
    genreName: "Rap/Hip Hop",
    genreArtists: [
      "$uicideboy$",
      "Brennan Savage",
      "Night Lovell",
      "Sido",
      "Eminem",
      "2Pac",
      "Apache 207",
      "Kontra K",
      "Rin",
      "Juice Wrld",
      "Kendrick Lamar",
      "21 Savage",
      "Jay-Z",
      "Marteria",
      "Samy Deluxe",
      "KC Rebell",
      "Bonez MC",
      "Casper",
      "Capital Bra",
      "Samra",
      "Lil Peep",
      "GZUZ",
    ],
  },
  {
    genreName: "Rock",
    genreArtists: [
      "Linkin Park",
      "The Beatles",
      "Bon Jovi",
      "Green Day",
      "The Rolling Stones",
      "Die Ärzte",
      "Die Toten Hosen",
      "Guns N' Roses",
      "Depeche Mode",
      "Queen",
      "Motörhead",
      "AC/DC",
    ],
  },
  {
    genreName: "Heavy Metal",
    genreArtists: [
      "System of a Down",
      "Electric Callboy",
      "Slipknot",
      "Judas Priest",
      "Lamb of God",
      "Metallica",
      "Cannibal Corpse",
      "Sevendust",
      "Bad Omens",
      "Korn",
      "Rammstein",
      "Arch Enemy",
      "Papa Roach",
      "Cradle of Filth",
      "Skid Row",
      "SUICIDE SILENCE",
    ],
  },
  {
    genreName: "Pop",
    genreArtists: [
      "Ed Sheeran",
      "Drake",
      "Alicia Keys",
      "Miley Cyrus",
      "Silbermond",
      "Taylor Swift",
      "Mark Forster",
      "LEA",
      "Shakira",
      "Nico Santos",
      "Katy Perry",
      "Herbert Grönemeyer",
      "Dua Lipa",
      "Labrinth",
      "Beyoncé",
      "Ellie Goulding",
    ],
  },
  {
    genreName: "Jazz",
    genreArtists: [
      "Frank Sinatra",
      "Peter Cincotti",
      "Keith Jarrett",
      "Louis Armstrong",
      "Theo Croker",
      "John Coltrane",
      "Norah Jones",
      "Duke Ellington",
      "Charlie Parker",
      "Miles Davis",
      "Diana Krall",
      "Gregory Porter",
    ],
  },
  {
    genreName: "Dance",
    genreArtists: [
      "David Guetta",
      "Felix Jaehn",
      "Armin van Buuren",
      "Martin Garrix",
      "Charlotte De Witte",
      "Hardwell",
      "Dimitri Vegas",
      "Afrojack",
      "Steve Aoki",
      "Avicii",
      "Marshmello",
      "Tiësto",
      "Nora En Pure",
      "Miss Monique",
      "The Chainsmokers",
      "Sofi Tukker",
      "Diplo",
      "Alan Walker",
      "Benny Benassi",
    ],
  },
  {
    genreName: "Electro",
    genreArtists: [
      "Aphex Twin",
      "Peggy Gou",
      "Fred again..",
      "Daft Punk",
      "Arca",
      "Laurent Garnier",
      "Yaeji",
      "Caribou",
      "Kh",
      "Four Tet",
      "David Guetta",
      "Calvin Harris",
      "The Chainsmokers",
      "Kygo",
      "Deichkind",
      "Benny Benassi",
      "TheFatRat",
    ],
  },
  {
    genreName: "Reggae",
    genreArtists: [
      "Bob Marley",
      "Burning Spear",
      "UB40",
      "Bunny Wailer",
      "U-Roy",
      "Steel Pulse",
      "Max Romeo",
      "Alborosie",
      "Clinton Fearon",
      "Manu Chao",
      "Peter Tosh",
      "Jah Cure",
      "Maxi Priest",
      "Sean Paul",
      "Flox",
    ],
  },
];

async function loadArtists(selectedGenre) {
  mainArea.innerHTML = "";
  const genre = genreArtists.find(
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
  mainArea.appendChild(genreHeading);
  artistCardArea.classList.add("artist-card-area");
  mainArea.appendChild(artistCardArea);
  const backBtn = document.getElementById("backBtn");
  backBtn.addEventListener("click", () => {
    loadGenre(genreUrlList);
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
                            <p>${artistName}</p>
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
