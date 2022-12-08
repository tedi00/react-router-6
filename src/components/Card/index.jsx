import React from "react";

export const Card = (props) => {

    const {title} = props;


    return (<>
        <div className="card">
            <h4>{title}</h4>
        <div className="container-fluid">
            {props.children}
        </div>

        </div>
    </>)
}
