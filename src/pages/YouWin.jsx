import React from 'react'
import NavbarTwo from '../components/NavbarTwo'
import { Link } from 'react-router-dom'
import YOu from "../images/youwin.png"

import "../steyls/youWin.css"

export default function YouWin() {
  return (
  <>
    <NavbarTwo />
        <div className="you">
            <div className="container">
                <img src={YOu} alt="" />
                <h2>Your order will be processed shortly and you will be notified.</h2>
                <Link to="/order">
                    <button>Return to home page</button>
                </Link>
            </div>
        </div>
  </>
  )
}
