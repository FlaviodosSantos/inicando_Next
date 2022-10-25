import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Products() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page of Products</h1>
      <h2 className={styles.title}>
        <Link href="/">Back to Home</Link>
      </h2>
      <h3 className={styles.title}>
        Testing the tag a : <a href="/about">About</a>
      </h3>
    </div>
  );
}
