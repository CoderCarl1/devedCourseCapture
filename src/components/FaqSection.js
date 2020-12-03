import React from 'react'
import FaqCard from './FaqCard'

const FaqSection = () => {
    const faq = [
        {
            id: 1,
            question: 'How do I start? 1',
            answer: 'Lorem, ipsum dolor. 1',
        },
        {
            id: 2,
            question: 'Daily Schedule. 2',
            answer: 'Lorem, ipsum dolor. 2',
        },
        {
            id: 3,
            question: 'Payment Methods. 3',
            answer: 'Lorem, ipsum dolor. 3',
        },
        {
            id: 4,
            question: 'What products do you offer. 4',
            answer: 'Lorem, ipsum dolor. 4',
        },
    ]

    return (
        <div>
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
        </div>
    )
}

export default FaqSection
