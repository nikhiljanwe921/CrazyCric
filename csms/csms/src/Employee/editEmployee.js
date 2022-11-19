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
const EditEmployee = () => {

  const { empID } = useParams();

  const [data, setData] = useState({
    employeeID:"",
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

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee =  () => {
    axios.get(`http://localhost:8082/employee/${empID}`).then((response) => {
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
    axios.put(`http://localhost:8082/employees/${empID}`,data)
    
      .then((resp) => {
        console.log(resp);
        toast.success("Employee Updated !!!");
        console.log("Success!!!!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Employee Not Updated !!!");
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
      employeeID: "",
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      job: "",
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
      
      <h1 style={{color:'blue'}}>Update Employee Information </h1>
      <Form onSubmit={submitForm} className="formdesign">
        <Row>
          <FormGroup>
            <Label for="employeeId">Employee Id </Label>
            <Input
              id="employeeID"
              name="employeeID"
              placeholder=""
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
              placeholder=""
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
        </Row>

        <div>
          <Button variant="warning" type="submit">Update Employee</Button>{'   '}
          <Button variant="warning" onClick={resetData}>Reset</Button>
        </div>
      </Form>
      </Col>
      </Row>
    </Base>
  );
};

export default EditEmployee;