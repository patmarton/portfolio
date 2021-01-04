import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialItem(props){

    return (
        <li className="social-list__item">
            <a className="social-list__link" href={props.url} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={props.icon} />
            </a>
        </li>
    )
}

export default SocialItem