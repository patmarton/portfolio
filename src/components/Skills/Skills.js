import React from 'react'
import Skill from './Skill.js'
import skillData from './skillData.js'
import './Skills.css'

function Skills(){

    const skillComponent = skillData.map((item) =>{
         return <Skill id={item.id} field={item.field} skill={item.skill} icon={item.icon}/>
    })

    return(
        <section className="my-skills" id="skills">
            <h2 className="section__title section__title--skills">My skills</h2>
            <div className="skills">
                {skillComponent}
            </div> 
        </section>
    )


}

export default Skills