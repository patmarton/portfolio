import React from 'react'
import './About.css'
import profilepicture from '../../assets/about.png'
import Fade from 'react-reveal/Fade'

function About(){

    return(
    <section className="about-me" id="about">
        <Fade>
    
        <h2 className="section__title section__title--about">Who I am</h2>
        <p className="section__subtitle section__subtitle--about">Full Stack Developer / Software Engineer</p>
        
        <div className="about-me__body">
            <p>I studied Computer Engineering at the Budapest University of Technology and Economics (BME) where I obtained a Bachelor and Masters degree, majoring in Applied Informatics. During my university studies (from the end of my 2nd year) I started working as a Software Developer intern, where I was involved in UX research, Data Analytics and Application Monitoring.</p>
            <p>After my internship, I started working as a full-time Software Engineer, working on a cloud-based microservice architecture for IoT Monitoring and its user interface.</p>
        </div>
        
        <img src={profilepicture} alt=" " className="about-me__img"/>
        </Fade>
    </section>
 )

}

export default About
