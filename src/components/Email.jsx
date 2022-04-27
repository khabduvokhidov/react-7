import React from 'react'
import chek from "../images/chekbook.png";
import odam from "../images/Group (2).png"
import phone from "../images/Phone.png"
import quluf from "../images/quluf.png"
import shopping from "../images/shopping-bag.png"
import sms from "../images/sms.png"

import "../steyls/email.css"

export default function Email() {
  return (
  <>
    <div className="inputs_box" id='1'>
      <div className="inputs_box_text">
        <img src={odam} alt="" className="inputs_img" />
        <input type="text" placeholder='Jaloliddin Esonboyev'/>
        <img className='inputs_box_photo' src={chek} alt="" />
      </div>

      <div className="inputs_box_text">
        <img src={sms} alt="" className="inputs_img" />
        <input type="email" placeholder='jaloliddinrmcf03@gmail.com'/>
        <img className='inputs_box_photo' src={chek} alt="" />
      </div>

      <div className="inputs_box_text">
        <img src={phone} alt="" className="inputs_img" />
        <input type="number" placeholder='(998)99 123-45-67'/>
        <img className='inputs_box_photo' src={chek} alt="" />
      </div>

      <div className="inputs_box_text">
        <img src={quluf} alt="" className="inputs_img" />
        <input type="password" placeholder='******'/>
        <img className='inputs_box_photo' src={chek} alt="" />
      </div>

      <div className="inputs_box_text">
        <img src={shopping} alt="" className="inputs_img" />
        <input type="text" placeholder='7 orders'/>
        <img className='inputs_box_photo' src={chek} alt="" />
      </div>
    </div>
  </>
  )
}
