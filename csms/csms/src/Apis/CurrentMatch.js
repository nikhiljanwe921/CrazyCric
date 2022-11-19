import axios from "axios";
import React, { useState,useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function CurrentMatch() {
    const [match,setMatch]= useState({})
    const [match2,setMatch2]= useState({})
    const [score1, setScore1] = useState({})
  const getCurrentMatch = () => {
    axios
      .get(
        "https://api.cricapi.com/v1/currentMatches?apikey=8d8aca26-e5ef-4f82-b045-2cc5304eb0e2&offset=0"
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.data)
        setMatch(res.data.data[1])
        setScore1(res.data.data[1].score[0])
        setMatch2(res.data.data[2])
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
    getCurrentMatch()
  },
  [])

  return (
    <div>
    <button onClick={getCurrentMatch}>Current Match</button>
     <div className="container">
     {
     match.name
     
    }
   {
    score1.inning
    }
    { score1.o}
        </div> 
        
</div>
)
};

export default CurrentMatch;