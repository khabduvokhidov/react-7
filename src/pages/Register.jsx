import React from 'react'
import "../steyls/register.css"
import { Link } from 'react-router-dom'
import back from "../images/dizipro.png"

function Register() {
  return (
    <section className="register">
      <div className="container">
        <div className="register_nav">
          <Link to="/" className='register_link'>
            <i className="fa-solid fa-chevron-left"></i> Back
          </Link>
          <img src={back} alt="foto" className="register_photo" />
        </div>

        <div className="register_box">
          <div className="register_box_nav">
            <h2 className='bo'>Kirish</h2>
            <h2>Ro'yhatdan o'tish</h2>
          </div>
          <div className="register_box_inputs">
            <p>Email</p>
            <input type="email" placeholder='Email' />
            <p>Joriy parolingiz</p>
            <input type="password" placeholder='Joriy parolingiz'/>
            <a href="#">Kira olmayapsizmi?</a>
            <Link to="/" className='bobutton'>
              <button>Kirish</button>
            </Link>
          </div>
        </div>
        <div className="animation_register"></div>
        <div className="animation_register2"></div>
        <div className="animation_register3"></div>
        <div className="animation_register4"></div>
      </div>
    </section>
  )
}

export default Register