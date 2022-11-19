import Base from "../components/Base";
import React from "react";
import { useState,useEffect } from "react";
import { FormGroup } from "reactstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ScoreUpdate = () => {

    const {inning } = useParams();


    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8082/livescore/${inning}`);
        setData(result.data);
      };

      

      useEffect(() => {
        loadUser();
      }, []);


  const [data, setData] = useState({
    inning: "0",
    score: "0",
    wickets: "0",
    balls: "0",
    overs: "0",
    commentry: "not updated",
  });

  //Handel Change

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

//Resetting Data
const resetData = () => {
    setData({
        inning: "1",
        score: "",
        wickets: "",
        balls: "",
        overs: "",
        commentry: "",
    });
  };

  const putDatatoServer = (data) => {
    axios.put(`http://localhost:8082/livematch`,data)
    
      .then((resp) => {
        console.log(resp);
        toast.success("Score Updated !!!");
        console.log("Success!!!!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Score Not Updated !!!");
        console.log("Error!!!");
      });
}

  //Submitting data
  const submitForm = async (event) => {
    event.preventDefault(); //to stop by-default behaviour -- blank data

    console.log(data);
    //data validation

    //call server api for sending data
    putDatatoServer(data);
  };

  return (
    <Base>
    <div className="container-fluid">
      <Row>
        <Col>
        
        </Col>
        <Col>
       <br />
      <form  onSubmit={submitForm}>
        <h3 style={{color:'#4d0099'}}>Match Score Updater</h3>
        <br></br>
        
        <FormGroup>
          <div>
            Innings <span style={{paddingLeft:'20px'}}></span>
            
              <input type="radio" id="1" value={1} name="inning" onChange={(e) => handleChange(e, "inning")}/> 1
              <span style={{paddingLeft:'20px'}}></span>
              <input type="radio" id="2" value={2} name="inning" onChange={(e) => handleChange(e, "inning")}/> 2
           
          </div>
        </FormGroup>

        <div className="App">
          <div>
            <div><span style={{paddingLeft:'20px'}}></span>
              <input type="radio" id="1" value={1} name="score" onChange={(e) => handleChange(e, "score")}/> 1
              <span style={{paddingLeft:'20px'}}></span>
              <input type="radio" id="2" value={2} name="score" onChange={(e) => handleChange(e, "score")}/> 2
              <span style={{paddingLeft:'20px'}}></span>
              <input type="radio" id="wide" value="wide" name="score" onChange={(e) => handleChange(e, "score")}/> Wide
            </div>
            
            <div><span style={{paddingLeft:'20px'}}></span>
              <input type="radio" id="3" value={3} name="score" onChange={(e) => handleChange(e, "score")}/> 3
              <span style={{paddingLeft:'20px'}}></span>
              <input type="radio" id="4" value={4} name="score" onChange={(e) => handleChange(e, "score")}/> 4
              <span style={{paddingLeft:'20px'}}></span>
              <input type="radio" id="noball" value="noball" name="score" onChange={(e) => handleChange(e, "score")}/> No-Ball
            </div>

            <div><span style={{paddingLeft:'20px'}}></span>
              <input type="radio" id="6" value={6} name="score" onChange={(e) => handleChange(e, "score")}/> 6
              <span style={{paddingLeft:'20px'}}></span>
              <input type="radio" id="0" value={0} name="score" onChange={(e) => handleChange(e, "score")}/> 0
              <span style={{paddingLeft:'20px'}}></span>
              <input type="radio" id="out" value="out" name="score" onChange={(e) => handleChange(e, "score")}/> Out
            </div>
            <br></br>

            <label>Over-throw/Extras </label>{'   '}
            <input type="number" id="extra" placeholder="add extra runs" onChange={(e) => handleChange(e, "score")} value={data.extra}>
              </input><br />
              <br />
            <div>
              Batsman<span style={{paddingLeft:'70px'}}></span>
              <select>
                <option value="b">Virat</option>
                <option value="b">Malinga</option>
                <option value="b">Rohit</option>
                <option value="b">Max</option>
              </select>
            </div>
            <div>
              Bowler<span style={{paddingLeft:'80px'}}></span>
              <select>
                <option value="b">Virat</option>
                <option value="b">Malinga</option>
                <option value="b">Smith</option>
                <option value="b">Devid</option>
              </select>
            </div>
          </div>

          <br></br>
          Comment <span style={{paddingLeft:'50px'}}></span>
          <input type="text" id="commentry" placeholder="Commentry" onChange={(e) => handleChange(e, "commentry")} value={data.commentry} />
          <span style={{paddingLeft:'20px'}}></span>  <br /><br />
          <Button type="submit" variant="success" >Update</Button>{'   '}
          <Button onClick={resetData} variant="success">Reset</Button>
          <br></br>
          <br></br>
        </div>
      </form>
      </Col>
      <Col>
      
      </Col>
      </Row>
    </div>

    </Base>
  );
};

export default ScoreUpdate;