import { useState } from "react";
import { Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import Base from "../components/Base";
import { addUser } from "../services/User-service";
import Toast from "reactstrap";
import { toast } from "react-toastify";
import React from "react";
import img1 from "../components/img/img2.jpg";
import "../App.css";
import Button from 'react-bootstrap/Button';
const User = () => {

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
      
        //Handel Change
      
        const handleChange = (event, property) => {
          setData({ ...data, [property]: event.target.value });
        };
      
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
        const submitForm = (event) => {
          event.preventDefault(); //to stop by-default behaviour -- blank data
      
          console.log(data);
          //data validation
      
          //call server api for sending data
          addUser(data)
            .then((resp) => {
              console.log(resp);
              toast.success("User Registered !!!")
              resetData();
              console.log("Success!!!!");
            })
            .catch((error) => {
              console.log(error);
              toast.error("User Not Register")
              console.log("Error!!!");
            });
        };


    return (
        <Base>
        
          <Row>
        <Col><br/>
      
          <div >
            <img src={img1} className="center"
           ></img>
          </div>
        </Col>
        <Col>
            <br/>
          <h2 style={{color:'#0000b3'}}>Registration for User</h2>
         <div >
          <Form onSubmit={submitForm} className="formdesign">
            <Row>
              <FormGroup>
                <Label for="userName">First Name </Label>
                <Input
                  id="userName"
                  name="userName"
                  placeholder="Enter your name"
                  type="text"
                  onChange={(e) => handleChange(e, "userName")}
                  value={data.userName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="userPassword">Password </Label>
                <Input
                  id="cuserPassword"
                  name="cuserPassword"
                  placeholder="Enter Password"
                  type="password"
                  onChange={(e) => handleChange(e, "userPassword")}
                  value={data.userPassword}
                />
              </FormGroup>
              <FormGroup>
                <Label for="useremail">Email </Label>
                <Input
                  id="useremail"
                  name="useremail"
                  placeholder="Enter Email"
                  type="email"
                  onChange={(e) => handleChange(e, "useremail")}
                  value={data.useremail}
                />
              </FormGroup>
    
              <FormGroup>
                <Label for="userNumber">Number </Label>
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
                  placeholder="Enter Address"
                  type="textfield"
                  onChange={(e) => handleChange(e, "userAddress")}
                  value={data.userAddress}
                />
              </FormGroup>  
              
            </Row>
    
            <div>
              <Button variant="success" type="submit" >Register</Button>{'   '}
              <Button variant="danger" type="submit" href="/" >Back</Button>{'   '}
              <Button variant="success" onClick={resetData}>Reset</Button><br/>
              <h6>Already Registered?? 
              <a href="/userlogin" className="loghere">Login Here</a></h6> 
            </div>
          </Form>
          </div>
          </Col>
      </Row>
   
        </Base>
      );

};

export default User;