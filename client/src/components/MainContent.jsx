import React from 'react';
import MiddleContainer from './MiddleContainer';
import RightContainer from './RightContainer';
import './MainContent.css';
import { Route, Routes, useLocation } from 'react-router-dom';
// import Explore from './Explore';
import Messages from './Messages';
import Settings from './Settings';
import Notifications from './Notifications';
import Aboutus from './Aboutus';
import Landing from './Landing';
import Pricing from './Pricing';
import NotFound from './NotFound';



function MainContent(){
    const location = useLocation();
    let res1 = location.pathname.includes("/chat")
    let res2 = location.pathname.includes("/about")
    let res3 = location.pathname.includes("/notifications")
    let res4 = location.pathname.includes("/settings")
    let res5 = location.pathname === "/"
    let res6 = location.pathname.includes("/premium");
    let res = res1||res2||res3||res4||res5||res6;

    if(res){
        return(
                <Routes>
                    <Route path='/' element={<Landing />} />
                    <Route path='/chat' element={<Messages />} />
                    <Route path='/premium' element={<Pricing />} />
                    <Route path='/about' element={<Aboutus />} />
                    <Route path='/notifications' element={<Notifications />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/error' element={<NotFound />} />
                </Routes>
        )
    }
    else{
        return(
            <div className='mainContent'>
                <MiddleContainer></MiddleContainer>
                <RightContainer></RightContainer>
            </div>
        )
    }
}

export default MainContent;