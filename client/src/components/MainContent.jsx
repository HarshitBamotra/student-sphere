import React from 'react';
import MiddleContainer from './MiddleContainer';
import RightContainer from './RightContainer';
import './MainContent.css';
import { Route, Routes } from 'react-router-dom';
import Explore from './Explore';


function MainContent(){
    return(
        <div className='mainContent'>
            <MiddleContainer></MiddleContainer>
            <RightContainer></RightContainer>
        </div>
    )
}

export default MainContent;