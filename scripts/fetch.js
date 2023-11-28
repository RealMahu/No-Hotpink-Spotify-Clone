function loadElement() {
  const musicCard = document.querySelector(".music-card");
  if (musicCard) {
    musicCard.addEventListener("click", (e) => {
      console.log(e.target.id);
      return e.target.id;
    });
  } else {
    setTimeout(loadElement, 100);
  }
}

loadElement();

async function getData() {
  const url = `https://deezerdevs-deezer.p.rapidapi.com/album/`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "810bbcad64msh20c194b589a92f1p12bdb0jsn6f4ab7b4077a",
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export default getData;
