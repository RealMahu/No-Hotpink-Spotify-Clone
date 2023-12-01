function getTitleLength() {
  const InfoCard = document.getElementById("heartInfo");
  const Title = document.getElementById("infoTitle");

  // Clear previous styles
  InfoCard.style.left = "40px";

  // Get the computed style for the "heartInfo" element
  const infoCardStyles = window.getComputedStyle(InfoCard);

  // Extract the left value from the computed style
  const leftValue = parseInt(infoCardStyles.getPropertyValue("left"));

  // Calculate the new width based on the title width and left value
  const newWidth = Title.clientWidth + leftValue;

  // Set the new left position for the "heartInfo" element
  InfoCard.style.left = `${newWidth}px`;
}

function getShuffleposition() {
  const InfoCard = document.getElementById("shuffleInfo");
  const LeftContainerWidth = document.getElementById("leftContainer");

  // Clear previous styles
  InfoCard.style.left = "40px";

  // Get the computed style for the "heartInfo" element
  const infoCardStyles = window.getComputedStyle(InfoCard);

  // Extract the left value from the computed style
  const leftValue = parseInt(infoCardStyles.getPropertyValue("left"));

  // Calculate the new width based on the title width and left value
  const newWidth = LeftContainerWidth.clientWidth + leftValue;

  // Set the new left position for the "heartInfo" element
  InfoCard.style.left = `${newWidth}px`;
}

function getMuteposition() {
  const InfoCard = document.getElementById("muteInfo");
  const LeftContainerWidth = document.getElementById("midContainer");

  // Clear previous styles
  InfoCard.style.left = "40px";

  // Get the computed style for the "heartInfo" element
  const infoCardStyles = window.getComputedStyle(InfoCard);

  // Extract the left value from the computed style
  const leftValue = parseInt(infoCardStyles.getPropertyValue("left"));

  // Calculate the new width based on the title width and left value
  const newWidth = LeftContainerWidth.clientWidth + leftValue;

  // Set the new left position for the "heartInfo" element
  InfoCard.style.left = `${newWidth}px`;
}

export { getTitleLength, getShuffleposition, getMuteposition };
