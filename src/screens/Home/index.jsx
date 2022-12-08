import {Card} from "../../components/Card";
import React, {useEffect, useRef, useState} from "react";
import {CardPage} from "../../components/CardPages/CardPage";

export default function Home() {
    const [cardStep, setCardStep] = useState(0);
    const [scores, setScores] = useState([]);
    const [currentPageScore, setCurrentPageScore] = useState(undefined);
    const card = useRef();

    useEffect(() => {
        console.log(scores);
    }, [scores]);

    const questions = [
        {
            question: "Answer this",
            answers: [
                {
                    text: 'Ans1',
                    score: 1,
                    image: undefined
                },
                {
                    text: 'Ans2',
                    score: 2,
                    image: undefined
                },
            ]
        },
        {
            question: "Answer this2",
            answers: [
                {
                    text: 'Ans1',
                    score: 3,
                    image: undefined
                },
                {
                    text: 'Ans2',
                    score: 4,
                    image: undefined
                },
            ]
        }
    ]
    const recordScore = (score) => {
        const tempArray = [...scores, score];
        setScores(tempArray);
    }

    const getCardBody = () => {
        return (<CardPage question={questions[cardStep].question}
                          answers={questions[cardStep].answers}
                          setScore={setCurrentPageScore}/>
        );
    }

    const goToNextCard = () => {
        if(!currentPageScore) {
            return;
        }
        recordScore(currentPageScore);
        if (cardStep < questions.length-1) {
            setCardStep(cardStep + 1);
        }
        setCurrentPageScore(undefined);
        card.current['querySelectorAll']('span').forEach(item => item.className = 'card-option');
    }


    return (
        <div ref={card} className='react-wrapper'>
            <Card  title='Do thing here'>
                {getCardBody()}
                <button onClick={() => {
                    goToNextCard();
                }}>Next
                </button>
            </Card>
        </div>
    );
}
