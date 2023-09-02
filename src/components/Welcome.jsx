import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Login from './Login';


function Welcome() {

  
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container className='justify-content-between d-flex'>
            <div>
          <Navbar.Brand href="">  <img
            src={logo} 
            alt="Logo"
            height="60"
          /></Navbar.Brand>
          
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <h4 className=" mx-3">Yes Shopping</h4>
          </Link>
          <li>
         
        </li>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav " >
          
           
           
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="landing-page-content text-align-center">
        <Container>
          <h1>Welcome to Our Online Shopping Store</h1>
          <Login />
          
        </Container>
      </div>
    </div>
  );
}

export default Welcome;
