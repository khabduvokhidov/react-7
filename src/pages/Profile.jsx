import React from 'react'
import { Link } from 'react-router-dom'
import "../steyls/profile.css"
import NavbarTwo from '../components/NavbarTwo'
import ozm from "../images/ozm.jpg"
import profile1 from "../images/profile1.png"
import profile2 from "../images/profile2.png"
import profile3 from "../images/profile3.png"
import profile4 from "../images/profile4.png"
import profile5 from "../images/profile5.png"
import Footer from '../components/Footer'


function Profile() {
  return (
<>
    <NavbarTwo />
    <section className="profile">
      <div className="container">
        <div className="profile_nav">
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
          <div className="profile_right">
            <Link to="/Settings">
              <i className="fa-solid fa-gear"></i> Settings
            </Link>
          </div>
        </div>
        
        <div className="yourAdres">
          <h3>Your orders</h3>
          <h3>Go To Page</h3>
        </div>

        <div className="profile_animating">

          <div className="animating_images">
            <img src={profile1} alt="" />
            <img src={profile2} alt="" />
            <img src={profile3} alt="" />
          </div>

          <div className="animation_text">
            <div className="animation_nav">
              <h3>Animating</h3>
              <span>
                Budget: <h4>$70 000</h4>
              </span>
            </div>

            <div className="animation_footer">
              <div className="animation_color_left">
                <h6>Process:</h6>
                <div className="color_box_red">
                  <div className="red"></div>
                </div>
                <p>Ends: 3 hours</p>
              </div>

              <div className="animation_color_left">
                <h6>Deadline:12/10/2021</h6>
                <div className="color_box_red">
                  <div className="green"></div>
                </div>
                <p>Remained: 20 hours</p>
              </div>

            </div>
          </div>

          <div className="animation_btn">
            <div className="animation_btn_nav">
              <button className="animation_btn_nav_green">View your order</button>
              <button className='animation_btn_nav_blue'>Go Payment page</button>
            </div>
            <p>You must spend 30 % of the total amount to get started.</p>
            <button className="animation_delet">
              Cancel the order
            </button>
          </div>

        </div>

        <div className="profile_animating">

          <div className="animating_images">
            <img src={profile1} alt="" />
            <img src={profile2} alt="" />
            <img src={profile3} alt="" />
          </div>

          <div className="animation_text">
            <div className="animation_nav">
              <h3>Animating</h3>
              <span>
                Budget: <h4>$70 000</h4>
              </span>
            </div>

            <div className="animation_footer">
              <div className="animation_color_left">
                <h6>Process:</h6>
                <div className="color_box_red">
                  <div className="red a"></div>
                </div>
                <p>Ends: 3 hours</p>
              </div>

              <div className="animation_color_left">
                <h6>Deadline:12/10/2021</h6>
                <div className="color_box_red">
                  <div className="green a"></div>
                </div>
                <p>Remained: 20 hours</p>
              </div>

            </div>
          </div>

          <div className="animation_btn">
            <div className="animation_btn_nav">
              <button className="animation_btn_nav_green">View your order</button>
              <button className='animation_btn_nav_blue'>Go Payment page</button>
            </div>
            <p>You must spend 30 % of the total amount to get started.</p>
            <button className="animation_delet">
              Cancel the order
            </button>
          </div>

        </div>

        <div className="profile_animating">

          <div className="animating_images">
            <img src={profile1} alt="" />
            <img src={profile2} alt="" />
            <img src={profile3} alt="" />
          </div>

          <div className="animation_text">
            <div className="animation_nav">
              <h3>Animating</h3>
              <span>
                Budget: <h4>$70 000</h4>
              </span>
            </div>

            <div className="animation_footer">
              <div className="animation_color_left">
                <h6>Process:</h6>
                <div className="color_box_red">
                  <div className="red b"></div>
                </div>
                <p>Ends: 3 hours</p>
              </div>

              <div className="animation_color_left">
                <h6>Deadline:12/10/2021</h6>
                <div className="color_box_red">
                  <div className="green b"></div>
                </div>
                <p>Remained: 20 hours</p>
              </div>

            </div>
          </div>

          <div className="animation_btn">
            <div className="animation_btn_nav">
              <button className="animation_btn_nav_green">View your order</button>
              <button className='animation_btn_nav_blue'>Go Payment page</button>
            </div>
            <p>You must spend 30 % of the total amount to get started.</p>
            <button className="animation_delet">
              Cancel the order
            </button>
          </div>

        </div>

      </div>
    </section>
    <Footer />
</>

  )
}

export default Profile