import { Route, Routes } from "react-router-dom"

import React from 'react'
import Home from "./page/Homepage"
import AboutMe from "./page/AboutMe"
import Services from "./page/Services"
import Contact from "./page/Contact"
import Projects from "./page/Projects"
import Layout from "./layout"

import './style/App.css';

const MainRouter = ()=>{
    return (
        <div className="routebox App">
            <Layout/>
            <div className="leftbox"></div>
            <div className="middlebox">
                <Routes>
                    <Route extact path="/" element={<Home/>}/>
                    <Route extact path="/AboutMe" element={<AboutMe/>}/>
                    <Route extact path="/Services" element={<Services/>}/>
                    <Route extact path="/Projects" element={<Projects/>}/>
                    <Route extact path="/Contact" element={<Contact/>}/> 
                </Routes>
            </div>
            <div className="rightbox"></div>
        </div>
    ) 
}

export default MainRouter;