import {useUserContext} from "../../sources/provider/UserProvider";
import {Text} from "react-native";

export default function UserCredentials() {
    const {user: [user, setUser]} = useUserContext();
    return (<Text>Credentials: {user.name} {user.age}</Text>)
}