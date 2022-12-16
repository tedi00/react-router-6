export const ImageDescCard = ({src, ...props}) => {
    const style = props.style ?? {};
    const isRight = props.imageSide?.toLowerCase() === "right";
    return (<>
        <div style={style} className={"image-container-card" + (isRight ? " right" : "")}>
            <div className="row g-0">
                {(props.imageDescription && isRight) && (
                    <div className="col-12 col-md-6">
                        <div
                            className={"image-description" + (isRight ? " left" : "")}>{props.imageDescription}</div>
                    </div>
                )}
                <div className="col-12 col-md-6 position-relative">
                    <img className={'image'} src={src} alt={props.alt ?? "Display image"}/>
                    {props.children}
                </div>
                {(props.imageDescription && !isRight) && (
                    <div className="col-12 col-md-6">
                        <div
                            className={"image-description" + (!isRight ? " right" : "")}>{props.imageDescription}</div>
                    </div>
                )}
            </div>
        </div>
    </>)
}