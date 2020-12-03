import React from 'react'
import home1 from '../img/home1.png'
// import styled from 'styled-components'
//imported styles
import { About, Description, Image, Hide } from '../styles'

const AboutSection = () => {
    return (
        <About>
            <Description>
                <section className="title">
                    <Hide>
                        <h2>We Work to Make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            Your <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true</h2>
                    </Hide>
                </section>
                <p>Contact Us for stuff</p>
                <button>Contact Us</button>
            </Description>
            <Image className="image">
                <img src={home1} alt="Guy with a camera" />
            </Image>
        </About>
    )
}

export default AboutSection
