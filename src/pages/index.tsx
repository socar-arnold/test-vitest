import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="title">Home</h1>
      <h1 className="title">Socar</h1>
      <nav>
        <ul className="nav">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/server-msw">MSW</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
