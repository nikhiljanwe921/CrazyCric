import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import {Row, Col } from "reactstrap";
import emp1 from "../components/img/emp1.jpg";
import Base from "../components/Base";
export default function ViewUser() {
  const [user, setUser] = useState({
    userID: "",
    userName: "",
    useremail: "",
    userNumber: "",
    password: "",
    userAddress: "",
  });

  const {uID} = useParams();

 // console.log(uID);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser =  () => {
     axios.get(`http://localhost:8082/user/${uID}`).then((response) => {
      console.log(response);
      setUser(response.data);
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
          <h2 className="text-center m-4" style={{color:'blue'}} >User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of User id : {user.userID}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {user.userName}
                </li>
                <li className="list-group-item">
                  <b>Email:</b>
                  {user.useremail}
                </li>
                <li className="list-group-item">
                  <b>Mobile Number:</b>
                  {user.userNumber}
                </li>
                <li className="list-group-item">
                  <b>Password:</b>
                  {user.userPassword}
                </li>
                <li className="list-group-item">
                  <b>Address:</b>
                  {user.userAddress}
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

