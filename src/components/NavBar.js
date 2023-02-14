import React, { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

const NavBar = () => {
  const [LoginmodalShow, setLoginModalShow] = useState(false);
  const [RegistermodalShow, setRegisterModalShow] = useState(false);
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
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };
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
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label className="d-none">username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.username?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="password1">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password1"
              value={password1}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.password1?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}

          <Form.Group controlId="password2">
            <Form.Label className="d-none">Confirm password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="password2"
              value={password2}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.password2?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit">Sign up</Button>
        {errors.non_field_errors?.map((message, idx) => (
          <Alert key={idx} variant="warning" className="mt-3">
            {message}
          </Alert>
        ))}
      </Modal.Footer>
    </Modal>
  );
}

export default NavBar;
