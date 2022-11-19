import Base from "../components/Base";
import { Form, FormGroup, Label, Input, Row,Col } from "reactstrap";
import { addEmployee } from "../services/Employee-service";
import { useState } from "react";
import { toast } from "react-toastify";
import React from "react";
import "../App.css";
import Button from 'react-bootstrap/Button';
import img6 from "../components/img/img6.jpg";
const Employee = () => {
  const [data, setData] = useState({
    employeeID: "",
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    job: "",
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
      employeeID: "",
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    job: "",
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
        //validation for password
    if(data.password != " ")
    {
      addEmployee(data)
      .then((resp) => {
        console.log(resp);
       
        console.log("Success!!!!");
      })
      .catch((error) => {
        console.log(error);
       // toast.error("Employee Not Register !!!")
       toast.error("Password Mandatory !!!")
        console.log("Error!!!");
      });
    }
    else{ 
      toast.error("Password Mandatory !!!")
      return
    }

    //validation for number
    if(data.userName != " ")
    {
      addEmployee(data)
      .then((resp) => {
        console.log(resp);
       
        console.log("Success!!!!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Enter Correct User Name !!!")
        console.log("Error!!!");
      });
    }
    else{ 
      toast.error("Enter Correct User Name !!!")
      return
    }
        toast.success("Employee Registered !!!")
        console.log("Success!!!!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Employee Not Register !!!")
        console.log("Error!!!");
      });
    }
    else{ 
      toast.error("Enter Master Password !!!")
      return
    }
    
   
    console.log(data);
    //data validation

    //call server api for sending data
  
  };

  return (
    <Base>
     <Row>
      <Col>
          <div >
            <img src={img6} className="center"
           ></img>
          </div>
      </Col>
      
      <Col>
      <h1 style={{color:'blue'}}>Registration for Employees</h1>
      <Form onSubmit={submitForm} className="formdesign">
        <Row>
          <FormGroup>
            <Label for="employeeId">Employee Id </Label>
            <Input
              id="employeeID"
              name="employeeID"
              placeholder="Enter Employee Id"
              type="number"
              onChange={(e) => handleChange(e, "employeeID")}
              value={data.employeeID}
            />
          </FormGroup>
          <FormGroup>
            <Label for="firstName">First Name </Label>
            <Input
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              type="text"
              onChange={(e) => handleChange(e, "firstName")}
              value={data.firstName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="employeeLastName">Last Name </Label>
            <Input
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              type="text"
              onChange={(e) => handleChange(e, "lastName")}
              value={data.lastName}
            />
          </FormGroup>
          <FormGroup>
            <Label for="username">Username </Label>
            <Input
              id="userName"
              name="userName"
              placeholder="Enter username"
              type="text"
              onChange={(e) => handleChange(e, "userName")}
              value={data.userName}
            />
          </FormGroup>

          <FormGroup>
            <Label for="password">Password </Label>
            <Input
              id="password"
              name="password"
              placeholder=" Enter Password"
              type="password"
              onChange={(e) => handleChange(e, "password")}
              value={data.password}
            />
          </FormGroup>

          <FormGroup>
            <Label for="job">Job </Label>
            <Input
              id="job"
              name="job"
              placeholder="Enter Job"
              type="text"
              onChange={(e) => handleChange(e, "job")}
              value={data.job}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Master Password </Label>
            <Input
              id="mpassword"
              name="mpassword"
              placeholder=" Enter Master Password"
              type="password"
              onChange={(e) => handleChange(e, "mpassword")}
              value={data.mpassword}
            />
          </FormGroup>
        </Row>

        <div>
          <Button variant="success" type="submit">Add Employee</Button>{'   '}
          <Button variant="success" onClick={resetData}>Reset</Button>
        </div>
      </Form>
      </Col>
      </Row>
    </Base>
  );
};

export default Employee;
