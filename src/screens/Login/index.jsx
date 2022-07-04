import {useAuth} from "../../hooks/useAuth";

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
        <button onClick={handleSubmit}>Log in</button>
    )
}