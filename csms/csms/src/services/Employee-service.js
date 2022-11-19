import { myAxios } from "./helper";


export const addEmployee = (emp) => {
  return myAxios
    .post("/employees", emp) //backend addemployee url
    .then((response) => response.data); //to get response for client message
};

export const getEmployee = (emp) => {
  return myAxios
    .get("/employees") 
    .then((response) => response.data); //to get response for client message
};

export const editEmployee = (emp2) => {
  return myAxios
    .put("/employees/{emp}",emp2) 
    .then((response) => response.data); //to get response for client message
};