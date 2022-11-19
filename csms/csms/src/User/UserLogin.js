import Base from "../components/Base";
import { Form, FormGroup, Label, Input ,Row, Col} from "reactstrap";
import React from "react";
import { Link } from "react-router-dom";
import img3 from "../components/img/img3.jpg";
import "../App.css";
import Button from 'react-bootstrap/Button';
const UserLogin = () => {
  
  return (
    <Base>
    <Row>
      <Col>
      <div >
            <img src={img3} className="center"
           ></img>
          </div>
      </Col>
      <Col>
      <br/>
      <br/>
           <h3 style={{color:'#0000b3'}}>User Login</h3>
      <div>
        <Form className="formdesign1">
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
          </FormGroup>{" "}
          <Button color="dark my-2" href="/loginuser" >Log In</Button>{'  '}
          <Link className="btn btn-primary my-2" to={"/"}>
            Back
          </Link>
          <h6>Not a User? 
              <a href="/adduser" className="loghere">Register Here</a></h6> 
        </Form>
      </div>
      </Col>
      </Row>
    </Base>
  );
};

export default UserLogin;
