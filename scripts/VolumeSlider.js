const audioModule = (function () {
  const volumeSlider = document.getElementById("volume");
  const audioElement = document.getElementById("PlayerAudioSrc");
  const muteIcon = document.getElementById("mute");
  const labelForIcon = document.getElementById("muteicon");

  let savedVolume = localStorage.getItem("savedVolume");

  // Initialize the jQuery UI Slider
  $(volumeSlider).slider({
    min: 0,
    max: 100,
    value: savedVolume !== null ? parseFloat(savedVolume) : 3,
    range: "min",
    slide: function (event, ui) {
      setVolume(ui.value);
    },
  });

  function setVolume(volume) {
    audioElement.volume = volume / 100;
    console.log("Volume:", volume);
    if (volume === 0) {
      labelForIcon.innerHTML = `<i class="bi bi-volume-mute"></i>`;
    } else if (volume <= 33) {
      labelForIcon.innerHTML = `<i class="bi bi-volume-off"></i>`;
    } else if (volume <= 66) {
      labelForIcon.innerHTML = `<i class="bi bi-volume-down"></i>`;
    } else if (volume > 66) {
      labelForIcon.innerHTML = `<i class="bi bi-volume-up"></i>`;
    }

    localStorage.setItem("savedVolume", volume.toString());

    savedVolume = volume.toString();
  }

  if (savedVolume !== null) {
    setVolume(parseFloat(savedVolume));
  }

  function muteAudio() {
    if (muteIcon.checked) {
      audioElement.volume = 0;
      $(volumeSlider).slider("value", 0);
      labelForIcon.innerHTML = `<i class="bi bi-volume-mute"></i>`;
    } else {
      $(volumeSlider).slider("value", parseFloat(savedVolume));
      setVolume(parseFloat(savedVolume));
    }
  }

  return {
    setVolume: setVolume,
    muteAudio: muteAudio,
  };
})();

export { audioModule };
