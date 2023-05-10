import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";
import './notfound.css';
// import Noti from './notifications.png';
import Noti from '../images/notifications.png'

export default function wNotFound() {
    return (
        <div className='notfound'>
            <img src={Noti} alt="" width={'300px'} />
            <p>
                Oops, you've lost in space.
                <br />
                We can't find the page that you're looking for...
            </p>
            <Button variant="contained" className="sign_B" style={{ borderRadius: '25px' ,border:'1px solid #0096ff'}}>
                <Link
                    style={{ textDecoration: 'none', color: '#000', padding: '16px' }}
                    to='/'>
                    GO TO HOME
                </Link>
            </Button>
        </div>
    )
}


