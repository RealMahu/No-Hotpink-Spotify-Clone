import { loadSongs } from './scripts/loadSongs.js';
import { loadGenre, genreUrlList } from './scripts/loadGenre.js';

let currentPage;

loadGenre(genreUrlList);

export const state = {
	currentPage,
};
