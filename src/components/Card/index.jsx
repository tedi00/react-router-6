export const Card = (props) => {
    let classes = "card"
    classes = (props.className ? classes+` ${props.className}` : classes);
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}