const heartinfo = document.getElementById("heartInfo");
const shuffleinfo = document.getElementById("shuffleInfo");
const muteinfo = document.getElementById("muteInfo");

function heartMouseOver() {
  heartinfo.style.display = "flex";
}
function heartMouseOut() {
  heartinfo.style.display = "none";
}

function shuffleMouseOver() {
  shuffleinfo.style.display = "flex";
  console.log("ja");
}

function shuffleMouseOut() {
  shuffleinfo.style.display = "none";
  console.log("nay");
}

function muteMouseOver() {
  muteinfo.style.display = "flex";
}

function muteMouseOut() {
  muteinfo.style.display = "none";
}

export {
  heartMouseOver,
  heartMouseOut,
  shuffleMouseOver,
  shuffleMouseOut,
  muteMouseOver,
  muteMouseOut,
};
