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
                {
                    text: 'Ans3',
                    score: 3,
                    image: undefined
                },
                {
                    text: 'Ans4',
                    score: 4,
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
        if (!currentPageScore) {
            return;
        }
        recordScore(currentPageScore);
        if (cardStep < questions.length - 1) {
            doCardTransition();
            setTimeout(() => {
                setCardStep(cardStep + 1);
            }, 1000)
        } else {
            // TODO: redirect
        }
        setTimeout(() => {
            setCurrentPageScore(undefined);
        }, 1000);

        card.current['querySelectorAll']('span').forEach(item => item.className = 'card-option');
    }
    const goToPreviousCard = () => {
        console.log(scores);
        let scoresCopy = [...scores];
        scoresCopy.pop();
        const newArr = [...scoresCopy];
        if (cardStep <= 0) {
            return;
        }
        doCardTransition();
        setTimeout(() => {
            setCardStep(cardStep - 1);
            setScores([...newArr]);
        }, 1000);
    }
    const doCardTransition = () => {
        card.current['classList'].add('animating');
        setTimeout(() => {
            card.current['className'] = 'react-wrapper'
        }, 2000);
    }


    return (
        <div ref={card} className='react-wrapper'>
            <Card>
                {getCardBody()}
                <div className="row">
                    <div className="col-12 text-center">
                        {cardStep > 0 &&
                        <button className='mt-3 me-3' onClick={() => {
                            goToPreviousCard();
                        }}>Back
                        </button>
                        }
                        <button className='mt-3' onClick={() => {
                            goToNextCard();
                        }}>Next
                        </button>

                    </div>
                </div>
            </Card>
        </div>
    );
}
