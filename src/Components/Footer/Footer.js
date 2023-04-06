import React, { useState, useEffect } from 'react';
import './Footer.scss'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
const Footer = () => {

    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])

    return (
        <div className='f-container'>
            <div className='footer'>
                <div className='logo'>
                    <h1>AZHAR</h1>
                </div>
                <div className='socials'>
                    <a href="https://github.com/azharellahii" target='_' rel="noopener" className="i github"><GitHubIcon /></a>
                    <a href="https://www.linkedin.com/in/azhar-ellahi-063765235/" target='_' rel="noopener" className="i linkedin"><LinkedInIcon /></a>
                    <a href="https://www.instagram.com/azharellahi/" target='_' rel="noopener" className="i instagram"><InstagramIcon /></a>
                    <a href="https://twitter.com/azharellahii" target='_' rel="noopener" className="i twitter"><TwitterIcon /></a>
                </div>
                <div className='details'>
                    <h5>Contact : azharellahi.work@gmail.com</h5>
                </div>
            </div>
            <div className='copyright'>
                <h5>copyright @{year} designed my azharellahi.</h5>
            </div>
        </div>
    )
}

export default Footer
