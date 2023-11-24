const audioElement = document.getElementById("PlayerAudioSrc");
const progressBar = document.getElementById("Progress__Bar");

audioElement.addEventListener("loadedmetadata", function () {
  const duration = audioElement.duration;
  console.log("Audio Duration:", duration);

  updateProgressBar(duration);
});

function updateProgressBar(duration) {
  progressBar.style.width = "0";

  audioElement.addEventListener("timeupdate", function () {
    const currentTime = audioElement.currentTime;
    const progress = (currentTime / duration) * 100;
    progressBar.style.width = progress + "%";
  });
}

export default updateProgressBar;
