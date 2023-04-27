import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import { NavLink } from 'react-router-dom'
import  Navbar  from 'react-bootstrap/Navbar';
import  Nav  from 'react-bootstrap/Nav';
import  Button  from 'react-bootstrap/Button';
import  Container  from 'react-bootstrap/Container';


const Header = () => {
  return (
    <div>
        <Navbar bg='dark' variant='dark' expand="lg">
            <Container fluid>
                <Navbar.Brand href='/' className='menu' style={{"color" :'gold'}}>
                    <FontAwesomeIcon icon={faVideoSlash}/> Gold
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='navbarScroll'/>
                <NavbarCollapse id='navbarScroll'>
                    <Nav className='me-auto my-2 my-lg-0'
                        style={{ maxHeight : '100px' }}
                        navbarScroll>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/watchList">watch List</NavLink>
                    </Nav>
                    <Button variant='outline-info'className='me-2'>login</Button>
                    <Button variant='outline-info'>Register</Button>
                </NavbarCollapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header