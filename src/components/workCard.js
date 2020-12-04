import React from 'react'
import { Link } from 'react-router-dom'
//styles
import styled from 'styled-components'

const workCard = ({ title, img }) => {
    return (
        <Movie>
            <h2>{title}</h2>
            <div className="line"></div>
            <Link>
                <img src={img} alt={`${title}`} />
            </Link>
        </Movie>
    )
}

const Movie = styled.div`
    padding-bottom: 10rem;
    .line {
        height: 0.5rem;
        background: #ccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;

    }
`

export default workCard
