import axios from "axios";
import React, { useState,useEffect } from "react";

function PreviousMatch() {
    const [match,setMatch]= useState({})
const options = {
    
  method: 'GET',
  url: 'https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/scard',
  headers: {
    'X-RapidAPI-Key': 'c52466eefdmsh29d61a17ee4fbb4p1e827ajsn50c4cdf5d40b',
    'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
   
}).catch(function (error) {
	console.error(error);
});


return(
    <h1>Previous match</h1>
    
)

};

export default PreviousMatch;