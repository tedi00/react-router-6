import {useEffect, useState} from "react";
import {Filter} from "../../components/Filter";


export const Profile = () => {

    const defaultFilters = {
        filterName: "",
        filterRadio: "FirstRadio"
    }

    const [filterData, setFilterData] = useState({
        filterName: "",
        filterRadio: ""
    });
    const [tableData, setTableData] = useState({
        tableHead: (<>
            <tr>
                <th>Head1</th>
                <th>Head2</th>
            </tr>
        </>),
        tableBody: (<></>)
    })

    useEffect(() => {
            setFilterData(defaultFilters);
        }, []
    );

    const changeHandler = (e) => {
        setFilterData({...filterData, [e.target.name]: e.target.value});
    };

    const updateTable = () => {
        const newBody = (<>
            <tr>
                <td>body1</td>
                <td>body2</td>
            </tr>
            <tr>
                <td>body3</td>
                <td>body4</td>
            </tr>
        </>);
        setTableData({...tableData, tableBody: newBody});
    }

    const getWithFilterData = (e) => {
        e.preventDefault();
        console.log(filterData);
        updateTable();
    }
    const resetFilters = (e) => {
        e.preventDefault();
        setFilterData(defaultFilters);
        setTableData({...tableData, tableBody: (<></>)})
    }

    return (
        <>
            <Filter
                title="Test Filter"
                className="filter-class"
                submitFilter={getWithFilterData}
                reset={resetFilters}
            >

                <div className="row">
                    <div className="col-12 col-md-6 my-2 my-md-0">
                        <label htmlFor="filterName">
                            Filter Name:
                            <input
                                id="filterName"
                                className="form-input"
                                type="text"
                                name="filterName"
                                value={filterData.filterName}
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
                                   id="radio1"
                                   name="filterRadio"
                                   value="FirstRadio"
                                   checked={filterData.filterRadio === "FirstRadio"}/>
                            <label className="radio-label" htmlFor="radio1">Radio 1</label>
                        </div>
                        <div className="d-inline-block">
                            <input onChange={(event) => {
                                changeHandler(event);
                            }}
                                   type="radio"
                                   id="radio2"
                                   name="filterRadio"
                                   value="SecondRadio"
                                   checked={filterData.filterRadio === "SecondRadio"}
                            />
                            <label className="radio-label" htmlFor="radio2">Radio 2</label>
                        </div>
                    </div>
                </div>

            </Filter>

            <table className="table table-bordered">
                <thead>{tableData.tableHead}</thead>
                <tbody>{tableData.tableBody}</tbody>
            </table>
        </>
    )
}
