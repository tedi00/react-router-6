import {useAuth} from "./index";

export default function AuthHeader() {
    const {user} = useAuth();

    if (user && user.accessToken) {
        // return { Authorization: 'Bearer ' + user.accessToken }; // Spring Boot
        return { 'x-access-token': user.accessToken }; // Node.js Express
    } else {
        return {};
    }
}