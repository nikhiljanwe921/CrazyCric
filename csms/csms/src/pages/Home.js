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
import news4 from "../components/img/news4.jpg";
import news5 from "../components/img/news5.jpg";
import news6 from "../components/img/news6.jpg";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../components/img/img2.jpg";
const Home = () => {
  
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
              <a style={{textDecoration:'none'}}>
                Live Match
                </a>
            </Nav.Link>

            <Nav.Link href="/previous" style={{color:'red', fontSize:'20px'}}>
              <a style={{textDecoration:'none'}}> 
               Previous Match
              </a>
            </Nav.Link>

            <Nav.Link href="/upcomming" style={{color:'red', fontSize:'20px'}}>
              <a style={{textDecoration:'none'}}>
                Upcomming Match
              </a>
            </Nav.Link>
              <Nav.Link href="#link" style={{marginLeft:'550px'}} >
              <Button variant="danger" href="/employeeLogin">Admin</Button>
              </Nav.Link>

              <Nav.Link href="/adduser">
              <Button variant="warning">Register</Button>{' '}
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
      </div>
      <div className="container-fluid">
      <Row>
        <Col>
        <div >
            <img src={img1} className="center"
           ></img>
          </div>
        </Col>
        <Col>
        <div >
          <br /><br /><br />
              <h3 style={{color:'#262673'}}>About Us</h3>
              <br />
              <div className="container col-lg">
               <h5 style={{marginLeft:'0px', marginRight:'30px',fontWeight:'100'}}>
              Cricket club management project is designed with the motive 
              of managing a cricket club. This software system consists of various
               online 
              booking and management functionaries needed by a cricket club.
              Cricket Score Management System Helps user to see online live score and upcomming 
              Match details.
              Cricket club management project is designed with the motive 
              of managing a cricket club. This software system consists of various
               online 
              booking and management functionaries needed by a cricket club.
              Cricket Score Management System Helps user to see online live score and upcomming 
              Match details.
              </h5>
              </div>
          </div>
        </Col>
       <br />
       </Row>
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
      <Card.Img variant="top" src={news4} />
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
      <Card.Img variant="top" src={news5} />
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
      <Card.Img variant="top" src={news6} />
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

export default Home;
