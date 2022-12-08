import React, {useRef} from "react";

export const CardPage = (props) => {
    const {question, answers, setScore} = props;
    const row = useRef();

    const handleClick = (ans, e) => {
        setScore(ans);
        const element = e.currentTarget;
        row.current['querySelectorAll']('span').forEach(item => item.className = 'card-option');
        element.classList.add('selected');
    }

    return (<>
        <div className="row">
            <div className="col-12">
                <div className="h4">{question}</div>
            </div>
        </div>
        <div ref={row} className="row">
            {answers.map((answer, i) =>
                <div key={i} className='col-12 col-sm-6'>
                    <span className='card-option' onClick={(e) => {handleClick(answer.score, e)}}>
                        {answer.image && <img src={answer.image} alt={answer}/>}
                        {answer.text}
                    </span>

                </div>
            )}
        </div>
    </>)
}
