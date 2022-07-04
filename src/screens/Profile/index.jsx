import {useAuth} from "../../hooks/useAuth";

export const Profile = () => {
    const {logout} = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        logout();
    };

    return (
        <button onClick={handleSubmit}>Log out</button>
    )
}