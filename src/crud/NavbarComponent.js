import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'


const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">CRUD REACT JS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="active" href="/">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarComponent
