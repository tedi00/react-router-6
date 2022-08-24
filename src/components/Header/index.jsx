export const Header = ({textContent, ...props}) => {
    let classes = "mt-3 mb-5"
    classes = (props.className ? classes+` ${props.className}` : classes);
    return (
        <h1 className={classes}>{textContent}</h1>
    );
}