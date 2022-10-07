import {Header} from "../../components/Header";
import {useEffect, useState} from "react";
import {Card} from "../../components/Card";
import {Api} from "../../api";

export const Deities = () => {

    const [deities, setDeities] = useState([]);
    const {endpoints} = Api();

    const getDeities = () => {
        const deityData = endpoints.get.deities();
        console.log(deityData);
        //TODO: Finish getDeities
        setDeities([]);
    }

    useEffect(() => {
        getDeities();
    }, [])

    const deityList = deities.map((deity) =>
        <div className="col-12 col-sm-6 col-md-4 mb-3">
            <Card>
                <h5>{deity.name}</h5>
                <p>
                    {deity.description}
                </p>
                <p>{deity.affiliations}</p>
            </Card>
        </div>
    )

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Header textContent={"Deities"}/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {deityList}
                </div>
            </div>
        </>
    )
}