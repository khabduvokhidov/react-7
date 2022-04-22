import React from 'react'
import { Link } from 'react-router-dom'
import { useInfoContext } from '../context/Context'

import "../steyls/footer.css"

export default function Footer() {
  const {theme, lang} = useInfoContext()

  return (
    <footer>
      <div className="container">
        <div className="footer_box">

          <div className="footer_header">
            <h1>Biz bilan hamkor bo’ling</h1>
            <p>Biz sifatli va ajoyib modellarni sizga taqdim qilamiz</p>
            <button>Order a project</button>
          </div>
          <div className="footer_foter">
            <div className="footer_left">
              <ul className="footer_list">
                <li className="footer_items">
                  <a className="footer_links" href="#">
                    <h1>dizipro</h1>
                  </a>
                </li>

                <li className="footer_item">
                  <Link className="footer_link">
                      Home
                  </Link>
                </li>

                <li className="footer_item">
                  <Link className="footer_link">
                      Portfolio
                  </Link>
                </li>

                <li className="footer_item">
                  <Link className="footer_link">
                      Order a project
                  </Link>
                </li>

                <li className="footer_item">
                  <Link className="footer_link">
                      Paid courses
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className="footer_right">
                <div className="instagram">
                  <i className="fa-brands fa-instagram"></i>  
                </div>

                <div className="telegram">
                  <i className="fa-brands fa-telegram"></i>  
                </div>

                <div className="facebook">
                  <i className="fa-brands fa-facebook"></i>  
                </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  )
}
