import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const NavBar = () => {
  const [LoginmodalShow, setLoginModalShow] = React.useState(false);
  const [RegistermodalShow, setRegisterModalShow] = React.useState(false);
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
            <Nav.Link
              className="text-light"
              onClick={() => setLoginModalShow(true)}
            >
              <i className="fas fa-sign-in-alt me-2"></i>LOGIN
            </Nav.Link>
            <Nav.Link
              className="text-light"
              onClick={() => setRegisterModalShow(true)}
            >
              <i className="fas fa-user-plus me-2"></i>SIGN UP
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <LoginModal
          show={LoginmodalShow}
          onHide={() => setLoginModalShow(false)}
        />
        <RegisterModal
          show={RegistermodalShow}
          onHide={() => setRegisterModalShow(false)}
        />
      </Container>
    </Navbar>
  );
};

function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>Test</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function RegisterModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>Test 3</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NavBar;
