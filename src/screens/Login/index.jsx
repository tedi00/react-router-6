import {useAuth} from "../../hooks/useAuth";
import {Header} from "../../components/Header";
import React, {useState} from "react";
import {LoadingScreen} from "../../components/LoadingScreen";

export const Login = () => {
    const {login} = useAuth();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            login({
                email: "email",
                password: "password"
            }).then(() => {
                setLoading(false);
            });
        }, 4000);
    };

    return (
        <>
            {loading && <LoadingScreen/>}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Header textContent={"Login"}/>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-blue" onClick={handleSubmit}>Identify Yourself</button>
                    </div>
                </div>
            </div>
        </>
    )
}
