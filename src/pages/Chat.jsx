import React from 'react';
import NavbarTwo from '../components/NavbarTwo';
import ozm from "../images/ozm.jpg";
import chat from "../images/telegram.png";
import "../steyls/chat.css";

function Chat() {
    return (
    <>
        <NavbarTwo />
        <div className="chat">
            <div className="container">
              <div className="chat_box">
                <p>Back</p>
                <h1>chat</h1>
              </div>

             <div className="profile_nav setBottom">
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

              </div>

            <div className="chat_img_box">
                <img src={chat} alt="" />
            </div>

            </div>
        </div>
    </>
    )
}

export default Chat
