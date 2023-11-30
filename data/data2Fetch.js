
let genreArtists = [
	{
		genreName: "Rap/Hip Hop",
		genreArtists: [ "$uicideboy$", "Brennan Savage", "Night Lovell", "Sido", "Eminem", "2Pac", "Apache 207", "Kontra K", "Rin", "Juice Wrld", "Kendrick Lamar", "21 Savage", "Jay-Z", "Marteria", "Samy Deluxe", "KC Rebell", "Bonez MC", "Casper", "Capital Bra", "Samra", "Lil Peep", "GZUZ",
		],
	},
	{
		genreName: "Rock",
		genreArtists: [ "Linkin Park", "The Beatles", "Bon Jovi", "Green Day", "The Rolling Stones", "Die Ärzte", "Die Toten Hosen", "Guns N' Roses", "Depeche Mode", "Queen", "Motörhead", "AC/DC",
		],
	},
	{
		genreName: "Heavy Metal",
		genreArtists: [ "System of a Down", "Electric Callboy", "Slipknot", "Judas Priest", "Lamb of God", "Metallica", "Cannibal Corpse", "Sevendust", "Bad Omens", "Korn", "Rammstein", "Arch Enemy", "Papa Roach", "Cradle of Filth", "Skid Row", "SUICIDE SILENCE",
		],
	},
	{
		genreName: "Pop",
		genreArtists: [ "Ed Sheeran", "Drake", "Alicia Keys", "Miley Cyrus", "Silbermond", "Taylor Swift", "Mark Forster", "LEA", "Shakira", "Nico Santos", "Katy Perry", "Herbert Grönemeyer", "Dua Lipa", "Labrinth", "Beyoncé", "Ellie Goulding",
		],
	},
	{
		genreName: "Jazz",
		genreArtists: [ "Frank Sinatra", "Peter Cincotti", "Keith Jarrett", "Louis Armstrong", "Theo Croker", "John Coltrane", "Norah Jones", "Duke Ellington", "Charlie Parker", "Miles Davis", "Diana Krall", "Gregory Porter",
		],
	},
	{
		genreName: "Dance",
		genreArtists: [ "David Guetta", "Felix Jaehn", "Armin van Buuren", "Martin Garrix", "Charlotte De Witte", "Hardwell", "Dimitri Vegas", "Afrojack", "Steve Aoki", "Avicii", "Marshmello", "Tiësto", "Nora En Pure", "Miss Monique", "The Chainsmokers", "Sofi Tukker", "Diplo", "Alan Walker", "Benny Benassi",
		],
	},
	{
		genreName: "Electro",
		genreArtists: [ "Aphex Twin", "Peggy Gou", "Fred again..", "Daft Punk", "Arca", "Laurent Garnier", "Yaeji", "Caribou", "Kh", "Four Tet", "David Guetta", "Calvin Harris", "The Chainsmokers", "Kygo", "Deichkind", "Benny Benassi", "TheFatRat",
		],
	},
	{
		genreName: "Reggae",
		genreArtists: [ "Bob Marley & The Wailers", "Burning Spear", "UB40", "Bunny Wailer", "U-Roy", "Steel Pulse", "Max Romeo", "Alborosie", "Clinton Fearon", "Manu Chao", "Peter Tosh", "Jah Cure", "Maxi Priest", "Sean Paul", "Flox",
		],
	},
];

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

export const file = {
	genreArtists,
	genreUrlList,
};