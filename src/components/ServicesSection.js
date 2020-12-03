import React from 'react'
//import components
import ServiceCard from './ServiceCard'
//import icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
//imported styles
import styled from 'styled-components'
import { About, Description, Image, Hide } from '../styles'

const ServicesSection = () => {
    const cardData = [
        { id: 1, description: 'Efficient', img: clock },
        { id: 2, description: 'Teamwork', img: teamwork },
        { id: 3, description: 'Diaphragm', img: diaphragm },
        { id: 4, description: 'Affordable', img: money },
    ]

    return (
        <Services>
            <Description>
                <h2>
                    high <span>quality</span> services{' '}
                </h2>
                <Cards>
                    {cardData.map((card) => (
                        <ServiceCard
                            key={card.id.toString()}
                            img={card.img}
                            title={card.description}
                            description={card.description}
                        />
                    ))}
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="camera" />
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2 {
        padding-bottom: 5rem;
    }
    p {
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`
const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export default ServicesSection
