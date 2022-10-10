import React from "react";

export const Switch = ({checked, handleChange, ...props}) => {
    let classes = "react-switch";
    classes += props.classes ? props.classes : "";

    const handleClick = () => {
        handleChange(!checked);
    }
    const handleKeyPress = (e) => {
        if(e.key === "ArrowLeft") {
            e.preventDefault();
            handleChange(false);
        }
        if(e.key === "ArrowRight") {
            e.preventDefault();
            handleChange(true);
        }
    }
    return (
        <div onClick={handleClick}
             onKeyDown={handleKeyPress}
             className={classes + (checked ? " checked" : "")}
             tabIndex="0">
            <div role="switch"
                 aria-checked={checked}
                 data-value={checked ? "1" : "0"}
                 className="switch">
            </div>
        </div>
    );
}

