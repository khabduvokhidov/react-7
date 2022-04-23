import React from 'react'
import { Link } from 'react-router-dom'
import "../steyls/profile.css"
import NavbarTwo from '../components/NavbarTwo'
import ozm from "../images/ozm.jpg"


function Profile() {
  return (
<>
    <NavbarTwo />
    <section className="profile">
      <div className="container">
        <div className="profile_nav">
          <div className="profile_left">
            <img src={ozm} alt="" />
            <div>
              <h2>Biloliddin Abduvohiddov</h2>
              <p>@Biloliddin1150.com</p>
            </div>
          </div>
          <div className="profile_right">
            <Link to="/">
              <i className="fa-solid fa-gear"></i> Settings
            </Link>
          </div>
        </div>
      </div>
    </section>
</>

  )
}

export default Profile