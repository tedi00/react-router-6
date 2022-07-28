
export const Filter = ({callData, ...props}) => {

    return (
        <>
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

            <button className="btn btn-primary submit" onClick={callData}>Call Data!</button>
            </form>
        </>
    );
}
