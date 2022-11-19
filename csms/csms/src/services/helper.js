import axios from "axios";

export const BASE_URL = "http://localhost:8082"; //base url of server

export const myAxios = axios.create({  //to provide axios object
    baseURL:BASE_URL,
})