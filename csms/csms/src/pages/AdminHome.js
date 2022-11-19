import Base from "../components/Base";
import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import image1 from "../components/img/logo.jpeg";
import Button from 'react-bootstrap/Button';
import "../App.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  const openChat= () =>{
    window.open("http://localhost:3002/","","width=300,height=300");
  }
const LoguserHome = () => {
   
  return (
   
    <Base>
      <div className="container-fluid">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img
              src={image1}
              width="80"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/previous" style={{color:'red', fontSize:'20px'}}>
              <a style={{textDecoration:'none'}}>Live Match</a>
            </Nav.Link>
            <Nav.Link href="/previous" style={{color:'red', fontSize:'20px'}}>
            <a style={{textDecoration:'none'}}> Previous Match</a></Nav.Link>
              <Nav.Link href="/upcomming" style={{color:'red', fontSize:'20px'}}>
              <a style={{textDecoration:'none'}}>Upcomming Match</a>
              </Nav.Link>
              
              <Nav.Link href="" style={{marginLeft:'550px'}} >
              <Button variant="success" onClick={openChat}>Chat</Button>{' '}
              </Nav.Link>
              <Nav.Link href="/employeeLogin">
              <Button variant="danger">Logout</Button>{' '}
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
      </div>
     
      <div className="container-fluid">
        <br/>
      <h4 style={{color:'blue'}}> Welcome Admin</h4>
       <Accordion defaultActiveKey="0">
       <Row>
         <Col>
             <Card>
                <Card.Header>
                  <CustomToggle eventKey="0">Match</CustomToggle>
                </Card.Header>
                     <Accordion.Collapse eventKey="0">
                      <Card.Body> <h5> Live Cricket Score</h5> 
                      <br/>
                       <Button variant="warning" href="/scoreupdate">Update Live Score</Button>{' '}<br/>
                       <br />
                       <Button variant="warning">Upcomming Match</Button>{' '} <br/>
                       <br />
                       <Button variant="warning">Previous Match</Button>{' '}
                      </Card.Body>
                    </Accordion.Collapse>
             </Card>
        </Col>
        <Col>
             <Card>
              <Card.Header>
                 <CustomToggle eventKey="1">User</CustomToggle>
            </Card.Header>
           <Accordion.Collapse eventKey="1">
           <Card.Body> <h5> User Details</h5> 
                      <br/>
                       <Button variant="warning" href="/adduser">Add User Details</Button>{' '}<br/>
                       <br />
                       <Button variant="warning" href= "/edituser/:id">Update User Details</Button>{' '} <br/>
                       <br />
                       <Button variant="warning" href="/viewuser/:id">View User Details</Button>{' '}
                       <br /><br />
                       <Button variant="warning" href="/allusers">All User Details</Button>{' '}
                      </Card.Body>
             </Accordion.Collapse>
         </Card>
      </Col>
      </Row>
      <Row>

      <Col>
             <Card>
              <Card.Header>
                 <CustomToggle eventKey="2">Player</CustomToggle>
            </Card.Header>
           <Accordion.Collapse eventKey="2">
           <Card.Body> <h5> Player Details</h5> 
                      <br/>
                       <Button variant="warning" href="/addplayer">Add Player Details</Button>{' '}<br/>
                       <br />
                      
                       <Button variant="warning" href="/allplayer">All Player Details</Button>{' '} <br/>
                       <br />
                       <Button variant="warning" href="/viewplayer/:pID">Player Details</Button>{' '} <br/>
                       <br />
                       <Button variant="warning" href="/editplayer/:pID">Update Player Details</Button>{' '} <br/>
                       <br />
                      </Card.Body>
             </Accordion.Collapse>
         </Card>
      </Col>
      <Col>
             <Card>
              <Card.Header>
                 <CustomToggle eventKey="3">Our Employee</CustomToggle>
            </Card.Header>
           <Accordion.Collapse eventKey="3">
           <Card.Body> <h5> Manage Employee</h5> 
                      <br/>
                       <Button variant="warning" href="/addemployee">Add Employee Here</Button>{' '}<br/>
                       <br />
                       <Button variant="warning" href="/editemployee/:empID">Edit Employee Details</Button>{' '} <br/>
                       <br />
                       <Button variant="warning" href="/viewemployee/:empID">View Employee Details</Button>{' '}
                       <br /><br />
                       <Button variant="warning" href="/allemployee">All Employee Details</Button>{' '}
                      </Card.Body>
             </Accordion.Collapse>
         </Card>
      </Col>
      </Row>
    </Accordion>
      
    </div>
  
    </Base>
  );
};

export default LoguserHome;
