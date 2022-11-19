import Base from "../components/Base";
import { Form, FormGroup, Label, Input,Row,Col } from "reactstrap";
import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { Params, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import img8 from "../components/img/img8.jpg";
const EditUser = () => {

  const {uID} = useParams();

  const [data, setData] = useState({
   
    userName: "",
    userPassword: "",
    useremail: "",
    userNumber: "",
    userAddress: "",
  });

  const [error, seterror] = useState({
    error: {},
    isError: false,
  });


  const loadUser =  () => {
    axios.get(`http://localhost:8082/user/${uID}`).then((response) => {
      console.log(response);
      setData(response.data);
      console.log(response.data);
     },(error) => {
      console.log(error)
     }
     )
    
  };

  //const { firstName, lastName, userName, password, job } = empp;

  //Handel Change

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };
  useEffect(() => {
    loadUser();
  }, []);


  //Resetting Data
  const resetData = () => {
    setData({
        userName: "",
        userPassword: "",
        useremail: "",
        userNumber: "",
        userAddress: "",
    });
  };

  //Submitting data
  const submitForm =  (event) => {
    event.preventDefault(); //to stop by-default behaviour -- blank data
    putdatatoserver(data)
    console.log(data);
    //data validation
  };
    //call server api for sending data
    const putdatatoserver= (data) =>{
   axios.put(`http://localhost:8082/user/${uID}`,data) 
    
      .then((resp) => {
        console.log(resp);
        toast.success("User Updated !!!");
        console.log("Success!!!!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("User Not Updated !!!");
        console.log("Error!!!");
      });
    }

    

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
     
      <h1 style={{color:'blue'}}>Update User Details</h1>
      <Form onSubmit={submitForm} className="formdesign">
        <Row>
          
          <FormGroup>
            <Label for="userName">Name </Label>
            <Input
              id="userName"
              name="userName"
              placeholder="Enter Name"
              type="text"
              onChange={(e) => handleChange(e, "userName")}
              value={data.userName}
            />
          </FormGroup>
          
          <FormGroup>
            <Label for="useremail">Email </Label>
            <Input
              id="useremail"
              name="useremail"
              placeholder="xyz@abc.com"
              type="email"
              onChange={(e) => handleChange(e, "useremail")}
              value={data.useremail}
            />
          </FormGroup>

          <FormGroup>
            <Label for="userPassword">Password </Label>
            <Input
              id="userPassword"
              name="userPassword"
              placeholder="Enter password"
              type="password"
              onChange={(e) => handleChange(e, "userPassword")}
              value={data.userPassword}
            />
          </FormGroup>

          <FormGroup>
            <Label for="userNumber">Mobile Number </Label>
            <Input
              id="userNumber"
              name="userNumber"
              placeholder=" Enter Mobile Number"
              type="number"
              onChange={(e) => handleChange(e, "userNumber")}
              value={data.userNumber}
            />
          </FormGroup>

          <FormGroup>
            <Label for="userAddress">Address </Label>
            <Input
              id="userAddress"
              name="userAddress"
              placeholder="Enter userAddress"
              type="text"
              onChange={(e) => handleChange(e, "userAddress")}
              value={data.userAddress}
            />
          </FormGroup>
        </Row>

        <div>
          <Button variant="warning" type="submit">Update User</Button>{'     '}
          <Button variant="warning" onClick={resetData}>Reset</Button>
        </div>
      </Form>
      </Col>
    </Row>
    </Base>
  );
};

export default EditUser;

