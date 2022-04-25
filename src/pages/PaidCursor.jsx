import React from 'react'
import NavbarTwo from "../components/NavbarTwo.jsx"
import Footer from "../components/Footer.jsx"
import paidFoto from "../images/paid.png"
import paid2 from "../images/paidve.png"
import "../steyls/paidCursor.css"


function PaidCursor() {
  return (
<>
  <NavbarTwo />
    <section className='PaidCursor'>
        <div className="container">
            <h1>Paid courses</h1>
              <div className="paid_box">
                <div className="paid_smail_box">
                    <img src={paidFoto} alt="" />
                    <h4>3Ds Max - Start</h4>
                    <div className="paid_btn">
                        <span>
                            <img src={paid2} alt="" /> $59.99
                        </span>
                        <button>Purchase</button>
                    </div>
                </div>

                <div className="paid_smail_box">
                    <img src={paidFoto} alt="" />
                    <h4>3Ds Max - Start</h4>
                    <div className="paid_btn">
                        <span>
                            <img src={paid2} alt="" /> $59.99
                        </span>
                        <button>Purchase</button>
                    </div>
                </div>

                <div className="paid_smail_box">
                    <img src={paidFoto} alt="" />
                    <h4>3Ds Max - Start</h4>
                    <div className="paid_btn">
                        <span>
                            <img src={paid2} alt="" /> $59.99
                        </span>
                        <button>Purchase</button>
                    </div>
                </div>

                <div className="paid_smail_box">
                    <img src={paidFoto} alt="" />
                    <h4>3Ds Max - Start</h4>
                    <div className="paid_btn">
                        <span>
                            <img src={paid2} alt="" /> $59.99
                        </span>
                        <button>Purchase</button>
                    </div>
                </div>

                <div className="paid_smail_box">
                    <img src={paidFoto} alt="" />
                    <h4>3Ds Max - Start</h4>
                    <div className="paid_btn">
                        <span>
                            <img src={paid2} alt="" /> $59.99
                        </span>
                        <button>Purchase</button>
                    </div>
                </div>
              </div>
        </div>
    </section>
    <Footer />
</>
)
}

export default PaidCursor
