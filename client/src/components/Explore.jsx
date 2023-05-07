import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import ForYou from './ForYou';
import News from './News';
import MiddleContainer from './MiddleContainer';
import RightContainer from './RightContainer';


function Explore() {
    return (
        <>
          <NavBar></NavBar>
          <Routes>
                <Route path="/news" element={<News></News>}></Route>
                <Route path="/forYou" element={<ForYou></ForYou>}></Route>
          </Routes>
        </>
    )
}

export default Explore;