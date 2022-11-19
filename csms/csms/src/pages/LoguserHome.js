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
import Badge from 'react-bootstrap/Badge';
import news1 from "../components/img/news1.jpg";
import news2 from "../components/img/news2.jpg";
import news3 from "../components/img/news3.jpeg";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );
  return (
    <button
      type="button"
      style={{ backgroundColor: '#661aff' ,color:'#ffffff'}}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
const openChat= () =>{
  window.open("http://localhost:3001/","","width=300,height=300");
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
            <Nav.Link href="/livescore/1" style={{color:'red', fontSize:'20px'}}>
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
              <Nav.Link href="/">
              <Button variant="danger">Logout</Button>{' '}
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    
      <div className="container-fluid" style={{marginLeft:'20px',marginRight:'20px'}}>
        <br/>
        <h4 style={{color:'blue'}}> Login Successfully!!!</h4>
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
                       <Button variant="warning" href="/livescore/1"> View Live Score</Button>{' '}<br/>
                       <br />
                      
                    
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
                      
                       <br />
                       <Button variant="warning" href= "/edituser/:id">Update User Details</Button>{' '} <br/>
                       <br />
                       
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
                       <br />
                       <Button variant="warning" href="/allplayer">View Player Details</Button>{' '} <br/>
                       <br />
                      
                      </Card.Body>
             </Accordion.Collapse>
         </Card>
      </Col>
      <Col>
             <Card>
              <Card.Header>
                 <CustomToggle eventKey="3">About Match</CustomToggle>
            </Card.Header>
           <Accordion.Collapse eventKey="3">
           <Card.Body> <h5> Match Details</h5> 
                      <br/>
                       <Button variant="warning" href="/previous">View Previous Match Details</Button>{' '}<br/>
                       <br />
                       <Button variant="warning" href="/upcomming">View Upcomming Match Details</Button>{' '} <br/>
                       <br />
                       
                      </Card.Body>
             </Accordion.Collapse>
         </Card>
      </Col>
      </Row>
    </Accordion>
      
    </div>

      <div className="container-fluid" >
    <Badge style={{backgroundColor:'#0000e6', marginLeft:'30px',padiingLeft:'20px',paddingRight:'15px', marginTop:'70px'}}>
       <h3 > Latest News</h3>
      </Badge>{' '}
      <br></br>
      <Carousel>
      <Carousel.Item>
        <Row>
        <Col xs={6} md={4}>
        <Card style={{ width: '25rem',marginTop:'20px',marginLeft:'40px'}}>
      <Card.Img variant="top" src={news1} />
      <Card.Body>
        <Card.Title>'Australia needed 30 runs in 3 overs. I told Dhoni give me the ball’</Card.Title>
        <Card.Text>
        Harbhajan recalled the big semi-final against Australia. 
        India were defending a big total but thanks to a blistering innings by Matthew Hayden, Australia were right in the chase. 
        </Card.Text>
        <Button variant="warning" href="https://www.hindustantimes.com/cricket/australia-needed-30-runs-in-3-overs-i-told-dhoni-give-me-the-ball-harbhajan-singh-recalls-t20-world-cup-semi-final-in-2007-101664030066837.html">
          Read More..</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col xs={6} md={4}>
        <Card style={{ width: '25rem',marginTop:'20px' }}>
      <Card.Img variant="top" src={news2} />
      <Card.Body>
        <Card.Title>Harmanpreet's savage reply when asked about Deepti's run-outt</Card.Title>
        <Card.Text>
        Harmanpreet Kaur backed Deepti Sharma after the latter ran Charlotte Dean at the non-striker's
         end to seal a 16-run victory for India in the third and final ODI against England.
        </Card.Text>
        <Button variant="warning" href="https://www.hindustantimes.com/cricket/watch-i-thought-you-will-ask-about-harmanpreet-kaur-s-savage-reply-when-asked-about-deepti-sharma-s-run-out-draws-huge-cheer-101664073377317.html">
          Read More..</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col xs={6} md={4}>
        <Card style={{ width: '25rem',marginTop:'20px'}}>
      <Card.Img variant="top" src={news3} />
      <Card.Body>
        <Card.Title>England dressing room's stunned reaction after Deepti's run-out</Card.Title>
        <Card.Text>
        The thrilling third ODI came to a 
        dramatic end with Deepti Sharma's run out of the dangerous Charlie Dean.
        Deepti Sharma's run out of the dangerous Charlie Dean.
        </Card.Text>
        <Button variant="warning" href="https://www.hindustantimes.com/cricket/watch-england-dressing-room-s-stunned-reaction-after-deepti-sharma-s-mankad-moment-completes-india-s-3rd-odi-win-101664040334311.html">
          Read More..</Button>
      </Card.Body>
    </Card>
        </Col>
     </Row>
     
      </Carousel.Item>
      <Carousel.Item>
        <Row>
        <Col xs={6} md={4}>
        <Card style={{ width: '25rem',marginTop:'20px',marginLeft:'40px'}}>
      <Card.Img variant="top" src={news1} />
      <Card.Body>
        <Card.Title>'Australia needed 30 runs in 3 overs. I told Dhoni give me the ball’</Card.Title>
        <Card.Text>
        Harbhajan recalled the big semi-final against Australia. 
        India were defending a big total but thanks to a blistering innings by Matthew Hayden, Australia were right in the chase. 
        </Card.Text>
        <Button variant="warning" href="https://www.hindustantimes.com/cricket/australia-needed-30-runs-in-3-overs-i-told-dhoni-give-me-the-ball-harbhajan-singh-recalls-t20-world-cup-semi-final-in-2007-101664030066837.html">
          Read More..</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col xs={6} md={4}>
        <Card style={{ width: '25rem',marginTop:'20px' }}>
      <Card.Img variant="top" src={news2} />
      <Card.Body>
        <Card.Title>Harmanpreet's savage reply when asked about Deepti's run-outt</Card.Title>
        <Card.Text>
        Harmanpreet Kaur backed Deepti Sharma after the latter ran Charlotte Dean at the non-striker's
         end to seal a 16-run victory for India in the third and final ODI against England.
        </Card.Text>
        <Button variant="warning" href="https://www.hindustantimes.com/cricket/watch-i-thought-you-will-ask-about-harmanpreet-kaur-s-savage-reply-when-asked-about-deepti-sharma-s-run-out-draws-huge-cheer-101664073377317.html">
          Read More..</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col xs={6} md={4}>
        <Card style={{ width: '25rem',marginTop:'20px'}}>
      <Card.Img variant="top" src={news3} />
      <Card.Body>
        <Card.Title>England dressing room's stunned reaction after Deepti's run-out</Card.Title>
        <Card.Text>
        The thrilling third ODI came to a 
        dramatic end with Deepti Sharma's run out of the dangerous Charlie Dean.
        Deepti Sharma's run out of the dangerous Charlie Dean.
        </Card.Text>
        <Button variant="warning" href="https://www.hindustantimes.com/cricket/watch-england-dressing-room-s-stunned-reaction-after-deepti-sharma-s-mankad-moment-completes-india-s-3rd-odi-win-101664040334311.html">
          Read More..</Button>
      </Card.Body>
    </Card>
        </Col>
     </Row>

      </Carousel.Item>
      <Carousel.Item>
        <Row>
        <Col xs={6} md={4}>
        <Card style={{ width: '25rem',marginTop:'20px',marginLeft:'40px'}}>
      <Card.Img variant="top" src={news1} />
      <Card.Body>
        <Card.Title>'Australia needed 30 runs in 3 overs. I told Dhoni give me the ball’</Card.Title>
        <Card.Text>
        Harbhajan recalled the big semi-final against Australia. 
        India were defending a big total but thanks to a blistering innings by Matthew Hayden, Australia were right in the chase. 
        </Card.Text>
        <Button variant="warning" href="https://www.hindustantimes.com/cricket/australia-needed-30-runs-in-3-overs-i-told-dhoni-give-me-the-ball-harbhajan-singh-recalls-t20-world-cup-semi-final-in-2007-101664030066837.html">
          Read More..</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col xs={6} md={4}>
        <Card style={{ width: '25rem',marginTop:'20px' }}>
      <Card.Img variant="top" src={news2} />
      <Card.Body>
        <Card.Title>Harmanpreet's savage reply when asked about Deepti's run-outt</Card.Title>
        <Card.Text>
        Harmanpreet Kaur backed Deepti Sharma after the latter ran Charlotte Dean at the non-striker's
         end to seal a 16-run victory for India in the third and final ODI against England.
        </Card.Text>
        <Button variant="warning" href="https://www.hindustantimes.com/cricket/watch-i-thought-you-will-ask-about-harmanpreet-kaur-s-savage-reply-when-asked-about-deepti-sharma-s-run-out-draws-huge-cheer-101664073377317.html">
          Read More..</Button>
      </Card.Body>
    </Card>
        </Col>

        <Col xs={6} md={4}>
        <Card style={{ width: '25rem',marginTop:'20px'}}>
      <Card.Img variant="top" src={news3} />
      <Card.Body>
        <Card.Title>England dressing room's stunned reaction after Deepti's run-out</Card.Title>
        <Card.Text>
        The thrilling third ODI came to a 
        dramatic end with Deepti Sharma's run out of the dangerous Charlie Dean.
        Deepti Sharma's run out of the dangerous Charlie Dean.
        </Card.Text>
        <Button variant="warning" href="https://www.hindustantimes.com/cricket/watch-england-dressing-room-s-stunned-reaction-after-deepti-sharma-s-mankad-moment-completes-india-s-3rd-odi-win-101664040334311.html">
          Read More..</Button>
      </Card.Body>
    </Card>
        </Col>
     </Row>

        
      </Carousel.Item>
    </Carousel>
  </div>

  
    </Base>
  );
};

export default LoguserHome;
