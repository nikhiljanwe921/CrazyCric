const API_KEY = "qZnM0O90ToIjBiq9GvT9382";

export const getMatches = () => {
  const url = "https://api.cricapi.com/v1/currentMatches?apikey=463b4d53-27ef-41d0-8ead-08a9211f427c&offset=0";
  console.log("URL", url);
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      console.log("ERROR ", error);
    });
};

//get the score of the cuurent match

export const getMatchDetail = (id) => {
  const url = "https://api.cricapi.com/v1/currentMatches?apikey=463b4d53-27ef-41d0-8ead-08a9211f427c&offset=0"
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};