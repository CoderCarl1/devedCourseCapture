import React from 'react'
//import components
import ServiceCard from './ServiceCard'
//import icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'

const ServicesSection = () => {
    const cardData = [
        { id: 1, description: 'Efficient', img: clock },
        { id: 2, description: 'Teamwork', img: teamwork },
        { id: 3, description: 'Diaphragm', img: diaphragm },
        { id: 4, description: 'Affordable', img: money },
    ]

    return (
        <div className="services">
            <h2>
                high <span>quality</span> services{' '}
            </h2>
            <div className="cards">
                {cardData.map((card) => (
                    <ServiceCard
                        key={card.id.toString()}
                        img={card.img}
                        title={card.description}
                        description={card.description}
                    />
                ))}
                <img src={home2} alt="camera" />
            </div>
        </div>
    )
}

export default ServicesSection
