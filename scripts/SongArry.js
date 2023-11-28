import getData from "./fetch.js";

const result = await getData();

const Trackslist = result.tracks.data;

function getSongArry() {
  return Trackslist;
}
export default getSongArry;
