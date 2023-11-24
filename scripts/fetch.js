async function getData() {
  const url = "https://deezerdevs-deezer.p.rapidapi.com/album/107443842";
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

    return result;
  } catch (error) {
    console.error(error);
  }
}

export default getData;
