import React from 'react';
import './landing.css';
import Typewriter from "typewriter-effect";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';
import Footer from './Footer';
import { Link } from 'react-router-dom';


export default function Landing() {
    let s1 = "STUDENT SPHERE";
    let s2 = "STUDENT COMMUNITY";
    let s3 = "STUDIFY";
    let s4 = "A HUB FOR CAMPUS"
    let s5 = "CONNECTIONS & OPPORTUNITIES"
    return (
        <div className="landing-page">
            <div className="landing-main">
                <div className="landing-typing">
                    <Typewriter
                        options={{
                            strings: [s3, s1, s2, s4, s5],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className="content">
                    <p>
                        The next generation social community!
                    </p>
                    <p>
                        Connect with your friends with full profiles, reactions,
                    </p>
                    <p>
                        groups, badges, quests, ranks and much more to come!
                    </p>
                </div>
                <div className="landing-btns">
                    <Button variant="contained" className='btn-Login' endIcon={<LoginIcon />}>
                        <Link
                            style={{ color: '#fff', textDecoration: 'none' }}
                            to='/login'>
                            LOGIN
                        </Link>
                    </Button>
                    <Button variant="contained" className='btn-Download' endIcon={<FileDownloadIcon />}>
                        <Link to='/premium'>
                            DOWNLOAD
                        </Link>
                    </Button>
                </div>
            </div>
            <Footer />
        </div >
    )
}

