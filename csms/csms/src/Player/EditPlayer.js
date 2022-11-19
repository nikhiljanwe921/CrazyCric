import Base from "../components/Base";
import { Form, FormGroup, Label, Input, Row, Col} from "reactstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useParams } from "react-router-dom";
import img8 from "../components/img/img8.jpg";
const EditPlayer = () => {

  const { pID } = useParams();

  const [data, setData] = useState({
    playerID: "",
    playerName: "",
    playerSurname: "",
    ability: "",
    position: "",
    teamName: "",
    teamGround: "",
    side: "",
    playerFullname: "",
  });

  const [error, seterror] = useState({
    error: {},
    isError: false,
  });

  useEffect(() => {
    loadPlayer();
  }, []);

  const loadPlayer =  () => {
    axios.get(`http://localhost:8082/players/${pID}`).then((response) => {
       console.log(response);
       setData(response.data);
       console.log(response.data);
      },(error) => {
       console.log(error)
      }
      )
   };

  //const { firstName, lastName, userName, password, job } = empp;
  const putDatatoServer = (data) => {
    axios.put(`http://localhost:8082/players/${pID}`,data)
      .then((resp) => {
        console.log(resp);
        toast.success("Player Updated !!!");
        console.log("Success!!!!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Player Not Updated !!!");
        console.log("Error!!!");
      });
}


  //Handel Change

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };
  

  


  //Resetting Data
  const resetData = () => {
    setData({
            playerID: "",
            playerName: "",
            playerSurname: "",
            ability: "",
            position: "",
            teamName: "",
            teamGround: "",
            side: "",
            playerFullname: "",
          });
  };

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
      <Row>
        <Col>

        <br/>
      
          <div >
            <img src={img8} className="center"
           ></img>
          </div>
        
        </Col>
      <Col>
      
      <h1 style={{color:'blue'}}>Update Players Details</h1>

      <Form onSubmit={submitForm} className="formdesign">
        <Row>
          <FormGroup>
            <Label for="playerId">Player Id </Label>
            <Input
              id="playerID"
              name="playerID"
              placeholder="Enter Player Id"
              type="number"
              onChange={(e) => handleChange(e, "playerID")}
              value={data.playerID}
            />
          </FormGroup>
          <FormGroup>
            <Label for="playerName">First Name </Label>
            <Input
              id="playerName"
              name="playerName"
              placeholder="Enter First Name"
              type="text"
              onChange={(e) => handleChange(e, "playerName")}
              value={data.playerName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="playerLastname">Last Name </Label>
            <Input
              id="playerSurname"
              name="playerSurname"
              placeholder="Enter Last Name"
              type="text"
              onChange={(e) => handleChange(e, "playerSurname")}
              value={data.playerSurname}
            />
          </FormGroup>
          <FormGroup>
            <Label for="fullName">Full Name </Label>
            <Input
              id="playerFullname"
              name="playerFullname"
              placeholder=" Enter Full Name"
              type="text"
              onChange={(e) => handleChange(e, "playerFullname")}
              value={data.playerFullname}
            />
          </FormGroup>
          <FormGroup>
            <Label for="ability">Ability </Label>
            <Input
              id="ability"
              name="ability"
              placeholder="Enter Ability"
              type="text"
              onChange={(e) => handleChange(e, "ability")}
              value={data.ability}
            />
          </FormGroup>

          <FormGroup>
            <Label for="position">Position </Label>
            <Input
              id="position"
              name="position"
              placeholder=" Captain /vice-captain /player"
              type="text"
              onChange={(e) => handleChange(e, "position")}
              value={data.position}
            />
          </FormGroup>

          <FormGroup>
            <Label for="teamName">Team Name </Label>
            <Input
              id="teamName"
              name="teamName"
              placeholder="Enter Team Name"
              type="text"
              onChange={(e) => handleChange(e, "teamName")}
              value={data.teamName}
            />
          </FormGroup>

          <FormGroup>
            <Label for="teamGround">Team Ground </Label>
            <Input
              id="teamGround"
              name="teamGround"
              placeholder="home / Away"
              type="text"
              onChange={(e) => handleChange(e, "teamGround")}
              value={data.teamGround}
            />
          </FormGroup>

          <FormGroup>
            <Label for="teamSide">Team Side </Label>
            <Input
              id="side"
              name="side"
              placeholder="Batting / Bowling"
              type="text"
              onChange={(e) => handleChange(e, "side")}
              value={data.side}
            />
          </FormGroup>

        </Row>

        <div>
          <Button variant="warning" type="submit">Update Player</Button>{'   '}
          <Button variant="warning" onClick={resetData}>Reset</Button>
        </div>
      </Form>
      </Col>
      </Row>
    </Base>
  );
};

export default EditPlayer;