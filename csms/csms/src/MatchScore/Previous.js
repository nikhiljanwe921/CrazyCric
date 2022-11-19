import axios from "axios";
import React, { useState,useEffect } from "react";
import { Button, Grid } from "@material-ui/core";

function Previous() {
    const [match,setMatch]= useState({})
    const [match2,setMatch2]= useState({})
    const [score1, setScore1] = useState({})
  const getPreviousMatch = () => {
    axios
      .get(
       " https://api.cricapi.com/v1/match_scorecard?apikey=30e15e23-bcab-4bda-a538-7ecb0b6052b1&id=d4c617d2-2189-48f1-b9ab-bbd0aabcdf11"
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.data)
        setMatch(res.data.data)
       // setScore1(res.data.data[1].score[0])
        setMatch2(res.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
    getPreviousMatch()
  },
  [])

  return (
    <div>
    <div>
        <br></br>
        <br></br>
    <Grid container justify="center">
        <Grid item>
            <h3>match.name</h3>
        </Grid>&nbsp;&nbsp;&nbsp;
        
        
    </Grid>
     <div style={{marginLeft:'700px',marginRight:'30px'}}>
     
        <Button variant="contained" color="primary">
            Show Details
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="primary">
          {new Date().toString()}
        </Button><br></br>
        </div><br></br><br></br>
        </div>
         <div>
   
         <Grid container justify="center">
             <Grid item>
                 <h3>First Team </h3>
             </Grid>&nbsp;&nbsp;&nbsp;
             <Grid item>
                 <h3> V/S </h3>
             </Grid>&nbsp;&nbsp;&nbsp;
             <Grid item>
                 <h3> Second Team</h3>
             </Grid>
             
         </Grid>
         <div style={{marginLeft:'700px',marginRight:'30px'}}>
         <h2 style={{marginLeft:'180px',marginRight:'30px'}}>  </h2>
             <Button variant="contained" color="primary">
                 Show Details
             </Button>&nbsp;&nbsp;&nbsp;
             <Button variant="contained" color="primary">
               {new Date().toString()}
             </Button><br></br>
             </div><br></br><br></br>
             </div>

             <div>
    
    <Grid container justify="center">
        <Grid item>
            <h3>First Team </h3>
        </Grid>&nbsp;&nbsp;&nbsp;
        <Grid item>
            <h3> V/S </h3>
        </Grid>&nbsp;&nbsp;&nbsp;
        <Grid item>
            <h3> Second Team</h3>
        </Grid>
        
    </Grid>
        <div style={{marginLeft:'700px',marginRight:'30px'}}>
        <h2 style={{marginLeft:'180px',marginRight:'30px'}}>  </h2>
        <Button justify="center" variant="contained" color="primary">
            Show Details
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="primary">
          {new Date().toString()}
        </Button><br></br>
        </div>
        </div>
        <div>
    
     
   {
    score1.inning
    }
    { score1.o}
        </div> 
        
</div>

        

)
};

export default Previous;