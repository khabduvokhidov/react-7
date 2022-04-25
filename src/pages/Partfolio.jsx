import React from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import Navbar from '../components/Navbar';
import img_1_ from "../images/shahar.png";
import img_2_ from "../images/dengiz.png";
import img_3_ from "../images/suvToshi.png";

import "../steyls/Portfolio.css"
import Footer from '../components/Footer';

export default function Partfolio() {
  return (
<>
    <Navbar />
    <section className="partfolio">
        <div className="container">
            <div className="partfolio_box">
                <h1>Our works</h1>
                <div className="partfolio_nav">
                    <a className='partfolio_nav_active' href="#">Furniture</a>
                    <a className='partfolio_nav_link' href="#">Furniture</a>
                    <a className='partfolio_nav_link' href="#">Furniture</a>
                    <a className='partfolio_nav_link' href="#">Furniture</a>
                    <a className='partfolio_nav_link' href="#">Furniture</a>

                </div>
            </div>
        <SRLWrapper>
            <ul className="Main_ul_1">
                <li className="Main_li_1">
                    <img className='img_1' src={img_1_}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={img_2_}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={img_3_}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={img_1_}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={img_2_}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={img_3_}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={img_1_}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={img_2_}  />
                </li>

                <li className="Main_li_1">
                    <img className='img_1' src={img_3_}  />
                </li>
            </ul>
        </SRLWrapper>
        </div>
    </section>
    <Footer />
</>
  )
}
