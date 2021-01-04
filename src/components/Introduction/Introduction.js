import React from 'react'
import intro from '../../assets/intro_placeholder.png'
import './Introduction.css'

function Introduction(){

    return(
        <section className="intro" id="home">
            <h1 className="section__title section__title--intro">
                Hi, I am <strong>Patrik Márton</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">full-stack developer</p>
            <img src={intro} alt="a picture of me" className="intro__img"/>
        </section>
    )

}

export default Introduction