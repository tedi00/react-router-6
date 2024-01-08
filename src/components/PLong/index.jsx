import {useEffect, useReducer} from "react";

export const TICK_DELAY = 10;
export const SPACE_DELAY = 20;

function displayReducer(state, action) {
    switch (action.type) {
        case 'TICK':
            return {
                ...state,
                text: state.message.substr(0, state.text.length + 1),
            };
        case 'RESET':
            return {
                ...state,
                text: '',
            };
        default:
            throw new Error();
    }
}

export const PLong = ({isVisible, text: message, ...props}) => {
    const [displayState, dispatch] = useReducer(displayReducer, {
        message,
        text: '',
    });
    // Added reset function
    const reset = () => dispatch({ type: 'RESET' });

    useEffect(() => {
        if(isVisible) {
            const delay = displayState.text.slice(-1) === ' ' ? SPACE_DELAY : TICK_DELAY;
            const timer = displayState.text.length < displayState.message.length
                ? setInterval(() => dispatch({type: 'TICK'}), delay)
                : null;

            return () => clearInterval(timer);
        } else {
            reset();
        }

    }, [displayState.text, isVisible]);


    return (
    <>
      <p>{displayState.text}</p>
    </>);
}