const audioElement = document.getElementById("PlayerAudioSrc");
const timer = document.getElementById("Song_Time");
const timeFull = document.getElementById("TimeFull");

audioElement.addEventListener("loadedmetadata", function () {
  const duration = audioElement.duration;
  timer.innerText = formatTime(0); // Startzeit auf 00:00 setzen
  timeFull.innerText = formatTime(duration);
});

audioElement.addEventListener("timeupdate", function () {
  const currentTime = audioElement.currentTime;
  const remainingTime = audioElement.duration - currentTime;
  timer.innerText = formatTime(currentTime); // Anzeige der vergangenen Zeit aufsteigend
});

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return pad(minutes) + ":" + pad(seconds);
}

function pad(number) {
  return number < 10 ? "0" + number : number;
}

export { formatTime, pad };
