document.addEventListener("DOMContentLoaded", function () {
  // Das DOM wurde geladen
  let volumeSlider = document.getElementById("volume");

  // Initialisieren Sie den jQuery UI Slider
  $(volumeSlider).slider({
    min: 0,
    max: 100,
    value: 50,
    range: "min",
    slide: function (event, ui) {
      // Funktion, die aufgerufen wird, wenn der Slider verschoben wird
      setVolume(ui.value);
    },
  });

  // Funktion zum Einstellen der Lautstärke
  function setVolume(volume) {
    // Hier können Sie die Lautstärke des Browsers oder eines bestimmten Elements einstellen
    // Zum Beispiel könnten Sie den Audio-Tag Ihres Players auswählen und die Lautstärke setzen
    // var audioElement = document.getElementById("audioPlayer");
    // audioElement.volume = volume / 100;

    // In diesem Beispiel geben wir die Lautstärke einfach in der Konsole aus
    console.log("Lautstärke:", volume);
  }
});
