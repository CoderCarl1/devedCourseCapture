import React from 'react'
import WorkCard from '../components/workCard'
//styles
import styled from 'styled-components'
//images
import athlete from '../img/athlete-small.png'
import theRacer from '../img/theracer-small.png'
import goodTimes from '../img/goodtimes-small.png'

const OurWork = () => {
    const movieData = [
        { id: 1, title: 'The Racer', img: theRacer },
        { id: 2, title: 'The Athlete', img: athlete },
        { id: 3, title: 'The Good Times', img: goodTimes },
    ]
    return (
        <Work>
            {movieData.map((movie) => (
                <WorkCard
                    key={movie.id.toString()}
                    title={movie.title}
                    img={movie.img}
                />
            ))}
        </Work>
    )
}

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }
`

export default OurWork
