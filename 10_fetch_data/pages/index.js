import styles from "../styles/Home.module.css";
import Link from "next/link";

import Head from "next/head";
import Image from "next/image";

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

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Home!</a>
        </h1>
        <Image src="/imagens/city.jpg" width="200px" height="400px"></Image>
      </main>
    </div>
  );
}
