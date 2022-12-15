import {useState} from "react";

export const ImageDot = ({src, ...props}) => {
    const [show, setShow] = useState(false);

    const image = (<img className={'image-dot-image' + (show ? ' visible' : '')} src={src} alt={props.alt ? props.alt : "Display image"}/>)

    return (<>
        <div style={props.style ? props.style : {}} onClick={() => {setShow(!show)}} className={"image-dot " + (props.className ? props.className : "") + (show ? " active" : "")}>
            {image}
        </div>
    </>)
}