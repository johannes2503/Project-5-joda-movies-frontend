import NavBar from "./components/NavBar";
import styles from "./styles/App.module.css";
import HomePageLayout from "./components/HomePageLayout";
import "./api/axiosDefaults";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <HomePageLayout />
    </div>
  );
}

export default App;
