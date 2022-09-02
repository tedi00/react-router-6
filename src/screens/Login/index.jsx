import {useAuth} from "../../hooks/useAuth";
import {Header} from "../../components/Header";

export const Login = () => {
    const {login} = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        login({
            email: "email",
            password: "password"
        });
    };

    return (
        <>
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