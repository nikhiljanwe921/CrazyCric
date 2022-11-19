import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BiPhoneCall } from "react-icons/bi";
import {CgMail} from "react-icons/cg";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import {FaWhatsapp } from "react-icons/fa";
const Base = ({title = "Welcome to CSMS",children}) => {

    return (

        <div className="container-fluid">
      <Navbar bg="primary" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#link" style={{fontSize:'20px' }}>
                <a style={{textDecoration:'none' ,color:'white'}}><BiPhoneCall />{' '}+91-9175638197 |</a>{'   '}
                {' '}  <a href="https://accounts.google.com/login/identifier?service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin" style={{textDecoration:'underline' , color:'white'}}>
                    crazycrick@gmail.com {' '}<CgMail /></a>
              </Nav.Link>
            
              <Nav.Link href="http://www.facbook.com" style={{marginLeft:'690px'}}>
             
                <a style={{textDecoration:'none',  fontSize:'22px', color:'white' ,
                 padding:'10px 10px 10px 10px'}}>  <FaFacebook /></a>
              {' '}
              </Nav.Link>
              <Nav.Link href="https://www.instagram.com/accounts/login/">
              <a  style={{textDecoration:'none', fontSize:'22px', color:'white' ,
                 padding:'10px 10px 10px 10px'}}>  <FaInstagram /></a>
              </Nav.Link>
              <Nav.Link href="https://web.whatsapp.com/">
              <a style={{textDecoration:'none', fontSize:'22px', color:'white' ,
                 padding:'10px 10px 10px 10px'}}>  <FaWhatsapp /></a>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

            {children}
            <br/>
            <hr></hr>
          
            <footer>
          <h5 style={{textAlign:'center'}}>  ©2022 crazycrick.com | All rights reserved | </h5> 
          <h6 style={{textAlign:'center'}}>
           Developed By : Nikhil Janwe, Utkarsha Bhandwalkar, Pooja kolte, Shubham Pawar. 
           </h6>
          </footer>
        </div>
        
    )
};
export default Base;