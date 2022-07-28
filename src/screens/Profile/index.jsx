import {useEffect, useState} from "react";
import {Filter} from "../../components/Filter";


export const Profile = () => {
    const [data, setData] = useState({
        filterName: "",
        filterRadio: ""
    });

    useEffect(() => {
            setData({...data, filterRadio: "FirstRadio"});
        }, []
    );

    const changeHandler = e => {
        setData({...data, [e.target.name]: e.target.value});
    };

    const fakeCall = (e) => {
        e.preventDefault();
        console.log(data);
    }

    return (
        <>
            <Filter
                title="Test Filter"
                className="filter-class"
                callData={fakeCall}>

                <div className="row">
                    <div className="col-12 col-md-6 my-2 my-md-0">
                        <label htmlFor="filterName">
                            Filter Name:
                            <input
                                id="filterName"
                                className="form-input"
                                type="text"
                                name="filterName"
                                value={data.filterName}
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
                                   checked={data.filterRadio === "FirstRadio"}/>
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
                                   checked={data.filterRadio === "SecondRadio"}
                            />
                            <label className="radio-label" htmlFor="radio2">Radio 2</label>
                        </div>
                    </div>
                </div>

            </Filter>
        </>
    )
}
