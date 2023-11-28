import getSongArry from "./SongArry.js";

const songs = getSongArry();

const suffleIcon = document.getElementById("shuffle");
const labelForIcon = document.getElementById("shuffleicon");
labelForIcon.innerHTML = `<i id="shuffle1" class="bi bi-shuffle"></i>`;

function playshuffle() {
  if (suffleIcon.checked) {
    labelForIcon.innerHTML = `<i id="shuffle1" class="bi bi-shuffle"></i>`;
    labelForIcon.style.color = "white";
  } else {
    labelForIcon.innerHTML = `<i id="shuffle1" class="bi bi-shuffle"></i>`;
    labelForIcon.style.color = "gray";
  }
}

export { playshuffle };
