import Cursor from "../components/Cursor"
import Header from "../components/Header"
import { bio } from "../data/resume"
import "./resume.css"
export default function resume() {
    return (
        <>
            <Header />
            <Cursor />
            <section id="resume">
                <div className="container">
                    <div className="heading">
                        <h2>Resume</h2>
                    </div>
                    <div className="bio">
                        <h3>Dilip Kumar Maurya</h3>
                        <div className="links">
                            <a href="tel:9899742615">+91 9899742615</a>
                            <a href="mailto:curiousdilip@gmail.com">curiousdilip@gmail.com</a>
                            <a href="https://www.dilipmaurya.in">Website</a>
                            <a href="https://www.linkedin.com/in/curiousdilip/">LinkedIn</a>
                            <a href="https://github.com/curiousdilip">Github</a>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}