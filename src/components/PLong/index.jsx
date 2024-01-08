import {useEffect, useState} from "react";

export const PLong = ({isVisible, ...props}) => {
    const [text, setText] = useState('');
    useEffect(() => {
        if (isVisible) {
            setText('');
            i = 0;
            typeEffect();
        } else {
            setText('');
            i = 0;
        }
    }, [isVisible]);
    const originalText = props.text ?? '';
    let i = 0;
    const typeEffect = () => {
        if (i < originalText.length) {
            setText((prevText) => prevText + originalText.charAt(i));

            // Choose delay: if the character is a space, use a longer delay
            const delay = originalText.charAt(i) === ' ' ? 100 : 20; // adjust delay values here

            i++;
            setTimeout(typeEffect, delay);
        }
    }
    return <p>{text}</p>;
}