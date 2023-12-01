
let genreArtists = [
	{
		genreName: "Rap/Hip Hop",
		genreArtists: [ "$uicideboy$", "Brennan Savage", "Night Lovell", "Sido", "Eminem", "2Pac", "Apache 207", "Kontra K", "Rin", "Juice Wrld", "Kendrick Lamar", "21 Savage", "Jay-Z", "Marteria", "Samy Deluxe", "KC Rebell", "Bonez MC", "Casper", "Capital Bra", "Samra", "Lil Peep", "GZUZ", "50 Cent"
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
		genreArtists: [ "Ed Sheeran", "Drake", "Alicia Keys", "Miley Cyrus", "Silbermond", "Taylor Swift", "Mark Forster", "LEA", "Shakira", "Nico Santos", "Katy Perry", "Herbert Grönemeyer", "Dua Lipa", "Labrinth", "Beyoncé", "Ellie Goulding", "Whitney Houston"
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
	{
		genreName: "R&B",
		genreArtists: [ "Usher", "Ne-Yo", "Aaliyah", "Beyoncé", "The Weeknd", "Prince", "Rihanna", "Jason Derulo", "Destiny's Child", "DJ Khaled", "Justin Timberlake", "Tory Lanez", "ZAYN", "Tyler, The Creator", "Missy Elliott" ],
	},
	{
		genreName: "Country",
		genreArtists: [ "Chris Stapleton", "Carrie Underwood", "Lainey Wilson", "Dolly Parton", "Tim McGraw", "Luke Combs", "Morgan Wallen", "Old Dominion", "Alan Jackson", "Keith Urban", "Shania Twain", "Ashley McBryde", "Johnny Cash", "Hank Williams", "Billy Ray Cyrus" ],
	},
	{
		genreName: "Klassik",
		genreArtists: ["Gautier Capuçon", "Daniel Barenboim", "Renaud Capuçon", "Sofiane Pamart", "Nelson Freire", "Alexandre Tharaud" ],
	},
	{
		genreName: "Filme/Videospiele",
		genreArtists: [ "Gustavo Santaolalla", "Hans Zimmer", "Shoi Miyazawa", "SQUARE ENIX MUSIC", "Greg Edmonson", "Brian Tyler", "Inon Zur", "Tyler Bates", "Marcin Przybyłowicz", "Jeremy Soule", "Gareth Coker", "chuck e. myers 'sea'", "Hiroyuki Sawano", "Danny Elfman", "Alexandre Desplat" ],
	},
	{
		genreName: "Soul & Funk",
		genreArtists: [ "James Brown", "Etta James", "Jackson 5", "Ray Charles", "Kool & The Gang", "Stevie Wonder", "Diana Ross", "Aretha Franklin", "Marvin Gaye", "Otis Redding", "Billy Paul", "Amy Winehouse" ],
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
	{
		genre: "R&B",
		genreId: "165",
	},
	{
		genre: "Country",
		genreId: "84",
	},
	{
		genre: "Klassik",
		genreId: "98",
	},
	{
		genre: "Filme/Videospiele",
		genreId: "173",
	},
	{
		genre: "Soul & Funk",
		genreId: "169",
	},
];

export const file = {
	genreArtists,
	genreUrlList,
};