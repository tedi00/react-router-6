import {useEffect, useRef, useState} from "react";
import {DrawCanvas} from "./DrawCanvas";
import {GridCanvas} from "./GridCanvas";
import {CanvasCircle} from "./shapes/CanvasCircle";
import {CanvasCircleSection} from "./shapes/CanvasCircleSection";


export const Canvas = () => {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);
    let c1 = new CanvasCircle(50, 50, 50, "red", "black", 0);
    let c2 = new CanvasCircle(200, 50, 50, "green", "black", 1);
    let c3 = new CanvasCircle(350, 50, 50, "blue", "black", 2);
    let c4 = new CanvasCircleSection(500, 50, 50, "yellow", "black", 90, 3, 0);
    let circles = [c1, c2, c3, c4];
    useEffect(() => {
        // setCanvas(new DrawCanvas(canvasRef.current));
        setCanvas(new GridCanvas(canvasRef.current));
    }, []);
    useEffect(() => {
        if (canvas) {
            canvas.setElements(circles);
        }
    }, [canvas])

    const clearCanvas = () => {
        const ctx = canvas.getContext();
        // ctx.clearRect(0, 0, canvas.canvasElement.width, canvas.canvasElement.height);
    }

    return (<canvas tabIndex={0} onBlur={clearCanvas} ref={canvasRef}/>);
}