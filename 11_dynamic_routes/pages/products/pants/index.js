import Link from "next/link";

export default function Pants() {
  return (
    <div>
      <h1>Pagina de Calças</h1>
      <ul>
        <li>
          <Link href="/products/pants/bluepant">
            <a>Calça Azul</a>
          </Link>
        </li>
        <li>
          <Link href="/products/pants/redpant">Calça Vermelha</Link>
        </li>
      </ul>
    </div>
  );
}
