import React, { useState } from "react";
import "./Nav.css"
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Nav = () => {

    const [menu, setMenu] = useState(false)

    const menuClick = () => {
        setMenu(!menu)
    }

    return (
        <div>
            <nav className="n-container">
                <Link to='/' className="li">
                    <h1 className="n-logo">AZHAR</h1>
                </Link>
                <ul className={`nav-links ${menu ? `${"display-mob"}` : ''}`} onClick={() => setMenu(!menu)}>
                    <a href="https://github.com/azharellahii" target='_' rel="noopener" className="i github"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/azharellahi/" target='_' rel="noopener" className="i linkedin"><LinkedInIcon /></a>
                    <a href="https://www.instagram.com/azharellahi/" target='_' rel="noopener" className="i instagram"><InstagramIcon /></a>
                    <a href="https://twitter.com/azharellahii" target='_' rel="noopener" className="i twitter"><TwitterIcon /></a>
                </ul>
                <button className="mobile-menu" onClick={menuClick}>
                    <MenuIcon />
                </button>
            </nav>
        </div>
    )
}

export default Nav;
