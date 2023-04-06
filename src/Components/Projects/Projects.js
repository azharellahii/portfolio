import React from 'react'
import './Projects.scss'
const Projects = () => {

    const projectData = [
        {
            img: 'https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1600',
            head: 'TODO',
            btn1: 'View Project',
            btn2: 'View Code',
            netlify: 'https://todoaz.netlify.app/',
            github: 'https://github.com/azharellahii/todo'
        },
        {
            img: 'https://images.pexels.com/photos/899318/pexels-photo-899318.jpeg?auto=compress&cs=tinysrgb&w=1600',
            head: 'ScoreKeeper',
            btn1: 'View Project',
            btn2: 'View Code',
            netlify: 'https://scorekeeperrr.netlify.app/',
            github: 'https://github.com/azharellahii/Scorekeeper'
        },
        {
            img: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1600',
            head: 'Crypto Price',
            btn1: 'View Project',
            btn2: 'View Code',
            netlify: 'https://cryptopriceee.netlify.app/',
            github: 'https://github.com/azharellahii/Cryptoprice'
        },
        {
            img: 'https://images.pexels.com/photos/6941938/pexels-photo-6941938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            head: '4 in 1 Widget',
            btn1: 'View Project',
            btn2: 'View Code',
            netlify: 'https://4in1-widget.netlify.app/',
            github: 'https://github.com/azharellahii/4in1-widget'
        },
        {
            img: 'https://images.pexels.com/photos/34407/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600',
            head: 'Youtube Search',
            btn1: 'View Project',
            btn2: 'View Code',
            netlify: 'https://youtubesearchaz.netlify.app/',
            github: 'https://github.com/azharellahii/youtube'
        },
        {
            img: 'https://cdn.pixabay.com/photo/2013/09/22/09/15/tablet-184888__340.jpg',
            head: 'Image Search',
            btn1: 'View Project',
            btn2: 'View Code',
            netlify: 'https://unsplashsearchh.netlify.app/',
            github: 'https://github.com/azharellahii/unsplash'
        }
    ]

    const renderedList = projectData.map((item) => {
        return (
            <div className='p-items'>
                <img src={item.img} alt='project-img' />
                <h3>{item.head}</h3>
                <div>
                    <a href={item.netlify} target='_' rel="noopener">
                        <button className='p-btn1'>{item.btn1}</button>
                    </a>
                    <a href={item.github} target='_' rel="noopener">
                        <button className='p-btn2' >{item.btn2}</button>
                    </a>
                </div>
            </div>
        )
    })

    return (
        <div className='p-container'>
            <div className='top'>
                <h1>My Projects:</h1>
            </div>
            <div className='bottom'>
                {renderedList}
            </div>
        </div>
    )
}

export default Projects