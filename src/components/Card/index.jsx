export const Card = (props) => {
    let classes = "card"
    classes = (props.className ? classes+` ${props.className}` : classes);
    const centerContent = !!props.centerContent;
    const content = centerContent ? (
        <div className='d-flex justify-content-center align-items-center'><div>{props.children}</div></div>) :
        (<>{props.children}</>);
    return (
        <div className={classes}>
            {content}
        </div>
    );
}