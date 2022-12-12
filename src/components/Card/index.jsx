import React from "react";

export const Card = (props) => {


    return (<>
        <div className="card">
        <div className="container-fluid">
            {props.children}
        </div>

        </div>
    </>)
}
