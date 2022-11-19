import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Base from "../components/Base";
import {Row, Col } from "reactstrap";
import emp1 from "../components/img/emp1.jpg";

export default function ViewPlayer() {
   
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

  const {pID} = useParams();

  console.log(pID);

  useEffect(() => {
    loadPlayer();
  }, []);

  const loadPlayer = () => {
     axios.get(`http://localhost:8082/players/${pID}`).then((response) => {
      console.log(response);
      setData(response.data);
      console.log(response.data);
     },(error) => {
      console.log(error)
     }
     )
  };

  return (
    <Base>
    <Row>
        <Col>
        <div>
            <img src={emp1} className="center"
           ></img>
          </div>
        </Col>
        
  <Col> 
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Player Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Player id : {data.playerID}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {data.playerName +"  " +data.playerSurname}
                </li>
                <li className="list-group-item">
                  <b>Ability:</b>
                  {data.ability}
                </li>
                <li className="list-group-item">
                  <b>Team Name:</b>
                  {data.teamName}
                </li>
                <li className="list-group-item">
                  <b>Position:</b>
                  {data.position}
                </li>
                <li className="list-group-item">
                  <b>Side:</b>
                  {data.side}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/allusers"}>
            Back
          </Link>
        </div>
      </div>
    </div>
    </Col>
    </Row>
    </Base>
  );
}

