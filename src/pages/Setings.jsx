import React from 'react'
import { Link } from 'react-router-dom'
import NavbarTwo from '../components/NavbarTwo'
import ozm from "../images/ozm.jpg"
import Chat from "../components/Chat.jsx"
import Carta from '../components/Carta'
import Email from "../components/Email.jsx"

import "../steyls/settings.css"


function Setings() {
    return (
    <>
    <NavbarTwo />
        <section className='settings'>
          <div className="container">
            <div className="settings_box">
                <Link to="/Order">
                    <p>Back</p>
                </Link>
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
            
            <div className="settings_nav_link">
                <a href="#1">
                    login
                </a>

                <a href="#2">
                    carta
                </a>

                <a href="#3">
                    chat
                </a>
            </div>

            <Chat />
            <Carta />
            <Email />

          </div>
        </section>
    </>
    )
}

export default Setings
