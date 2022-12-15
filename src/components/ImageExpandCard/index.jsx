export const ImageExpandCard = ({src, ...props}) => {
    return (<>
        <div style={props.style ? props.style : {}} className="image-expand-card d-flex flex-column">
            <img className={'image-expandable'} src={src} alt={props.alt ? props.alt : "Display image"}/>
            {props.imageDescription && (<div className="image-description">{props.imageDescription}</div>)}
            {props.children}
        </div>
    </>)
}