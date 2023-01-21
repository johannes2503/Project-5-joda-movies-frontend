import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container className="d-flex">
        <Navbar.Brand className="text-light fs-2">JoDa Movies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-nabar-nav" />
        <Navbar.Collapse className="flex-row-reverse" id="basic-navbar-nav">
          <Nav className="text-left">
            <Nav.Link className="text-light">
              <i className="fas fa-home me-2"></i>HOME
            </Nav.Link>
            <Nav.Link className="text-light">
              <i className="fas fa-sign-in-alt me-2"></i>LOGIN
            </Nav.Link>
            <Nav.Link className="text-light">
              <i className="fas fa-user-plus me-2"></i>SIGN UP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
