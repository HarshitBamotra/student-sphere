import React from 'react';
import './NewsElement.css';
import Share from '../images/Share.svg'

function NewsElement(props) {
    return (

        <div className='newsElement'>

            <div className='newsBox'>
                <a href={props.source} className='newsLink' target="_blank" rel='noreferrer'>
                    
                    
                    <div className='newsHeading'>{props.heading}</div>
                    <img src={props.imgSource} alt='' className='newsImage'></img>
                    <div className='newsDesc'>{props.desc}</div>
                    

                </a>
                <div className='newsSomething'>
                    <div className='newsAuthor'>{props.author}</div>
                    <div className='newsShare'>
                        <img src={Share} alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsElement;