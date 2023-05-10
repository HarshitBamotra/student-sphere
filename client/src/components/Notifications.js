import React from 'react'
import './notifications.css'
import { Link } from 'react-router-dom';


function Notifications() {
  return (
    <div className='notifications'>
      <p className="upar">
        No Notices Right Now!
      </p>
      <p className="niche">
        You have no we notifications right now.
        <br />
        Comeback later
      </p>
      <div className="photowala">
        <img src="https://cdni.iconscout.com/illustration/free/thumb/free-no-messages-4085820-3385489.png"
          alt="Nothing new cheif" width={"250px"} />
      </div>
      <p className="niche">
        You're up to date!" would work well
      </p>
      <div className="btnsectionhumain">
        <button className="combtn prevwala">
          <Link
            style={{ textDecoration: 'none', color: '#fff' }}
            to='/explore'>
            View Past Notifications
          </Link>
        </button>
        <button className="combtn expwala">
          <Link
            style={{ textDecoration: 'none', color: '#fff' }}
            to='/explore'>
            Explore more
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Notifications
