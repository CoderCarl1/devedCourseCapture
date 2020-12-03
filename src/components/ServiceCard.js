import React from 'react'
//imported styles
import styled from 'styled-components'

const ServiceCard = ({ img, description, title }) => {
    return (
        <Card>
            <div className="icon">
                <img src={img} alt={`${description} icon`} />
                <h3>{title}</h3>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
        </Card>
    )
}

const Card = styled.div`
    flex-basis: fill;
    .icon {
        display: flex;
        align-items: center;
        h3 {
            margin-left: 1rem;
            background: white;
            color: black;
            padding: 1rem;
        }
    }
`
export default ServiceCard
