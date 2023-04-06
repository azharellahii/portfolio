import React from 'react'
import './Exp.scss'
const Exp = () => {
    const expData = [
        {
            name: 'HTML',
            exp: '0 years'
        },
        {
            name: 'CSS',
            exp: '0 years'
        },
        {
            name: 'JAVASCRIPT',
            exp: '0 years'
        },
        {
            name: 'REACT.JS',
            exp: '0 years'
        },
        {
            name: 'REDUX',
            exp: '0 years'
        }
    ]
    return (
        <div className='ex-container'>
            {expData.map((item, i) => {
                return (
                    <div className='exp-item' key={i}>
                        <span className='sp exp-name'>{item.name}</span>
                        <span className='sp exp-time'>{item.exp}</span>
                    </div>
                )
            })}
        </div>
    )
}
export default Exp
