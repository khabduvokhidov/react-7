import React from 'react';
import NavbarTwo from '../components/NavbarTwo';
import ozm from "../images/ozm.jpg";
import chat from "../images/telegram.png";
import "../steyls/chat.css";

function CHat() {
    return (
    <>
        <div className="chat" id='3'>
            <div className="container">
                <div className="chat_img_box">
                    <img src={chat} alt="" />
                </div>
            </div>
        </div>
    </>
    )
}

export default CHat
