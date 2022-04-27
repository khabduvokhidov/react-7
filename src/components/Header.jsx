import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useInfoContext } from "../context/Context";
import Languages from "../languages/Languages.jsx";

import "../steyls/header.css"
import Navbar from "./Navbar";
import NavbarTwo from "./NavbarTwo";


function Header() {
  const {lang, setLang, theme, setTheme} = useInfoContext()
  
  const Text = Languages[lang]
  
  const [ navbar, setNavbar ] = useState(false)

  const [ isMobil, setIsMobil ] = useState(false)

  const changeTheme = () => {
    if(theme === 'light'){
      setTheme('night')
    } else {
      setTheme('light')
    }
  }

  const changeLang = () => {
    if(lang === 'uz'){
      setLang('eng')
    } else {
      setLang('uz')
    }
  }

  const changeBackground = () =>{
    if(window.scrollY >= 80){
      setNavbar(true);
    }else{
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <header className="header">
      <nav className={navbar ? "nav" : "navbar"} 
        onClick={() => setNavbar(false)}
        >
        <div className={isMobil ? "container-mobile" : "container"}>

          <a className="nav_links" href="#">
            <h1>dizipro</h1>
          </a>

          <ul className={isMobil ? "nav-list-mobile" : "nav_list"} >
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
            <a className="nav_icon" href="#">en <i className="fa-solid fa-caret-down"></i></a>
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

      
      <main>
        <div className="container">
          <div className="main_box">
            <h1>We provide you quality service on 3D Modelling</h1>
            <p>We have been providing reliable customer service for several years</p>
            <div className="main_btn_box">
              <Link to="/Register">
                <button>Order a project</button>
              </Link>

              <Link to="/Partfolio">
                <button className="btn_main_right">Our portfolio</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </header>
  );
}

export default Header;