import volume from "./VolumeSlider.js";

const muteaudio = document.getElementById("PlayerAudioSrc");
const muteIcon = document.getElementById("mute");
const labelForIcon = document.getElementById("muteicon");
labelForIcon.innerHTML = `<i class="bi bi-volume-mute"></i>`;

function muteAudio() {
  if (muteIcon.checked) {
    muteaudio.volume = 0;
    labelForIcon.innerHTML = `<i class="bi bi-volume-mute"></i>`;
  } else {
    muteaudio.volume = volume(parseFloat(volume.savedVolume)); // Unmute by setting the volume back to 1
    labelForIcon.innerHTML = `<i class="bi bi-volume-off"></i>`;
  }
}

export default muteAudio;
