import Base from "../components/Base";
import { Form, FormGroup, Label, Input, Row,Col } from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../components/img/img2.jpg";
import "../App.css";
import Button from 'react-bootstrap/Button';
import { toast } from "react-toastify";
import { addEmployee } from "../services/Employee-service";
import { useState } from "react";


const EmployeeLogin = () => {

  const [data, setData] = useState({
     email:"",
     password:"",
     mpassword:""
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
      email:"",
      password:"",
      mpassword:""
    });
  };
  //Submitting data
  
  const submitForm = (event) => {
    event.preventDefault(); //to stop by-default behaviour -- blank data
    if(data.mpassword==="00000")
    {
      addEmployee(data)
      .then((resp) => {
        console.log(resp);
        toast.success("Employee Registered !!!")
        console.log("Success!!!!");
      })
      .catch((error) => {
        console.log(error);
       // toast.error("Employee Not Register !!!")
        console.log("Error!!!");
      });
    }
    else{ 
      toast.error("Enter Master Password !!!")
      return
    }
    //validation for password
    if(data.password != " ")
    {
      addEmployee(data)
      .then((resp) => {
        console.log(resp);
        toast.success("Employee Registered !!!")
        console.log("Success!!!!");
      })
      .catch((error) => {
        console.log(error);
       // toast.error("Employee Not Register !!!")
        console.log("Error!!!");
      });
    }
    else{ 
      toast.error("Password Mandatory !!!")
      return
    }
  
    
   
    console.log(data);
    //data validation
  
    //call server api for sending data
  
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
    <h3 style={{color:'#0000b3'}}>Admin Login</h3>
      <div>
        <Form className="formdesign">
          <FormGroup>
            <Label for="exampleEmail" >
              Email
            </Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Enter your email"
              type="email"
              
            />
          </FormGroup>{" "}
          <FormGroup>
            <Label for="examplePassword">
              Password
            </Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            </FormGroup>
            <FormGroup>
            <Label for="examplePassword">
              Password
            </Label>
            <Input
              id="examplePassword"
              name="mpassword"
              placeholder="Enter your Master password"
              type="mpassword"
            />
          </FormGroup>{" "}
          <Button color="dark my-2" type="submit" href="/admin">Submit</Button>{'  '}
          <Link className="btn btn-primary my-2" to={"/"}>
            Back
          </Link>
        </Form>
      </div>
      </Col>
      </Row>
    </Base>
  );
};

export default EmployeeLogin;
