import Link from "next/link"
import "./Header.css"
export default function Header() {
    return (
        <>
            <header>
                <div className="logo"><img src="https://www.dilipmaurya.in/logo-black.svg" alt="" /></div>
                <nav>
                    <ul className="nav-link">
                        <li><a href="#">Work</a></li>
                        <li><a href="#">About</a></li>
                        <li><Link href="/resume">Resume</Link></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Other</a></li>
                    </ul>
                </nav>
                {/* <a href="#" className="cta"><button>Contact</button></a> */}
            </header>
        </>
    )
}