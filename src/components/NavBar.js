import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

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
              <i className="fas fa-user-plus me-2"></i>REGISTER
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
        <Modal.Title>LOGIN</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
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
        <Modal.Title id="contained-modal-title-vcenter">REGISTER</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter a username" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Input Password again</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NavBar;
