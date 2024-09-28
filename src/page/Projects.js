import p1_1 from "../style/img/p1-1.png"
import p1_2 from "../style/img/p1-2.png"
import p1_3 from "../style/img/p1-3.png"
import p2_1 from "../style/img/p2-1.png"
import p2_2 from "../style/img/p2-2.png"
import p2_3 from "../style/img/p2-3.png"
import p3_1 from "../style/img/p3-1.png"
import p3_2 from "../style/img/p3-2.png"
import p3_3 from "../style/img/p3-3.png"

function Projects(){
    return (
        <>
        <h1>
        Projects
        </h1>
        <div className="project_container">
            <div className="first_project">
                <div className="about_title">
                    Quick Recipe Generator
                </div>
                <div className="project_img_container">
                    <a href={p1_2}  target="_blank"><img src={p1_2} className="project_img"></img></a>
                    <a href={p1_1}  target="_blank"><img src={p1_1} className="project_img"></img></a>
                    <a href={p1_3}  target="_blank"><img src={p1_3} className="project_img"></img></a>
                </div>
                <p className="project_p">
                Collaborated in an Agile team to develop a web-based recipe generator, utilizing UML diagrams to define system architecture and behavior. Troubleshot and optimized backend functionality to ensure smooth data retrieval and response handling.
                </p>
            </div>

            <div className="first_project">
                <div className="about_title">
                    Subtitle Player
                </div>
                <div className="project_img_container">
                    <a href={p2_2}  target="_blank"><img src={p2_2} className="project_img"></img></a>
                    <a href={p2_1}  target="_blank"><img src={p2_1} className="project_img"></img></a>
                    <a href={p2_3}  target="_blank"><img src={p2_3} className="project_img"></img></a>
                </div>
                <div className="project_p">
                Developed a Google Chrome extension that synchronizes custom subtitles on web pages. Troubleshot API interactions and optimized storage solutions using Chrome's messaging and storage APIs.
                </div>
            </div>

            <div className="first_project">
                <div className="about_title">
                    My Portfolio
                </div>
                <div className="project_img_container">
                   
                    <a href={p3_1}  target="_blank"><img src={p3_1} className="project_img"></img></a>
                    <a href={p3_2}  target="_blank"><img src={p3_2} className="project_img"></img></a>
                    <a href={p3_3}  target="_blank"><img src={p3_3} className="project_img"></img></a>
                </div>
                <p className="project_p">
                 Create My Personal Portfolio Website using React
                </p>
            </div>
        </div>
        </>
    )
}

export default Projects;