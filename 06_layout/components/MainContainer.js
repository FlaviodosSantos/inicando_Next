import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";

export default function MainContainer({ children }) {
  return (
    <>
      <div className={styles.main}>
        <Navbar />
        <div>{children}</div>
        <Footer className={styles.title} />
      </div>
    </>
  );
}
