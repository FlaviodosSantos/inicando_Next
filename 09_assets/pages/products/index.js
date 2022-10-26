import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Products() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Page of Products</h1>
      <h2 className={styles.title}>
        <Link href="/products/pants">Calças</Link>
      </h2>
      <h3 className={styles.title}>
        <a href="/products/shirt">Camisa</a>
      </h3>
    </div>
  );
}
