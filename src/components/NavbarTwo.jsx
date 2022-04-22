import React from 'react'
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInfoContext } from "../context/Context";
import Languages from "../languages/Languages.jsx";
import ozm from "../images/ozm.jpg"
import "../steyls/navbarTwo.css"
import OurWorks from './OurWorks';

function NavbarTwo() {

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
    <nav className={navbar ? "nav2" : "navbar1" } >
          <div className={isMobil ? "container-mobile" : "container"}>
            <a className="nav_links2" href="#">
              <h1>dizipro</h1>
            </a>

            <ul className={isMobil ? "nav-list-mobile" : "nav_list2"}>

              <li className="nav_item2">
                <Link to="/" className="nav_link2">
                    Home
                </Link>
              </li>

              <li className="nav_item2">
                <Link to="/" className="nav_link2">
                    Portfolio
                </Link>
              </li>

              <li className="nav_item2">
                <Link to="/Order" className="nav_link2">
                    Order a project
                </Link>
              </li>

              <li className="nav_item2">
                <Link to="/" className="nav_link2">
                    Paid courses
                </Link>
              </li>

              <li className="nav_item2">
                <Link to="/Profile" className="nav_link2">
                    Profile
                </Link>
              </li>
            </ul>

          <div className="nav_box2">
            <a className='nav_icon2' href="#">en <i className="fa-solid fa-caret-down"></i></a>
            <button className="btn_nav2">Order now</button>


            <button className='mobile-menu-icon'
            onClick={() => setIsMobil(!isMobil)} >
              {isMobil ?<i className='fas fa-times'></i> :
                        <i className='fas fa-bars'></i>} 

            </button>

            <div className="img_nav_btn">
              <a href='https://t.me/khabduvokhidov' className="img_nav_bt2">
                  <img src={ozm} alt="" />
              </a>
            </div>
          </div>
        </div>  
      </nav>
  )
}

export default NavbarTwo