import React from 'react'
import './Intro.css'
import resume from '../../Pdf/Resume.pdf'
const Intro = () => {

    const handleClick = () => {
        window.open(resume, '_blank');
    }

    return (
        <div>
            <div className="b-container">
                <div className="b-left">
                    <span>Hiii, I am</span>
                    <span>Azhar Ellahi</span>
                    <span>Front-end/(UI) Developer :</span>
                    <span>
                        Designing and developing responsive user interface with ability to work with or without team. Creating clean, maintainable and functional code is highest priority. Html / CSS / SCSS / Bootstrap / Semantic-UI / JavaScript / jQuery / React.js / Redux Toolkit & Material-UI...
                    </span>
                </div>
                <div className='b-right'>
                    <button className='resume' onClick={handleClick}>My CV</button>
                </div>
            </div>
        </div>
    )
}
export default Intro
