import React from 'react'
import './Skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Skill(props){

    return (
        <div className="skill" key={props.id}>
            <FontAwesomeIcon icon={props.icon} />
            <h3>{props.field}</h3>
            {props.skill.map((item)=>
                (<p>{item}</p>)
            )}
        </div>
    )

}

export default Skill