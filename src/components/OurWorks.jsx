import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import { Link } from 'react-router-dom'
import Dengiz from "../images/dengiz.png"
import shahar from "../images/shahar.png"
import suvToshi from "../images/suvToshi.png"
import "../steyls/ourWorks.css"

function OurWorks() {
  return (
    <section className="ourWorks">
        <div className="container">
            <h1 className='ourWorks_text'>Our works</h1>
          <SRLWrapper>
            <ul className="Main_ul_1">
                <li className="Main_li_1">
                    <img className='img_1' src={shahar}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={Dengiz}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={suvToshi}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={shahar}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={Dengiz}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={suvToshi}  />
                </li>
            </ul>
        </SRLWrapper>
        
            <Link className='ourWorks_btn2' to="/Partfolio">
                <button className='ourWorks_btn'>See more  
                    {/* <i className="fa-solid fa-arrow-right"></i> */}
                </button>
            </Link>
        </div>
    </section>
  )
}

export default OurWorks