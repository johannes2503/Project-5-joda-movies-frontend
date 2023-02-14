import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/HomePageLayout.module.css";

function HomePageLayout() {
  return (
    <Container className={styles.Container}>
      <Row className={styles.Row}>
        <Col className={styles.Col} sm={3}>
          <Row className={styles.ColRow}>test</Row>
          <Row className={styles.ColRow2}>test2</Row>
        </Col>
        <Col sm={9}>
          
        </Col>
      </Row>
    </Container>
  );
}

export default HomePageLayout;
