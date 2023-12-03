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


                            {bio.map((item, index) => (
                                <a key={index} href={item.src}>{item.title}</a>

                            ))}
                        </div>
                    </div>
                    <div className="work">
                        <div className="heading">
                            <h4>Work Experience</h4>
                        </div>
                        <div className="work-box">
                            <div className="company-time">
                                <h5>World Health Organization</h5>
                                <p>September 2023 - Present</p>
                            </div>
                            <div className="role-location">
                                <h6>Web Content Executive</h6>
                                <p>R K Puram , New Delhi</p>
                            </div>
                            <div className="responsibility">
                                <ul>
                                    <li>Was responsible for updating any changes on WHO India Website
                                    </li>
                                    <li>Was responsible for updating any changes on WHO India Website
                                    </li> <li>Was responsible for updating any changes on WHO India Website
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="work-box">
                            <div className="company-time">
                                <h5>Taknik Bharti
                                </h5>
                                <p>February 2022 - July 2023</p>
                            </div>
                            <div className="role-location">
                                <h6>Frontend Web Developer
                                </h6>
                                <p>Bikaner, Rajasthan</p>
                            </div>
                            <div className="responsibility">
                                <ul>
                                    <li>Developed Pradhanmantri Sangrahalaya frontend from the designs on adobe xd

                                    </li>
                                    <li>Improved website security through regular updates and maintenance

                                    </li> <li>Collaborated with cross-functional teams to ensure that projects were delivered on time and within budget
                                    </li>
                                    <li>Created responsive websites using HTML, CSS, and JavaScript
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        <div className="heading">
                            <h4>Technical Skills</h4>
                        </div>
                        <div className="skill-box"><p>Languages:<span>JavaScript, HTML/CSS</span></p><p>Platforms:<span>Linux, Amazon Web Services, Windows, MacOS</span></p><p>Tools:<span> Git, MySQL, Amplify</span></p><p>Libraries/Frameworks:<span>Tailwind Css, Nextjs, bootstrap, Reactjs</span></p></div>
                    </div></div>
            </section >
        </>
    )
}