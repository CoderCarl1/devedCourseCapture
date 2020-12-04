import React from 'react'
import FaqCard from './FaqCard'
//imported styles
import styled from 'styled-components'
import { About } from '../styles'

const FaqSection = () => {
    const faq = [
        {
            id: 1,
            question: 'How do I start? 1',
            answer: 'Lorem, ipsum dolor. 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quo?',
        },
        {
            id: 2,
            question: 'Daily Schedule. 2',
            answer: 'Lorem, ipsum dolor. 2 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, ea.',
        },
        {
            id: 3,
            question: 'Payment Methods. 3',
            answer: 'Lorem, ipsum dolor. 3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem, temporibus?',
        },
        {
            id: 4,
            question: 'What products do you offer. 4',
            answer: 'Lorem, ipsum dolor. 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, saepe!',
        },
    ]

    return (
        <Faq>
            <h2>
                Any Questions? <span>FAQ</span>{' '}
            </h2>
            {faq.map((q) => (
                <FaqCard
                    key={q.id.toString()}
                    question={q.question}
                    answer={q.answer}
                />
            ))}
        </Faq>
    )
}

const Faq = styled(About)`
    display: block;
    span {
        display: block;
    }
    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

`

export default FaqSection
