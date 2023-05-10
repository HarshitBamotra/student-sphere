import React from 'react'
// import Cardcomp from './Cardcomp.js'
import StudifyIcon from './StudifyIcon.js'
import Accordian from './Accordian.js'
import './aboutus.css'
import Footer from './Footer.js'
import team from './12704339_5051411.jpg'
import social from './SOCIAL.png'
import connected from './connected.png'
import contact from './Connected world-pana.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function Aboutus() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="aboutus">
      <div className="part-1">
        <StudifyIcon />
        <h3>
          STUDENT-SPEHERE || STUDENT-COMMUNITY
        </h3>
        <h3>
          a hub for campus connections & opportuties
        </h3>
      </div>
      <div className="part-2">
        <div className="aim">
          <div className="aim-part">
            <div className="aim-part-left">
              <p>
                STUDIFY is a social media application that encapsulates the features of different platforms could be a viable idea, as long as there is a demand for such a service and the execution is done correctly
              </p>
              <p>
                The next generation social community!
                Connect with your friends with full profiles, reactions,
                groups, badges, quests, ranks and much more to come!
              </p>

              <p>FEATURES TAKEN: </p>
              <ul>
                <li>
                  Twitter: News & Feed
                </li>
                <li>
                  Discord: Chatting
                </li>
                <li>
                  LinkedIn: Profile building and opportunities
                </li>
              </ul>
            </div>
            <div className="aim-part-right">
              <img src={connected}
                width={'300px'}
                alt="hehe" />
            </div>
          </div>
          <div className="problems">
            <p className="title-heading">
              PROBLEMS IN USING MULTIPLE SOCIAL MEDIA PLATFORM
            </p>
            <div className="problems-main">
              <div className="problems-right">
                <img src={social}
                  width={'350px'}
                  alt="hehe" />
              </div>
              <div className="problems-left">
                <p>
                  The increasing use of multiple social media applications instead of a single app is becoming a concern for individuals and society.
                </p>
                <p>
                  <p className="problemstitlewala">
                    Security risks:
                  </p>
                  Using multiple social media apps on a single device increases the risk of security breaches. Each app may have its own security vulnerabilities, which can be exploited by hackers to gain unauthorized access to your device or personal information.
                </p>
                <p>
                  <p className="problemstitlewala">
                    Data usage:
                  </p>
                  Using multiple social media apps can also result in increased data usage, which can be costly if you have a limited data plan. Some apps, such as video sharing platforms, consume more data than others, which can lead to additional charges on your mobile bill.
                </p>
                <p>
                  Many people are using more than one social media platform to stay connected, share content, and engage with their communities.
                </p>
                <p>
                  While having access to multiple apps can be convenient, it can also have negative effects on mental health, productivity, and personal relationships.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container">
        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>---</h2>
            <h3>Features <br />
              & Benifits</h3>
            <p>Comprehensive and unified experiences</p>
            <p>Improved user experience</p>
            <p>Efficient State Management
            </p>
            <p>Simplified Debugging
            </p>
            <p>Increased Scalability
            </p>
            <p>Enhanced privacy and security
            </p>
            <p>Increased convenience
            </p>
            <p>Increased efficiency</p>
          </div>
        </div>

        <img src={team} alt="team" width={'300px'} />

        <div className="card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
            <h2>---</h2>
            <h3>Future <br />
              Work</h3>
            <p>Can incorporate BLOCKCHAIN technology</p>
            <p>Courses, Competitive platform can be intorduced</p>
            <p>Integration with e-commerce</p>
            <p>Integration with Virtual & Augumented reality experiences</p>
          </div>
        </div>
      </div>


      <div className="part-4">
        <h1>
          ABOUT US
        </h1>
        <div className="plannings">
          <div className="box1">
            <h2>01</h2>
            <h3>MISSION</h3>
            <p>
              Our mission is to provide a comprehensive social media platform that integrates all the best features of existing social media platforms into one single platform. Our goal is to create a space where people can connect with each other, share their interests, and build meaningful relationships, while offering a safe and inclusive environment for all users.
            </p>
          </div>
          <div className="box1">
            <h2>02</h2>
            <h3>VISION</h3>
            <p>
              Our vision is to be the go-to social media platform for people around the world, offering a seamless and engaging experience that empowers individuals and communities to connect, share, and grow together.
            </p>
          </div>
          <div className="box1">
            <h2>03</h2>
            <h3>GOALS</h3>
            <p>
              To empower our users to express themselves, connect with others, and discover new interests in a way that is authentic, positive, and impactful.
              <br />
              We understand that people use social media for different purposes, whether it's to stay connected with friends and family, build their personal brand, or explore new ideas and perspectives. That's why we offer a wide range of features.
            </p>
          </div>
          <div className="box1">
            <h2>04</h2>
            <h3>VALUES</h3>
            <p>
              Inclusivity
              <br />
              Safety
              <br />
              Innovation
              <br />
              Community
              <br />
              User-Centeredness
              <br />
              Authenticity
              <br />
              Flexibility
              <br />
              Engagement
              <br />
              Creativity
              <br />
              Social responsibility
            </p>
          </div>
        </div>
        <div className="credits">
          <p className='heading-4'>
            A nearshore experience like you've never had before
          </p>
          <p className='heading-4'>
            We look forward to building a vibrant and engaged community with you.
          </p>
        </div>
      </div>

      <div className="roles">
        <h1>
          OUR FOUNDERS
        </h1>
        <div className="rolecard">
          <div className="cardroles">
            <h2>ASHUTOSH</h2>
            <p>FORMAL WRITING</p>
            <p>COMPONENTS</p>
            <p>AUTHENTICATION</p>
            <p></p>
            <p></p>
          </div>

          <div className="cardroles">
            <h2>HARSHIT</h2>
            <p>EXPLORE PAGE </p>
            <p>BACKEND</p>
            <p>APIs</p>
            <p></p>
            <p></p>
          </div>
          <div className="cardroles">
            <h2>AYUSH</h2>
            <p>SKELETON</p>
            <p>LANDING</p>
            <p>ABOUT US</p>
            <p>CHAT SECTION</p>
            <p></p>
          </div>

          <div className="cardroles">
            <h2>NIRBHAY</h2>

            <p>AUTHENTICATION</p>
            <p>PROFILE PAGE</p>
            <p>BACKEND</p>
            <p></p>
            <p></p>

          </div>


          <div className="cardroles">
            <h2>ABHINAV</h2>
            <p>FORMAL WRITING</p>
            <p>TESTING</p>
            <p>BADI BADI BAATEIN</p>
          </div>
        </div>
      </div>

      <div className="part-5">
        <h1 className='part5title'>SPONSERS</h1>
        <div className="part5wala">
          <div className="partners">
            <h3>OFFICIAL PARTNERS</h3>
            <div className="partnercardbox-1">
              <div className="partnercard" >
                <img src="https://1000logos.net/wp-content/uploads/2020/05/Logo-Google-Cloud.png" alt="GOOGLE CLOUD" width="100px" />
              </div>
              <div className="partnercard">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Adobe_Corporate_logo.svg/2560px-Adobe_Corporate_logo.svg.png" alt="ADOBE" width="100px" />
              </div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/LeetCode_Logo_black_with_text.svg/2560px-LeetCode_Logo_black_with_text.svg.png" alt="LEETCODE" width="120px" />
            </div>
            <div className="partnercardbox-2">
              <div className="partnercard">
                <img src="https://download.logo.wine/logo/Microsoft_Azure/Microsoft_Azure-Logo.wine.png" alt="Azure" width="120px" />
              </div>
              <div className="partnercard">
                <img src="https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/education-companies/unacademy-logo.png" alt="unacademy" width="120px" />
              </div>
              <div className="partnercard">
                <img src="https://www.pngplay.com/wp-content/uploads/3/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png" alt="AWS" width="70px" />
              </div>
            </div>
          </div>
          <div className='official'>
            <div className="officialcard">
              <h3>OFFICIAL CONNECTIONS PARTNER</h3>
              <img src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png" alt="meta" width='80px' />
            </div>
            <div className="officialcard"><h3>OFFICAL CHAT PARTNER</h3>
              <img src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png' alt="Discord" width='80px' />
            </div>
            <div className="officialcard">
              <h3>OFFICIAL OPPORTUNITIES PARTNER</h3>
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Linkedin" width='65px' />
            </div>
            <div className="officialcard">
              <h3>OFFICIAL FFED PARTNER</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/2491px-Logo_of_Twitter.svg.png" alt="Twitter" width='80px' />

            </div>
            <div className="officialcard">
              <h3>OFFICIAL BROADCASTER</h3>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                alt='Youtube' width="80px" />
            </div>
          </div>
        </div>

      </div>

      <div className="contactus">
        <div className="item">
          <div className="contact">
            <h1>Let's Connect</h1>
            <img src={contact} alt="hehe"
              width={'280px'}
              height={'280px'}
            />
            <div className="ppl">

              <div className="pp">
                <LocationOnIcon
                  style={{
                    color: '#fff',
                    background: '#0096ff',
                    padding: '10px',
                    margin: '0 10px 0 10px',
                    borderRadius: '50%'
                  }} />
                <p>
                  Chandigarh University,
                  <br />
                  Sahibzada Ajit Singh Nagar
                  <br />
                  140413
                </p>
              </div>
              <div className="pp">
                <EmailIcon
                  style={{
                    color: '#fff',
                    background: '#0096ff',
                    padding: '10px',
                    borderRadius: '50%',
                    margin: '0 10px 0 10px',
                  }} />
                <p>
                  msdakm3334@gmail.com
                </p>
              </div>
              <div className="pp">
                <CallIcon

                  style={{
                    color: '#fff',
                    background: '#0096ff',
                    padding: '10px',
                    borderRadius: '50%',
                    margin: '0 10px 0 10px',
                  }} />
                <p>
                  9724132257
                  <br />
                  9958486072
                </p>
              </div>
            </div>
          </div>
          <div className="submit-form">
            <h1>Contact Us</h1>
            <form action="">
              <div className="input-box">
                <input type="text" className='input' required />
                <label htmlFor="">Name</label>
              </div>

              <div className="input-box">
                <input type="email" className='input' required />
                <label htmlFor="">Email</label>
              </div>

              <div className="input-box">
                <input type="te1" className='input' required />
                <label htmlFor="">Phone</label>
              </div>

              <div className="input-box">
                <textarea name="" id="message" cols="30" rows="10"
                  className='input' required
                ></textarea>
                <label htmlFor="">Write your message here</label>
              </div>
              <input type="submit" value="submit" className='contactbtn' onClick={handleClick} />
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                  Feedback Submitted!
                </Alert>
              </Snackbar>
            </form>
          </div>
        </div>
      </div>
      <Footer />

    </div >
  )
}
