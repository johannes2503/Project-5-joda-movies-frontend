import NavBar from "./components/NavBar";
import styles from "./styles/App.module.css";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container></Container>
    </div>
  );
}

export default App;
