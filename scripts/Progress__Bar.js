const audioElement = document.getElementById("PlayerAudioSrc");
const seekSlider = $("#Slider_progress"); // Use jQuery to select the slider

audioElement.addEventListener("loadedmetadata", function () {
  const duration = audioElement.duration;
  console.log("Audio Duration:", duration);

  // Initialize the slider with the 'value' option
  seekSlider.slider({
    min: 0,
    max: 100,
    value: 0, // Initial value
    range: "min",
    slide: function (event, ui) {
      const seekTime = (ui.value / 100) * duration;
      audioElement.currentTime = seekTime;
    },
  });

  // Update the visual representation of the slider
  updateProgressBar(duration);
});

function updateProgressBar(duration) {
  audioElement.addEventListener("timeupdate", function () {
    const currentTime = audioElement.currentTime;
    const progress = (currentTime / duration) * 100;

    // Use the 'value' method to update the visual representation of the slider
    seekSlider.slider("value", progress);
  });
}

export { updateProgressBar };
