import React from 'react'
import './Footer.css'
import './SocialItem.js'
import socialData from './socialData.js'
import SocialItem from './SocialItem.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(){

    const socialItems = socialData.map((item) =>{
        return(
            <SocialItem url={item.url} icon={item.icon}/>
        )
    })

    return (
    <footer className="footer">
                <a href="" className="footer__link">Find me on</a>
                <ul className="social-list">
                    {socialItems}
                </ul>
            </footer>
    )

}

export default Footer