export const Filter = ({submitFilter, reset, ...props}) => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <form className={props.className ? props.className : ""}>

                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="form-title">{props.title ? props.title : "Filter"}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="container-fluid">
                            {props.children}
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 filter-buttons">
                                    <button className="btn btn-blue submit" onClick={submitFilter}>Apply Filters
                                    </button>
                                    <button className="btn btn-outline-danger ms-2" onClick={reset}>Reset</button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
}
