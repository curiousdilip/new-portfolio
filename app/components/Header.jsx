import Link from "next/link";
import "./Header.css";
export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <Link href="/">
            <img src="/logo.svg" alt="" />
          </Link>
        </div>
        <nav>
          <ul className="nav-link">
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Other</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
