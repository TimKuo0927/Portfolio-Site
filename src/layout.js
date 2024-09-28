import React from "react";
import {Link} from "react-router-dom"
import logo from "./style/ICON.png"

function layout(){
   return(
    <>
    <div className="layoutbox">
        <div className="headerbox">
        <a href="/">
        <img src={logo}  alt="logo" className="logo" />
        </a>
        <h1>
            My Page
        </h1>
        
        </div>
        
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/AboutMe">About Me</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Projects">Projects</Link>
            <Link to="/Contact">Contact</Link>
        </nav>
    </div>
    </>
   ) 
}

export default layout