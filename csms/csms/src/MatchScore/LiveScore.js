import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import React from "react";
import { useReducer } from "react";
import Base from "../components/Base";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const LiveScore = () => {
  const { inning } = useParams();

  const [data, setScore] = useState({
    score:"",
    wickets: "",
    overs: "",
    commentry: "",
    balls:"",
  });

  const [reducerValue, forceUpdate] = useReducer( x => x=1, 0)

  useEffect(() => {
    
    loadScore();
    forceUpdate();

  }, [reducerValue]);

  const loadScore =  () => {
    axios.get(`http://localhost:8082/livescore/${inning}`).then((response) => {
          console.log(response);
          setScore(response.data);
          forceUpdate();
          console.log(response);
    })
    .catch(error => console.error(error))
    
  };
  setInterval(loadScore,1000);
  const openChat= () =>{
    window.open("http://localhost:3002/","","width=300,height=300");
  }
  return (
    <Base>
    
     <div className="container-fluid">
        <br />
     <Row>
     <Col>
        <div className="card text-center">
        <div className="card-body">
             <h2 className="card-title" style={{color:'#4d0099'}}>Live Match Details</h2>
            <h3><span style={{marginRight:'20px'}}>Innings: </span>{inning} </h3>
            <h3><span style={{marginRight:'20px'}}>Score: </span>{data.score}</h3>
            <h3><span style={{marginRight:'20px'}}>Wicket:</span>{data.wickets}</h3>
            <h3><span style={{marginRight:'20px'}}>Balls: </span>{data.balls}</h3>
         <h3><span style={{marginRight:'20px'}}>Overs: </span>{data.overs}</h3>
      
         <a href="#" className="btn btn-primary">Get Score</a>
         </div>
         </div>
         </Col>
         <Col>
           <div className="card-header">
             <ul className="nav nav-pills card-header-pills">
            <li className="nav-item"><br />
               <a className="nav-link active" href="#" >
                <span style={{color:'#fffff',size:'20px'}}>Commentry
               </span></a>
             <h5 style={{color:'#ff3333'}}><label>{data.commentry}</label></h5>
           </li><br />
         {'   '}
          
      
    </ul>
    </div>
   <div> 
    <br />
    <br />
    <br/>
    <Button variant="success" onClick={openChat}>
            Chat</Button>{' '} </div>
 
      
   
    </Col>
    </Row>
    </div>

    </Base>
  );
};

export default LiveScore;