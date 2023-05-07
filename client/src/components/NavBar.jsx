import React from 'react';
// import NavElement from './NavElement';
import { Tabs, Tab, Box } from '@mui/material';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';



function NavBar() {

    // React.useEffect(()=>{
    //     var ForYou = document.querySelector('#forYou');
    //     var News = document.getElementById('news');
    //     var Opportunities = document.getElementById('opportunities');

    //     ForYou.addEventListener('click', handleClick);
    //     News.addEventListener('click',handleClick);
    //     Opportunities.addEventListener('click',handleClick);



    //     function handleClick(){
    //         ForYou.classList.remove('navElementActive');
    //         News.classList.remove('navElementActive');
    //         Opportunities.classList.remove('navElementActive');
    //         this.classList.add('navElementActive');
    //     }

    // });

    let navigate = useNavigate();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function handleForYou(){
        navigate("/explore/forYou")
    }
    function handleNews(){
        navigate("/explore/news")
    }
    function handleOpp(){

    }
    return (
        // <div className='navBar'>
        //     <NavElement name="For you" id="forYou"></NavElement>
        //     <NavElement name="News" id="news"></NavElement>
        //     <NavElement name="Opportunities" id="opportunities"></NavElement>
        // </div>

        <Box sx={{ width: '100%', bgcolor: 'black', color: "pink" }}>
                <Tabs value={value} onChange={handleChange} centered sx={{ borderBottom: "1px solid #3e4144" }}>
                    <Tab label="For You" sx={{ color: "white", display: "block", padding: "0 10% 0 10%"}} id="forYou"  onClick={handleForYou}></Tab>
                    <Tab label="News" sx={{ color: "white", display: "block", padding: "0 10% 0 10%"}} id="news" onClick={handleNews} />
                    <Tab label="Opportunities" sx={{ color: "white", display: "block", padding: "0 10% 0 10%" }} id="opportunities" onClick={handleOpp} />
                </Tabs>
        </Box>
    )
}

export default NavBar;