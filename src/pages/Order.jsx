import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavbarTwo from '../components/NavbarTwo'
import orderFoto1 from "../images/order1.png"
import orderFoto2 from "../images/order2.png"
import orderFoto3 from "../images/order3.png"

import "../steyls/order.css"

function Order() {

    const [ dropdown, setDropdown ] = useState(false)
    const [ dropdown2, setDropdown2 ] = useState(false)


  return (
<>
    <NavbarTwo />

    <section className='Order'>
      <div className="container">
        <div className='head'>
          <Link to="/" className='gotohome'>
              Go to Home page
          </Link>
          <h1 className="main">Order a project</h1>
        </div>
        <div className="imput1">
          <div className="text1">
            <p className="title">Title</p>
            <p className="num">0/80</p>
          </div>
          <input className='title_inp' type="text" placeholder='Type here'/>
        </div>
        <div className="imput2">
          <div className="text2">
            <p className='dis'>Discription</p>
          </div>
          <input className='dis_inp' type="text" placeholder='Type here ' />
        </div>

        <div className="select">

          <div className="menu-bar" >
            <div className='order_icon_text' onClick={ () =>setDropdown(!dropdown) }>
            <p className='select_text'>Select 3D skills</p>
            <i className="fa-solid fa-angle-up"></i>
            </div>
              <div className={dropdown ? "none-drop" :"dropdown" }>
                <ul className='drop_ul'>
                  <li className='drop_li'>
                    <span className='drop_span'>
                      <input type="checkbox"/>
                      <p className='drop_text'>3D Modelling</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>3D Print Modelling</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>3D Scanning</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Animating</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Lighting</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Low Poly Modelling</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Particles</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>PBR Modelling</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Rendering</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Rigging</p>
                    </span>   
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Shaders</p>
                    </span>  
                    <span className='drop_span'>
                      <input color='green' type="checkbox" />
                      <p className='drop_text'>Skinning</p>
                    </span> 
                    <span className='drop_span'>
                      <input color='green' type="checkbox" />
                      <p className='drop_text'>Skinning</p>
                    </span> 
                    <span className='drop_span'>
                      <input color='green' type="checkbox" />
                      <p className='drop_text'>Skinning</p>
                    </span>    
                  </li>
                </ul>
              </div>
          </div>
          <div className="menu-bar2" >
            <div className="order_icon_text" onClick={ () =>setDropdown2(!dropdown2) }>
                <p className='select_text'>Select 3D software</p>
                <i className="fa-solid fa-angle-up"></i>
            </div>
              <div className={dropdown2 ? "none-drop2" :"dropdown2  " }>
                <ul className='drop_ul'>
                <li className='drop_li'>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Autodesk 3Ds Max</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>OBJ</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>3D Studio</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Autodesk FBX</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Zbrush</p>
                    </span>
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Substance Designer</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>Lumion</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>GrowFX</p>
                    </span> 
                    <span className='drop_span1'>
                      <input type="checkbox" />
                      <p className='drop_text'>3Ds Max Material Library</p>
                    </span> 
                    <span className='drop_span'>
                      <input type="checkbox" />
                      <p className='drop_text'>PDF</p>
                    </span>     
                  </li>
                </ul>
              </div>
          </div>

        </div>

        <div className="upload">
          <p className="upload_text">Upload image</p>
          <div className="upload-box">
              <div className="upload_img">
                <img src={orderFoto1} alt="photo" className="upload_image" />

                <img src={orderFoto2} alt="photo" className="upload_image" />
                <img src={orderFoto3} alt="photo" className="upload_image" />
              </div>
              <div className="upload_browse">
                  <p className="droptag">Drag or drop reference image here or </p>
                  <a href="" className="browse">Browse</a>
              </div>
          </div>
        </div>

        <div className="deadline">
          <input type="date" className="deadline_input" />

          <span className='none_checkbox'>
            <input type="checkbox" />
            <p>No fixe deadline</p>
          </span>
          
          <label>
            <div className="deadline_icon"><i class="fa-solid fa-dollar-sign"></i>
            </div>
            <input className='deadline_number' type="number" />
          </label>
        </div>

        <span className="order-span">
          <a href="#" className="order_cancel">Cancel</a>
          <a href="#" className="order_start">Start project</a>
        </span>
      </div>
    </section>
    <Footer />
</>
  )
}

export default Order