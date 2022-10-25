import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1> Pagina de About</h1>
      <h3>
        <Link href="/">Home</Link>
      </h3>
      <h3>
        <a href="/products">Prducts</a>
      </h3>
    </div>
  );
}
