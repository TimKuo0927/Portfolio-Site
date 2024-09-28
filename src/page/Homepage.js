import tree from "../style/img/tree.png"
import {Link} from "react-router-dom"

function Home(){
    return (
        <>
        <div >
         <div class="title-container">
            <div class="titleleft">Welcome</div>
            <div class="titleright">
                <div>Yen Ting Kuo</div>
                <div class="subtitle">Full-Stack Software Engineer</div>
              
            </div>
        </div>
        <div className="middle-content">
        <div className="buttoncontainer">
            <button className="bt">
                <Link to="/AboutMe"  className="a"> 
                 <span className="span">About Me</span>
                </Link>
            </button>
            <button className="bt">
            <Link to="/Projects" className="a">  
               <span className="span">My Project</span>
            </Link>
            </button>
        </div>
        <div class="mission">
            "Striving to create innovative and impactful software solutions,
             while continuously growing as a developer and team player."
        </div>
        </div>
        <img src={tree} alt="Tree" className="treeimg"></img>
        </div>
        </>
    )
}

export default Home;
// 