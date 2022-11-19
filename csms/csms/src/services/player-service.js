import { myAxios } from "./helper";

export const addPlayer = (player) => {
  return myAxios
    .post("/players", player) //backend addplayer url
    .then((response) => response.data); //to get response for client message
};
