import axios from "axios";
import React, { useState,useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Base from "../components/Base";


function Upcomming() {
    const [match,setMatch]= useState({})
    const [match2,setMatch2]= useState({})
    const [match3,setMatch3]= useState({})
 
  const getUpcomingMatch = () => {
    axios
      .get(
        "https://api.cricapi.com/v1/matches?apikey=30e15e23-bcab-4bda-a538-7ecb0b6052b1&offset=0"
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.data)
        setMatch(res.data.data[0])
        setMatch2(res.data.data[2])
        setMatch3(res.data.data[3])
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(()=>{
    getUpcomingMatch()
  },
  [])

  return (
    <Base>
    <div>
       
    <div>
        <br></br>
        <br></br>
    <Grid container justify="center">
        <Grid item>
            <h3>First Team {}</h3>
        </Grid>&nbsp;&nbsp;&nbsp;
        <Grid item>
            <h3> V/S </h3>
        </Grid>&nbsp;&nbsp;&nbsp;
        <Grid item>
            <h3> Second Team</h3>
        </Grid>
        
    </Grid>
    <div style={{marginLeft:'450px',marginRight:'30px'}}>
     <h2 style={{marginLeft:'100px',marginRight:'30px'}} > 
       
       {match.name}
       </h2>
      <h4 style={{marginLeft:'150px',marginRight:'30px',color:'red'}}> {match.status}</h4>
    
        <Button variant="contained" color="primary">
            {match.matchType}
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="primary">
          {match.dateTimeGMT} {match.venue}
        </Button><br></br>
        </div><br></br><br></br>
        </div>
        <hr />
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
        
         <div style={{marginLeft:'450px',marginRight:'30px'}}>
         <h2 style={{marginLeft:'40px',marginRight:'30px'}} > 
       
       {match2.name}
       </h2>
      <h4 style={{marginLeft:'150px',marginRight:'30px',color:'red'}}> 
      {match2.status}</h4>
             <Button variant="contained" color="primary">
                 Show Details
             </Button>&nbsp;&nbsp;&nbsp;
             <Button variant="contained" color="primary">
               {new Date().toString()}
             </Button><br></br>
             </div><br></br><br></br>
             </div>

             <div>
             <hr />
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
        <div style={{marginLeft:'450px',marginRight:'30px'}}>
        <h2 style={{marginLeft:'40px',marginRight:'30px'}} > 
       
       {match3.name}
       </h2>
      <h4 style={{marginLeft:'150px',marginRight:'30px',color:'red'}}> 
      {match3.status}</h4>
        <Button justify="center" variant="contained" color="primary">
            Show Details
        </Button>&nbsp;&nbsp;&nbsp;
        <Button variant="contained" color="primary">
          {new Date().toString()}
        </Button><br></br>
        </div>
        </div>
        <div>
        </div> 
        
</div>
</Base>
        

)
};

export default Upcomming;