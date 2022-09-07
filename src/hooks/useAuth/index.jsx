import {createContext, useContext, useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {useSessionStorage} from "../useSessionStorage";

const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useSessionStorage("user", null);
    const navigate = useNavigate();

    const login = async (data) => {
        setUser(data);
        navigate("/dashboard/profile", {replace: true});
    };

    const logout = () => {
        setUser(null);
        navigate("/", {replace: true});
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout
        }),
        [user]
    );

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
