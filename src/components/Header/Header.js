import React, {useState, useEffect} from 'react';
import './Header.css'
import logo from '../../assets/patrikmarton.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header(){

    const [activeMenu, setActiveMenu] = useState(0)

    function onHamburgerClick() {
        setActiveMenu(!activeMenu)
    }

    function onMenuItemClick() {
        setActiveMenu(0)
    }

    const notify = () => {
        toast(<div> Deployed on AWS Amplify <FontAwesomeIcon icon={['fab','aws']}/></div>,{hideProgressBar: true,})
        toast(<div> Built with React <FontAwesomeIcon icon={['fab','react']}/></div>,{hideProgressBar: true,})
    }

    useEffect(()=>{
        notify()
    },[])


    return(
        <header className ={ activeMenu ? "nav-open": null}>
            <div className="logo">
                <img src={logo} alt=""/>
                <ToastContainer />
            </div>

            <button className={ activeMenu ? "nav-open nav-toggle" : "nav-toggle"} aria-label="toggle navigation" onClick={onHamburgerClick}>
                <span className="hamburger"></span>
            </button>

            <nav className="nav">
                <ul className="nav__list" onClick={onMenuItemClick}>
                    <li className="nav__item"><a href="#home" className="nav__link">Home</a></li>
                    <li className="nav__item"><a href="#services" className="nav__link">My Services</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About me</a></li>
                    <li className="nav__item"><a href="#work" className="nav__link">My Work</a></li>
                </ul>
            </nav>

        </header>

    )

}

export default Header