import React from 'react'
import CartaR from "../images/carta.png" 

import "../steyls/carta.css"


export default function Carta() {
  return (
  <>
    <section className="CreditCarta" id='2'>
        <div className="container">
            <div className="carta_box">
                <div className="carta_title">
                    <label>
                        <h5>Card holder name</h5>
                        <input type="text" placeholder='John David'/>
                    </label>

                    <label>
                        <h5>Card number</h5>
                        <input type="number" placeholder='1234 5678 9876 5432'/>
                    </label>

                    <label className='lableFlex'>
                        <span >
                            <h5>Expiry date</h5>
                            <input type="text" placeholder='12/20'/>
                        </span>

                        <span>
                            <h5>CVV code</h5>
                            <input type="password" placeholder='***'/>
                        </span>
                    </label>


                </div>
                <div className="carta_img">
                    <img src={CartaR} alt="" />
                </div>
            </div>
        </div>
    </section>
  </>
  )
}
