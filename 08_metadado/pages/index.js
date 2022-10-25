import styles from "../styles/Home.module.css";
import Link from "next/link";

import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aprendendo Nextjs</title>
        <meta name="keywords" content="Roupas,calçados e bonés" />
        <meta
          name="description"
          content="Encontre a melhor roupa para você"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Home!</a>
        </h1>
        <div className={styles.title}>
          <h3>
            <Link href="/about">About</Link>
            <br></br>
            <a href="/products">Prducts</a>
          </h3>
        </div>
      </main>
    </div>
  );
}
