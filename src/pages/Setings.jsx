import React from 'react'
import { Link } from 'react-router-dom'
import NavbarTwo from '../components/NavbarTwo'
import ozm from "../images/ozm.jpg"
import "../steyls/settings.css"

function Setings() {
    return (
    <>
    <NavbarTwo />
        <section className='settings'>
          <div className="container">
            <div className="settings_box">
                <p>Back</p>
                <h1>Settings</h1>
            </div>

            <div className="profile_nav setBottom">
              <div className="profile_left">

                <div className="img_nav_btn3">
                    <a href='https://t.me/khabduvokhidov' className="img_nav_bt3">
                        <img src={ozm} alt="" />
                    </a>
                </div>

                 <div>
                    <h2>Biloliddin Abduvohiddov</h2>
                    <p>@khabduvokhidov</p>
                 </div>
              </div>

            </div>
          </div>
        </section>
    </>
    )
}

export default Setings
