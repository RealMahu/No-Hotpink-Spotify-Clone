import { getData } from "./fetch.js";

const result = await getData();

function getSongArry() {
  return Trackslist;
}
const Trackslist = result.tracks.data;

export default getSongArry;
