import {NavLink as NavigationLink} from "react-router-dom";

export const NavLink = ({to, text, ...props}) => {
    let classes = "nav-anchor"
    classes = (props.className ? classes + ` ${props.className}` : classes);
    let textClasses = "nav-text";
    if (!props.icon) {
        textClasses += " w-100";
    }
    return (
        <div onClick={props.onClick ? props.onClick : {}} className={classes}>
            <NavigationLink title={text.length > 20 ? text : ''} to={to}>
                <div className={textClasses}>
                    {text}
                </div>
                <div title={text} className="nav-icon">
                    {props.icon}
                </div>
            </NavigationLink>
        </div>
    );
}
