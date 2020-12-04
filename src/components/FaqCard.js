import React from 'react'
//styles
import styled from 'styled-components'

const FaqCard = ({ question, answer }) => {
    return (
        <Question>
            <h4>{question}</h4>
            <div className="answer">
                <p>{answer}</p>
            </div>
            <div className="faq-line"></div>
        </Question>
    )
}
const Question = styled.div`
    padding: 3rem;
    cursor: pointer;
    .answer {
        padding: 2rem 0rem;
        p {
            padding: 1rem 0rem;
        }
    }
    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
`

export default FaqCard
