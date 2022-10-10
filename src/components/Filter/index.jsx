import React from "react";

export const Filter = ({submitFilter, reset, ...props}) => {
    const submitText = props.submitText ? props.submitText : "Apply Filters";
    const resetText = props.resetText ? props.resetText : "Reset";
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <form className={props.className ? props.className : ""}>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="form-title">{props.title ? props.title : "Filter"}</h3>
                                </div>
                            </div>

                            {props.children}
                            <div className="row">
                                <div className="col-12 filter-buttons">
                                    <button className="btn btn-blue submit" onClick={submitFilter}>
                                        {submitText}
                                    </button>
                                    <button className="btn btn-outline-danger ms-2" onClick={reset}>
                                        {resetText}
                                    </button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
