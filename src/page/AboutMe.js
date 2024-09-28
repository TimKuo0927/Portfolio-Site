import resume from "../YENTING_TIM_resume.pdf"
import self from "../style/img/self.png"

function aboutme(){
    return (
        <>
       <h1>About Me</h1>
       <img src={self} className="about_img"></img>
       <div className="about_title">Yen-Ting, Kuo</div>
       <div className="about_subtitle">郭彥廷</div>

       <div className="aboutme">
       I am a passionate software developer with over a year 
       of experience in full-stack development, specializing in C#, JavaScript,
        and responsive web technologies. Currently pursuing an advanced diploma
         in Software Engineering Technology at Centennial College, 
         I am good at solving complex problems and building innovative solutions.
          My background includes back-end development, front-end development, 
          and optimizing legacy systems to meet evolving needs.
       </div>

       <a href={resume} download>
            My Resume
        </a>
        </>
    )
}

export default aboutme;