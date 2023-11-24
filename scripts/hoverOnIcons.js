const heartinfo = document.getElementById("heartInfo");
const shuffleinfo = document.getElementById("shuffleInfo");

function heartMouseOver() {
  heartinfo.style.display = "flex";
}
function heartMouseOut() {
  heartinfo.style.display = "none";
}

function shuffleMouseOver() {
  shuffleinfo.style.display = "flex";
}

function shuffleMouseOut() {
  shuffleinfo.style.display = "none";
}

export { heartMouseOver, heartMouseOut, shuffleMouseOver, shuffleMouseOut };
