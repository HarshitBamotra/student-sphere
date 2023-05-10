import React from 'react'
import './homepage.css'
// import banner from "./Social media-amico.png"
import banner from '../images/Social media-amico.png';
import { Button } from '@mui/material'

import Modal from '@mui/material/Modal';

import Accordian from './Accordian.js'
import Footer from './Footer.js'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
// import faq from './FAQ.png'
import faq from '../images/FAQ.png';

import Payment from './Payment';

function Pricing() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="pricing">
            <div className="pricing-header">
                <div className="branner_wrapper">
                    <div className="header-img-section">
                        <img className='img-fluid' src={banner} width={"450px"} alt="Banner" />
                    </div>
                </div>
                <div className="banner">
                    <p class="banner-subtitle">- - - - STUDENT SPEHERE - - - -
                    </p>

                    <p class="banner-subtitle">
                        A HUB FOR CAMPUS CONNECTIONS & OPPORTUNITIES
                    </p>
                    <h1 class="banner-title">
                        Join <span>STUDIFY</span> now
                        <br />
                    </h1>
                    <p class="banner-title-text">
                        The next generation social community!
                        Connect with your friends with full profiles, reactions,
                        groups, badges, quests, ranks and much more to come!
                    </p>

                    <Button variant="contained" className='btn-Download' endIcon={<FileDownloadIcon />}>
                        <a href="#pricing" >
                            DOWNLOAD
                        </a>
                    </Button>
                </div>
            </div>
            <div className="pricing-middle">
                <div className="featuresofpremium">
                    <h2>Benifits of STUDIFY Premium </h2>
                    <div className="cardwalasection">
                        <div class="showcase_card">
                            <a href="#faq"><img src="https://cdn-icons-png.flaticon.com/512/978/978063.png"
                                width={'100px'} alt='' /></a>
                            <p class="brand_subtitle">CONNECTIONS</p>
                        </div>
                        <div class="showcase_card">
                            <a href="#faq"><img src={"https://cdn-icons-png.flaticon.com/512/95/95454.png"}
                                width={'100px'} alt=''/></a>
                            <p class="brand_subtitle">SECURITY</p>
                        </div>
                        <div class="showcase_card">
                            <a href="#faq"><img src="https://cdn-icons-png.flaticon.com/512/1391/1391648.png"
                                width={'100px'} alt=''/></a>
                            <p class="brand_subtitle">SCALABILTY</p>
                        </div>
                        <div class="showcase_card">
                            <a href="#faq"><img src="https://cdn-icons-png.flaticon.com/512/3661/3661736.png"
                                width={'100px'} alt=''/></a>
                            <p class="brand_subtitle">CLOUD STORAGE</p>
                        </div>
                        <div class="showcase_card">
                            <a href="#faq"><img src="https://cdn-icons-png.flaticon.com/512/1548/1548914.png"
                                width={'100px'}alt='' /></a>
                            <p class="brand_subtitle">ANALYTICS</p>
                        </div>

                    </div>
                </div>
                <div id='pricing' className="pricingplan">
                    <h2>PRICING PLANS</h2>
                    <div className="plans">
                        <div className="wrapper">
                            <div className="single-price">
                                <p>Basic</p>
                                <div className="price">
                                    <h2>$10</h2>
                                </div>
                                <div className="deals">
                                    <h4>MONTHLY</h4>
                                    <h4>AD free experience</h4>
                                    <h4>Unlimited Connections</h4>
                                    <h4>Download App</h4>
                                </div>
                                <a onClick={handleOpen} href="#">select </a>
                            </div>



                            <div className="single-price">
                                <p>Standard</p>
                                <div className="price">
                                    <h2>$55</h2>
                                </div>
                                <div className="deals">
                                    <h4>6 MONTHS</h4>
                                    <h4>Advanced Analytics</h4>
                                    <h4>Virtual Events</h4>
                                    <h4>Exclusive Content</h4>
                                </div>
                                <a onClick={handleOpen} href="#">select </a>
                            </div>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Payment />
                            </Modal>


                            <div className="single-price">
                                <p>Premium</p>
                                <div className="price">
                                    <h2>$100</h2>
                                </div>
                                <div className="deals">
                                    <h4>12 MONTHS</h4>
                                    <h4>Personalized News feed</h4>
                                    <h4>Private Messaging</h4>
                                    <h4>Mentorship programs</h4>
                                </div>
                                <a onClick={handleOpen} href="#">select </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="pricing-end">
                <div className="mainfaq">
                    <h2>
                        FAQs
                    </h2>
                    <div className="faqhaibhai">
                        <img src={faq} width={'350px'} alt=".." />
                        <Accordian />
                    </div>
                </div>
                <Footer />
            </div>
        </div >

    )
}

export default Pricing
