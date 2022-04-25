import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInfoContext } from "../context/Context";
import Languages from "../languages/Languages.jsx";
import "../steyls/navbar.css"

function Navbar() {

  const [ navbar, setNavbar ] = useState(false)
  const [ isMobil, setIsMobil ] = useState(false)



  const changeBackground = () =>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)
  return (
    <nav className={navbar ? "nav" : "navbar" } >
          <div className={isMobil ? "container-mobile" : "container"}>

            <a className="nav_links" href="#">
              <h1>dizipro</h1>
            </a>

            <ul className={isMobil ? "nav-list-mobile" : "nav_list"}>


              <li className="nav_item">
                <Link to="/" className="nav_link">
                    Home
                </Link>
              </li>

              <li className="nav_item">
                <Link to="/Partfolio" className="nav_link">
                    Portfolio
                </Link>
              </li>

              <li className="nav_item">
                <Link to="/Order" className="nav_link">
                    Order a project
                </Link>
              </li>

              <li className="nav_item">
                <Link to="/PaidCursor" className="nav_link">
                    Paid courses
                </Link>
              </li>

              
            </ul>

          <div className="nav_box">
            <a className='nav_icon' href="#">en <i className="fa-solid fa-caret-down"></i></a>
            <button className="btn_nav active">Order now</button>
            <Link to="/Register">
              <button className="btn_nav">Register</button>
            </Link>

            <button className='mobile-menu-icon'
            onClick={() => setIsMobil(!isMobil)} >
              {isMobil ?<i className='fas fa-times'></i> :
                        <i className='fas fa-bars'></i>} 

            </button>
          </div>
        </div>  
      </nav>
  )
}

export default Navbar