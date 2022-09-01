import {Header} from "../../components/Header";
import {Filter} from "../../components/Filter";
import {useState, useEffect} from "react";
import {useRequests} from "../../hooks/useRequests";

export const Maps = () => {

    const defaultFilters = {
        mapKey: "",
        mapType: "political"
    }

    const {getData} = useRequests();
    const [filterData, setFilterData] = useState(defaultFilters);

    useEffect(() => {
            setFilterData(defaultFilters);
        }, []
    );

    const updateTable = () => {
        const newBody = (<>
            <tr>
                <td>{filterData.mapKey}</td>
                <td>{filterData.mapType}</td>
            </tr>
        </>);
    }

    const getWithFilterData = (e) => {
        e.preventDefault();
        const data = getData("maps", filterData);
        updateTable();
    }
    const resetFilters = (e) => {
        e.preventDefault();
        setFilterData(defaultFilters);
    }

    const changeHandler = (e) => {
        setFilterData({...filterData, [e.target.name]: e.target.value});
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Header textContent={"Maps"}/>
                    </div>
                </div>
            </div>
            <Filter
                title="Map information"
                className="filter-class"
                submitText="Look for Map"
                submitFilter={getWithFilterData}
                reset={resetFilters}>

                <div className="row">
                    <div className="col-12 col-md-6 my-2 my-md-0">
                        <label htmlFor="mapKey">
                            Map Key:
                            <input
                                id="mapKey"
                                className="form-input"
                                type="text"
                                name="mapKey"
                                value={filterData.mapKey}
                                onChange={(event) => {
                                    changeHandler(event);
                                }}
                            />
                        </label>
                    </div>
                    <div className="col-12 col-md-6 my-2 my-md-0">
                        <div className="d-inline-block">
                            <input onChange={(event) => {
                                changeHandler(event);
                            }}
                                   type="radio"
                                   id="mapType1"
                                   name="mapType"
                                   value="political"
                                   checked={filterData.mapType === "political"}/>
                            <label className="radio-label" htmlFor="mapType1">Political Map</label>
                        </div>
                        <div className="d-inline-block">
                            <input onChange={(event) => {
                                changeHandler(event);
                            }}
                                   type="radio"
                                   id="mapType2"
                                   name="mapType"
                                   value="height"
                                   checked={filterData.mapType === "height"}
                            />
                            <label className="radio-label" htmlFor="mapType2">Height Map</label>
                        </div>
                    </div>

                </div>

            </Filter>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <img className="clipped-image" src="https://via.placeholder.com/300/0000FF/808080" alt="Placeholder"/>
                    </div>
                </div>
            </div>
        </>
    );
}