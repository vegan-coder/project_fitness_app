export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "764fb11fc9msh79d6c62cd6439b9p1dd48cjsn8db2c60c62e4",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json()

    return data;
}

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": "f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85",
  },
};
