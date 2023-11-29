import "./Header.css"
export default function Header() {
    return (
        <>
            <header>
                <div class="logo"><img src="https://www.dilipmaurya.in/logo-black.svg" alt="" /></div>
                <nav>
                    <ul class="nav-link">
                        <li><a href="#">Work</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Other</a></li>
                    </ul>
                </nav>
                {/* <a href="#" class="cta"><button>Contact</button></a> */}
            </header>
        </>
    )
}