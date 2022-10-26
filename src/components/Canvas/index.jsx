import {useEffect, useRef, useState} from "react";
import {DrawCanvas} from "./DrawCanvas";


export const Canvas = () => {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);

    useEffect(() => {
        setCanvas(new DrawCanvas(canvasRef.current));
    }, []);
    useEffect(() => {
        if (canvas) {
            //change canvas/context properties
        }
    }, [canvas])

    const clearCanvas = () => {
        const ctx = canvas.getContext();
        ctx.clearRect(0, 0, canvas.canvasElement.width, canvas.canvasElement.height);
    }

    return (<canvas tabIndex={0} onBlur={clearCanvas} ref={canvasRef}/>);
}