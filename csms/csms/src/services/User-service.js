import { myAxios } from "./helper";

export const addUser = (user) => {
  return myAxios
    .post("/users", user) //backend addplayer url
    .then((response) => response.data); //to get response for client message
};