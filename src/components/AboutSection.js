import React from 'react'
import home1 from '../img/home1.png'

const AboutSection = () => {
    return (
        <div>
            <div className="description"></div>
            <section className="title">
                <div className="hide">
                    <h2>We Work to Make</h2>
                </div>
                <div className="hide">
                    <h2>
                        Your <span>dreams</span> come
                    </h2>
                </div>
                <div className="hide">
                    <h2>true</h2>
                </div>
            </section>
            <p>Contact Us for stuff</p>
            <button>Contact Us</button>
            <div className="image">
                <img src={home1} alt="Guy with a camera" />
            </div>
        </div>
    )
}

export default AboutSection
