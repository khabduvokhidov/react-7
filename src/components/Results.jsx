import React from 'react'
import resultPhoto from "../images/section1.png"
import "../steyls/results.css"

function Results() {
  return (
    <section className='result'>
        <div className="container">
            <div className="results_nav">
                <h1>Our results</h1>
                <div className="results_box">
                    <div className="results_list">
                        <h2>25 000+</h2>
                        <p>Muvaffaqiyatli loyihalar</p>
                        <i className="fa-solid fa-trophy"></i>
                    </div>

                    <div className="results_list">
                        <h2>45 000+</h2>
                        <p>Muvaffaqiyatli loyihalar</p>
                        <i className="fa-solid fa-clipboard-list f"></i>
                    </div>

                    <div className="results_list">
                        <h2>65 000+</h2>
                        <p>Muvaffaqiyatli loyihalar</p>
                        <i className="fa-solid fa-shuttle-space i"></i>
                    </div>
                </div>
            </div>

        <div className="about">
            <div className="about_photo">
                <img src={resultPhoto} alt="photo" className="about_img" />
            </div>

            <div className="about_title">
                <h1>About us</h1>
                <p>We create digital experiences fully crafted to support your brand. Leveraging on web standards, usability and best practices, the results are fast, responsive, and mobile-optimized. We develop sites to deliver online conversions and frictionless user engagement. Designing flexible and easy to manage back-end foundations with a goal of crafting innovative, future-proofed web solutions.</p>
                <br />
                <p>We create digital experiences fully crafted to support your brand. Leveraging on web standards, usability and best practices, the results are fast, responsive, and mobile-optimized. We develop sites to deliver online</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Results