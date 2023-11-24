const heartIcon = document.getElementById("heart");
const heartinfo = document.getElementById("heartInfo");

function heartMouseOver() {
  heartinfo.style.display = "flex";
}
function heartMouseOut() {
  heartinfo.style.display = "none";
}

export { heartMouseOver, heartMouseOut };
