import React from 'react';
import './landing.css';
import { IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="landing-footer">
                <div className='footer-icons'>
                    <IconButton color="primary">
                        <GoogleIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton color="primary">
                        <YouTubeIcon />
                    </IconButton>
                </div>
            </div>
            <div className='landing-footer'>
                <span className='footer_credits '
                >© 2023 <a href="#" title="STUDIFY">STUDIFY</a>™ all rights
                    reserved.</span>
            </div>
        </div>

    )
}

export default Footer
