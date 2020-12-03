import React from 'react'

const ServiceCard = ({ img, description, title }) => {
    return (
        <div className="card">
            <div className="icon">
                <img src={img} alt={`${description} icon`} />
                <h3>{title}</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
        </div>
    )
}

export default ServiceCard
