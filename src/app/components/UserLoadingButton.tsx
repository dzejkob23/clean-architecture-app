import {useUserContext} from "../../sources/provider/UserProvider";
import {Button} from "react-native";
import {User} from "../../model/User";

export default function UserLoadingButton() {
    const {user: [user, setUser]} = useUserContext();
    return (
        <Button title="Load fresh user data" onPress={
            () => setUser(() => new User('Karel', 44))
        }/>
    )
}